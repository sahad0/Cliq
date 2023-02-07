import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ChatList from '../../pages/chat/ChatList';
import TabNavigators from './TabNavigators';
import DrawerContent from '../../Extra/DrawerContent';



export type DrawerStackParams = {
    Tab:undefined,
}

const Drawer = createDrawerNavigator();

const DrawerNavigators = ():JSX.Element => {
  return (
   
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={DrawerContent} screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Tab" component={TabNavigators} /> 

    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;