import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import CreateChannelFormHeader from '../../components/CreateChannelStack/CreateChannelForm/CreateChannelFormHeader';

export default function CreateChannelForm():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <CreateChannelFormHeader height={height} width={width} />
    </SafeAreaView>
  )
}