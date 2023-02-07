import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import CreateChannelMenuHeader from '../../components/CreateChannelStack/CreateChannelMenu/CreateChannelMenuHeader';
import CreateChannelMenuBody from '../../components/CreateChannelStack/CreateChannelMenu/CreateChannelMenuBody';

export default function CreateChannelMenu():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1}}>
      <CreateChannelMenuHeader height={height} width={width} />
      <CreateChannelMenuBody height={height} width={width} />
    </SafeAreaView>
  )
}