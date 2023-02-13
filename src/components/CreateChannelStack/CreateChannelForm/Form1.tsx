import { View, Text } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Material from  'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { FocusState } from './CreateChannelFormBody';
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { descriptionController, titleController } from '../../../store/participantsStore';

type AppProps = {
    height: number,
    width: number,
    focus:{
        input1: boolean,
        input2: boolean,
    },
    setFocus: Dispatch<SetStateAction<FocusState>>,
}


const Form1:FC<AppProps> = ({height,width,focus,setFocus}) => {
    const {name,description} = useAppSelector((state)=>state.cart.channelParticipant.value);
    const dispatch = useAppDispatch();

  return (
   <>
    <View style={{flexDirection:'row',margin:height*0.03,marginBottom:0}}>
            <View style={{height:height*0.1,justifyContent:'center',width:height*0.1,borderRadius:height,backgroundColor:'white',elevation:2}}>
                <Material style={{alignSelf:'center'}} name='camera' color='lightgray' size={30} />
            </View>
            <View style={{marginLeft:height*0.03,height:height*0.05}}>
                <Text style={{color:focus.input1?'#5f5aad':'gray',marginLeft:width*0.02}}>Title</Text>
                <TextInput  value={name} onFocus={()=>setFocus({...focus,input1:true})} onBlur={(e)=>setFocus({...focus,input1:false})} onChangeText={(e)=>{dispatch(titleController({name:e}))}} style={{borderBottomColor: focus.input1? '#5f5aad':'gray',width:width*0.48,borderBottomWidth:1,height:height*0.046}} />
            </View>
      </View>
      <View style={{marginLeft:width*0.1}}>
      <Text style={{color:focus.input2?'#5f5aad':'gray',marginLeft:width*0.02}}>Description</Text>

      <TextInput value={description} onFocus={()=>setFocus({...focus,input2:true})} onBlur={()=>setFocus({...focus,input2:false})} onChangeText={(e)=>{dispatch(descriptionController({description:e}))}} style={{borderBottomColor:focus.input2? '#5f5aad':'gray',width:width*0.7,borderBottomWidth:1,height:height*0.046,}} />

      </View>
   </>
  )
}

export default Form1