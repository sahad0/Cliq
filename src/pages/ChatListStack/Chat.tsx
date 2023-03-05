import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native'
import React from 'react'
import ChatHeader from '../../components/CreateChannelStack/Chat/ChatHeader';
import ChatBody from '../../components/CreateChannelStack/Chat/ChatBody';
import ChatInput from '../../components/CreateChannelStack/Chat/ChatInput';


export default function Chat():JSX.Element {

    const {height,width} = Dimensions.get('screen');



  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'white'}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <ChatHeader height={height} width={width} />
        <ChatBody height={height} width={width} />
        <ChatInput height={height} width={width} />
    </KeyboardAvoidingView>
  )
}