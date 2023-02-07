import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import CreateChannelHeader from '../../components/CreateChannel/CreateChannelHeader';

export default function CreateChannel():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1}}>
        <CreateChannelHeader height={height} width={width} />
    </SafeAreaView>
  )
}