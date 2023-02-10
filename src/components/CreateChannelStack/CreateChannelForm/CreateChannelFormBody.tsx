import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav';


type AppProps = {
    height: number,
    width: number,
}


export type FocusState = {input1:boolean, input2:boolean};

export type TypeState = "PUBLIC" | "PRIVATE" ;

export type VisibilityState = boolean;

const CreateChannelFormBody:FC<AppProps> = ({height,width}):JSX.Element => {

    const [focus,setFocus] = useState<FocusState>({input1:false, input2:false});
    const [type,setType] = useState<TypeState>('PUBLIC');
    const [Visibility,setVisibility] = useState<VisibilityState>(true);

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'CreateChannelForm'>>();




  return (
    <ScrollView style={{flex:1,marginTop:height*0.085,}}>
    <View style={{height:height*0.23,borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,marginTop:height*0.018,elevation:3}}>
      
        <Form1 height={height} width={width} focus={focus} setFocus={setFocus} />
    </View>



    <View style={{height:height*0.18,borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>
        <Form2 height={height} width={width} type={type} setType={setType} />
    </View>
    
    {
        type==='PUBLIC' &&(
            <View style={{height:height*0.25,borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>
                <Form3 height={height} width={width} visibility={Visibility} setVisibility={setVisibility} />
            </View>
        )
    }
    <TouchableOpacity onPress={()=>navigation.navigate('AddParticipants')} style={{height:height*0.07,borderRadius:height*0.01,flexDirection:'row',backgroundColor:'white',alignItems:'center',justifyContent:'space-between',margin:height*0.02,elevation:3,marginTop:0}}>
        <Text style={{color:'black',marginLeft:width*0.08,fontSize:height*0.017}}>Add Participants</Text>
        <Ionicons name='person-add' color={'#5f5aad'} size={22} style={{marginRight:width*0.08}} />

    </TouchableOpacity>
    
    <TouchableOpacity  style={{backgroundColor:'#5f5aad',margin:height*0.02,height:height*0.06,borderRadius:height*0.015,alignItems:'center',justifyContent:'center',marginTop:0}}>
        <Text style={{color:'white',fontSize:height*0.021}}>Create</Text>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default CreateChannelFormBody