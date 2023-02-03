import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/AntDesign';

type AppProps = {
    height: number,
    width: number,
}
interface StateProps {
    organization: Array<OrganisationType>
}

interface OrganisationType  {
    
        id: string,
        isDefault:boolean,
        name:string,
        owner:object
    
}

const OrganisationBody:FC<AppProps> = ({height,width}) => {

    const [orgState,setOrgState] = useState<StateProps>();
    


    useEffect(()=>{
        fetchOrg();
    },[]);
    useEffect(()=>{
        console.log(JSON.stringify(orgState));
    },[orgState]);

    const fetchOrg = async ():Promise<void> => {
        try {
            const {data} = await axios.get('/organization/user-organizations');

            if(data){
                setOrgState(data);

            }
        } catch (err:any) {
            console.log(err.request.responseText);
        }
    }



  return (
    <>
        <View style={{margin:height*0.04,flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:'#2677C3',borderRadius:height*0.02,borderColor:'black',elevation:3}}>
            <Icons name='organization' size={25} style={{margin:height*0.013,}} color={'#FFFFFF'}/>
            </View>
            <Text style={{fontFamily:'ZohoRegular',fontSize:height*0.025,color:'black',marginLeft:width*0.03}}>Organizations</Text>
        </View>


        {/* <FlatList  data={orgState} renderItem={renderItem} keyExtractor={keyExtractor} getItemLayout={getItemLayout} maxToRenderPerBatch={6} /> */}



        <TouchableOpacity style={{marginBottom:height*0.02,height:height*0.09,width:width*0.9,borderColor:'white',elevation:3,justifyContent:'center',alignSelf:'center',borderRadius:10,backgroundColor:'#2677C3'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icons name='organization' size={20} style={{margin:height*0.013,marginLeft:width*0.05}} color={'white'}/>
                    <Text style={{fontFamily:'ZohoRegular',fontSize:height*0.02,color:'white'}}>Fif_Org</Text>
                </View>
                <View style={{marginRight:width*0.05,backgroundColor:'white',borderRadius:height*0.05}}>
                    <Icon name='export' size={25} color={'black'} style={{margin:height*0.01,}} />
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:height*0.02,height:height*0.09,width:width*0.9,borderColor:'white',elevation:3,justifyContent:'center',alignSelf:'center',borderRadius:10,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icons name='organization' size={20} style={{margin:height*0.013,marginLeft:width*0.05}} color={'#2677C3'}/>
                    <Text style={{fontFamily:'ZohoRegular',fontSize:height*0.02,color:'#2677C3'}}>Fif_Org</Text>
                </View>
                {/* <View style={{marginRight:width*0.05,backgroundColor:'white',borderRadius:height*0.05}}>
                    <Icon name='export' size={25} color={'black'} style={{margin:height*0.01,}} />
                </View> */}
            </View>
        </TouchableOpacity>
        

        
    </>
  )
}

export default OrganisationBody