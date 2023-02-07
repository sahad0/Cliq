import { View, Text, Dimensions } from 'react-native'
import React, { FC } from 'react'
import CreateChannelIcon from './CreateChannelIcon'

type AppProps = {
    height: number,
    width: number,
}
const {height,width} = Dimensions.get('screen');


const ChannelListBody:FC<AppProps> = () => {
  return (
    <View style={{flex:1}}>
      <CreateChannelIcon height={height} width={width} />
    </View>
  )
}

export default ChannelListBody;