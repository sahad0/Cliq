import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelDetails from '../../pages/CreateChannelStack/ChannelDetails';
import CreateChannelMenu from '../../pages/CreateChannelStack/CreateChannelMenu';
import CreateChannelForm from '../../pages/CreateChannelStack/CreateChannelForm';
import { ChannelStackParams } from './NavTypes';
import TabNavigators from './TabNavigators';
import AddParticipants from '../../pages/CreateChannelStack/AddParticipants';



const Stack = createNativeStackNavigator<ChannelStackParams>(); 


const CreateChannelStackNav = () => {
  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigators} />

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='ChannelDetails' component={ChannelDetails} />

        <Stack.Screen  options={{animation:'slide_from_right',animationDuration:50}} name='CreateChannelMenu' component={CreateChannelMenu} />

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='CreateChannelForm' component={CreateChannelForm} />

        <Stack.Screen  options={{animation:'slide_from_right'}} name='AddParticipants' component={AddParticipants} />


    </Stack.Navigator>
  )
}

export default CreateChannelStackNav;