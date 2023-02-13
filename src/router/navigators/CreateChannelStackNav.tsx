import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelDetails from '../../pages/CreateChannelStack/ChannelDetails';
import CreateChannelMenu from '../../pages/CreateChannelStack/CreateChannelMenu';
import CreateChannelForm from '../../pages/CreateChannelStack/CreateChannelForm';
import TabNavigators from './TabNavigators';
import AddParticipants from '../../pages/CreateChannelStack/AddParticipants';
import InviteToOrg from '../../pages/ChatListStack/InviteToOrg';
import QuickChat from '../../pages/ChatListStack/QuickChat';
import ChatList from '../../pages/ChatListStack/ChatList';

export  type ChannelStackParams = {
  TabNavigators:undefined,
  ChannelDetails:undefined,
  CreateChannelMenu:undefined,
  CreateChannelForm:undefined,
  AddParticipants:{organization_id:string},
  InviteToOrg:undefined,
  QuickChat:undefined,
  ChatList:undefined,

  
}

const Stack = createNativeStackNavigator<ChannelStackParams>(); 


const CreateChannelStackNav = () => {
  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigators} />

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='ChannelDetails' component={ChannelDetails} />

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='ChatList' component={ChatList} />


        <Stack.Screen  options={{animation:'slide_from_right',animationDuration:50}} name='CreateChannelMenu' component={CreateChannelMenu} />

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='CreateChannelForm' component={CreateChannelForm} />

        <Stack.Screen  options={{animation:'slide_from_right'}} name='AddParticipants' component={AddParticipants} />

        <Stack.Screen  options={{animation:'slide_from_right'}} name='InviteToOrg' component={InviteToOrg} />

        <Stack.Screen  options={{animation:'slide_from_right'}} name='QuickChat' component={QuickChat} />


    </Stack.Navigator>
  )
}

export default CreateChannelStackNav;