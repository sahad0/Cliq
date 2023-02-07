import { View, Text } from 'react-native'
import React, { FC } from 'react'

type AppProps = {
    height: number,
    width: number,
}

const CreateChannelHeader:FC<AppProps> = ({height,width}) => {
  return (
    <View style={{height:height*0.1,backgroundColor:'#5f5aad',width:width}}>
      <Text>:FC</Text>
    </View>
  )
}

export default CreateChannelHeader