import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../../Extra/DrawerContent';
import CreateChannelStackNav from './CreateChannelStackNav';


export type DrawerStackParams ={
  CreateChannelStackNav:undefined,
  WidgetList:undefined,
  ChatList:undefined,
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {
  return (
   
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={DrawerContent} screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="CreateChannelStackNav" component={CreateChannelStackNav} /> 

    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;