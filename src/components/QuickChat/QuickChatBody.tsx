import { View, Text } from 'react-native'
import React, { FC } from 'react'
import InviteBtn from './InviteBtn'


type AppProps = {
    height: number,
    width: number,
}


const QuickChatBody:FC<AppProps> = ({height,width}):JSX.Element => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={{color:'#5f5aad',margin:height*0.03,fontFamily:"ZohoRegular",fontSize:height*0.02}}>Users</Text>
        <Text style={{color:'gray',margin:height*0.01,marginLeft:height*0.03,fontFamily:"ZohoRegular",fontSize:height*0.015}}>This feature is currently under development!</Text>
      </View>
      <InviteBtn height={height} width={width} />
    </View>
  )
}

export default QuickChatBody