import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { number } from 'yup'
import { RadioButton } from 'react-native-paper'
import { VisibilityState } from './CreateChannelFormBody'

type AppProps = {
    height: number,
    width: number,
    visibility: boolean,
    setVisibility : Dispatch<SetStateAction<VisibilityState>>
}


const Form3:FC<AppProps> = ({height,width,visibility,setVisibility}) => {
  return (
   <>
    <Text style={{color:'black',marginLeft:height*0.03,fontSize:height*0.021,marginBottom:height*0.005,marginTop:height*0.012}}>Visibility</Text>

    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setVisibility(true)}  >
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Open to all</Text>
            <Text style={{color:'gray',fontSize:height*0.015}}>Anyone in your organization can find & join</Text>
          </View>
          <View>
          <RadioButton value="true" status={ visibility === true ? 'checked' : 'unchecked' } onPress={() => setVisibility(true)}/>
          </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-around',margin:height*0.01}} onPress={() => setVisibility(false)}>
          <View>
            <Text style={{color:'black',fontSize:height*0.02}}>Personal Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Organiszation members can view /join the channel only on invite.</Text>
          </View>
          <View>
          <RadioButton value="false" status={ visibility === false ? 'checked' : 'unchecked' } onPress={() => setVisibility(false)}/>
          </View>
      </TouchableOpacity>
   </>
  )
}

export default Form3