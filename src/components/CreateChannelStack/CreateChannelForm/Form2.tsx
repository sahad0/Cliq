import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { number } from 'yup'
import { RadioButton } from 'react-native-paper'
import { TypeState } from './CreateChannelFormBody'

type AppProps = {
    height: number,
    width: number,
    type: 'PUBLIC' | 'PRIVATE' ,
    setType: Dispatch<SetStateAction<TypeState>>
}


const Form2:FC<AppProps> = ({height,width,type,setType}) => {



  return (
    <>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setType('PUBLIC')}  >
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Organization Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015}}>Anyone in your organization can find & join</Text>
          </View>
          <View>
          <RadioButton value="PUBLIC" status={ type === 'PUBLIC' ? 'checked' : 'unchecked' } onPress={() => setType('PUBLIC')}/>
          </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setType('PRIVATE')}>
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Personal Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015}}>Organiszation users can join only on invite.</Text>
          </View>
          <View>
          <RadioButton value="PRIVATE" status={ type === 'PRIVATE' ? 'checked' : 'unchecked' } onPress={() => setType('PRIVATE')}/>
          </View>
      </TouchableOpacity>

    </>
  )
}

export default Form2