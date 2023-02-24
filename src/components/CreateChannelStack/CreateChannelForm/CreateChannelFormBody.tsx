import { View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav';
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { filterParticipants, typeController, visibilityController } from '../../../store/participantsStore';
import { Selected } from '../../../pages/CreateChannelStack/AddParticipants';


type AppProps = {
    height: number,
    width: number,
    organizationId:string,
}


export type FocusState = {input1:boolean, input2:boolean};

export type TypeState = "PUBLIC" | "PRIVATE" ;

export type VisibilityState = boolean;

const CreateChannelFormBody:FC<AppProps> = ({height,width,organizationId}):JSX.Element => {

    const [focus,setFocus] = useState<FocusState>({input1:false, input2:false});
    const [stateType,setStateType] = useState<TypeState>('PUBLIC');
    const [Visibility,setVisibility] = useState<VisibilityState>(true);
    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'CreateChannelForm'>>();
    
    const {type,visibility,participants_list,} = useAppSelector((state)=>state.cart.channelParticipant.value);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        setStateType(type);
        setVisibility(visibility);
    },[]);

    useEffect(()=>{
        dispatch(typeController({type:stateType}));
    },[stateType]);
    useEffect(()=>{
        dispatch(visibilityController({visibility:Visibility}));
    },[Visibility]);

  return (
    <ScrollView style={{flex:1,marginTop:height*0.085,}}>
      
        <Form1 height={height} width={width} focus={focus} setFocus={setFocus} />


        <View style={{borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>

        <Form2 height={height} width={width} stateType={stateType} setStateType={setStateType} />

        </View>

    {
        stateType==='PUBLIC' &&(
            <View style={{borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>
                <Form3 height={height} width={width} visibility={Visibility} setVisibility={setVisibility} />
            </View>
        )
    }
    <View style={{height:participants_list.length>0? height*0.18 : height*0.07,backgroundColor:'white',borderRadius:height*0.01,margin:height*0.02,elevation:2,marginTop:0}}>
        <TouchableOpacity onPress={()=>navigation.navigate('AddParticipants',{organization_id:organizationId})} style={{height:height*0.07,flexDirection:'row',borderRadius:height*0.01,backgroundColor:'white',alignItems:'center',justifyContent:'space-between',}}>
            <Text style={{color:'black',fontSize:height*0.018,marginLeft:height*0.045}}>Add Participants</Text>
            <Ionicons name='person-add' color={'#5f5aad'} size={height*0.026} style={{marginRight:width*0.08}} />

        </TouchableOpacity>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{borderRadius:height*0.01,backgroundColor:'white'}}>
        
        {
         participants_list && participants_list.map((k:Selected,i:number)=>{
             
             return(
             
             <Pressable onPress={()=>dispatch(filterParticipants({id:k.id}))}  key={i} style={{alignItems:'center',justifyContent:'center',marginTop:height*0.035,margin:height*0.027,marginRight:0,marginLeft:width*0.035,marginBottom:height*0.05}}>
                 <View>
                     <Image source={require('../../../assets/images/profile.png')} style={{height:height*0.055,width:height*0.055,}} />
                     <View style={{top:height*0.035,borderColor:'white',borderWidth:1.5,left:height*0.039,height:height*0.018,width:height*0.018,borderRadius:height,backgroundColor:'lightgray',position:'absolute'}} >
                         <Text style={{fontSize:height*0.009,color:'white',alignSelf:'center'}}>x</Text>
                     </View>
                 </View>
                 <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'black',alignSelf:'center'}}>{k.name}</Text>
             </Pressable>
         )})
        }
         
     </ScrollView>
    </View>
    
    <TouchableOpacity  style={{backgroundColor:'#5f5aad',margin:height*0.02,height:height*0.06,borderRadius:height*0.015,alignItems:'center',justifyContent:'center',marginTop:0}}>
        <Text style={{color:'white',fontSize:height*0.021}}>Create</Text>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default CreateChannelFormBody