import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import ChatListHeader from '../../components/ChatList/ChatListHeader';
import DrawerNavigators from '../../router/navigators/DrawerNavigators';

export default function WidgetList():JSX.Element {
    const {width,height}  = Dimensions.get('screen');

    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <ChatListHeader height={height} width={width} />
      </SafeAreaView>
    )
}