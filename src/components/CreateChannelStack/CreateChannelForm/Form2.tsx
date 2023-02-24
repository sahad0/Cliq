import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { number } from 'yup'
import { RadioButton } from 'react-native-paper'
import { TypeState } from './CreateChannelFormBody'
import { useAppSelector } from '../../../Hooks/hooks'

type AppProps = {
    height: number,
    width: number,
    stateType: 'PUBLIC' | 'PRIVATE' ,
    setStateType: Dispatch<SetStateAction<TypeState>>
}


const Form2:FC<AppProps> = ({height,width,stateType,setStateType}) => {



  return (
    <>
      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.05,marginTop:height*0.03,marginBottom:height*0.02}} onPress={() => setStateType('PUBLIC')} >
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Organization Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Anyone in your organization can find & join</Text>
          </View>
          <View style={{alignSelf:'center'}}>
          <RadioButton value="PUBLIC"  status={ stateType === 'PUBLIC' ? 'checked' : 'unchecked' } onPress={() => setStateType('PUBLIC')}/>
          </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.05,marginTop:0,marginBottom:height*0.035}} onPress={() => setStateType('PRIVATE')} >
          <View>
          <Text style={{color:'black',fontSize:height*0.02}}>Private Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Only people you invite can find & join.</Text>
          </View>
          <View style={{alignSelf:'center'}}>
          <RadioButton value="PRIVATE" status={ stateType === 'PRIVATE' ? 'checked' : 'unchecked' } onPress={() => setStateType('PRIVATE')}/>
          </View>
      </TouchableOpacity>

    </>
  )
}

export default Form2