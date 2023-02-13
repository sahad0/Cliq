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

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setStateType('PUBLIC')}  >
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Organization Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015}}>Anyone in your organization can find & join</Text>
          </View>
          <View>
          <RadioButton value="PUBLIC" status={ stateType === 'PUBLIC' ? 'checked' : 'unchecked' } onPress={() => setStateType('PUBLIC')}/>
          </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setStateType('PRIVATE')}>
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Personal Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015}}>Organiszation users can join only on invite.</Text>
          </View>
          <View>
          <RadioButton value="PRIVATE" status={ stateType === 'PRIVATE' ? 'checked' : 'unchecked' } onPress={() => setStateType('PRIVATE')}/>
          </View>
      </TouchableOpacity>

    </>
  )
}

export default Form2