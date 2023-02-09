import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigators from './TabNavigators';
import DrawerContent from '../../Extra/DrawerContent';
import { DrawerStackParams } from './NavTypes';
import CreateChannelStackNav from './CreateChannelStackNav';




const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {
  return (
   
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={DrawerContent} screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="CreateChannelStackNav" component={CreateChannelStackNav} /> 

    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;