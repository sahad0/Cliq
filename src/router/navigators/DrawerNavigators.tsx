import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigators from './TabNavigators';
import DrawerContent from '../../Extra/DrawerContent';
import { DrawerStackParams } from './NavTypes';




const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {
  return (
   
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={DrawerContent} screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="Tab" component={TabNavigators} /> 

    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;