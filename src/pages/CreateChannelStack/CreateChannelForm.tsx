import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import CreateChannelFormHeader from '../../components/CreateChannelStack/CreateChannelForm/CreateChannelFormHeader';
import CreateChannelFormBody from '../../components/CreateChannelStack/CreateChannelForm/CreateChannelFormBody';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';

export default function CreateChannelForm():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <CreateChannelFormHeader height={height} width={width} />
        <CreateChannelFormBody height={height} width={width} />
    </SafeAreaView>
  )
}