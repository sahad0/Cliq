import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import { Formik, FormikProps } from 'formik'
import { organisationSchema } from '../../Extra/YupSchema/Schema'
import requestStatus, { initial_state } from '../../utils/LoaderHandling'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import axios from 'axios'
import { endEvent } from 'react-native/Libraries/Performance/Systrace'
import { useAppDispatch } from '../../Hooks/hooks'
import { userTypeController } from '../../store/store'
import { boolean } from 'yup'

type AppProps = {
    height:number,
    width:number,
}

type FormikValues = {
    orgName:string
}
type focusBool = true|false;

type Data = {name:string,is_discoverable:boolean}



const NameOrgBody:FC<AppProps> = ({height,width}):JSX.Element => {

    const [focus,setFocus] = useState<focusBool>(false);
    const [toggleCheckBox, setToggleCheckBox] = useState<focusBool>(false)
  
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const dispatch = useAppDispatch();



    const handleCreateOrg = async (values:FormikValues):Promise<void> => {
        const val:Data = {name:values.orgName,is_discoverable:toggleCheckBox};
        try {
          setEventReducer({type: 'loading'});
          const {data}  = await axios.post('/organization/create',val);
          if(data){
            setEventReducer({type: 'success'});
            dispatch(userTypeController({orgNewUser:false}));
          }
          else{
            setEventReducer({type: 'error'});
          }
        } catch  (err:any) {
          if (err) {
            setEventReducer({type:'error'});
          }
        }
    }


  return (
    <View style={{backgroundColor:'white',height:"100%"}}>
        <View style={{marginTop:height*0.2,marginLeft:height*0.02}}>
            <Text style={{color:'#3B99FD',marginLeft:width*0.03,fontSize:height*0.018}}>Create your own company</Text>
            <Text style={{marginTop:height*0.03,marginLeft:width*0.03,color:'gray'}}>Your company name</Text>

            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={organisationSchema} initialValues={{orgName:''}} onSubmit={handleCreateOrg}>
            
            {({ handleChange, handleSubmit,values ,errors }:FormikProps<FormikValues>) => (
              
                <>
                  <TextInput placeholderTextColor={'gray'}  onChangeText={handleChange('orgName')} value={values.orgName} onFocus={()=>setFocus(true)}  onBlur={()=>{setFocus(false)}}  style={{color:'black',fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1,fontSize:height*0.018}} />
                  <Text style={{marginTop:height*0.03,marginLeft:width*0.03,color:errors.orgName?'red':'lightgray',textAlign:'right',marginRight:width*0.05}}>Min. 4-Max.30 characters</Text>
                
            <Text style={{color:'#3B99FD',marginLeft:width*0.03,fontSize:height*0.016,marginTop:height*0.04}}>While a verified user tries to join Zoho Cliq,</Text>

            <View style={{flexDirection:'row',width:width*0.9,margin:height*0.012,marginTop:height*0.05}}>
            <BouncyCheckbox size={18} fillColor='#3B99FD' iconStyle={{borderRadius:0}} innerIconStyle={{borderRadius:0}} onPress={(isChecked: boolean) => {setToggleCheckBox(isChecked)}} />
            <Text style={{color:'gray'}}>Allow the user to discover your company and send request to join</Text>
            </View>

                  <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:'#3B99FD',width:width*0.5,alignSelf:'flex-end',marginRight:width*0.05,marginTop:height*0.07,height:height*0.075,borderRadius:7,justifyContent:'center'}}>
                     
                     {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                      <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{"Create Company"}</Text>
                      </>
                     }
                  </TouchableOpacity>
                </>

            )}
                

            </Formik>
            </View>
        </View>
  )
}

export default NameOrgBody;