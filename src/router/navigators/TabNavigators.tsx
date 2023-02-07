import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatList from '../../pages/chat/ChatList'
import WidgetList from '../../pages/chat/WidgetList'
import ChannelList from '../../pages/chat/ChannelList'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export type TabStackParams ={
    ChatList:undefined,
    ChannelList:undefined,
    WidgetList:undefined,
}

const Tab = createBottomTabNavigator<TabStackParams>();

export default function TabNavigators():JSX.Element {

  const {height,width} = Dimensions.get('screen');
    
  return (
    <Tab.Navigator  screenOptions={{headerShown:false,tabBarStyle:{height:height*0.08,elevation:3},headerTitleStyle:{margin:30} }}>
         
         <Tab.Screen name="WidgetList" component={WidgetList} options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Widgets</Text>
            ),
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white'}}>
                <Material name='widgets'style={{margin:1}} size={25} color={focused?'#5f5aad':'gray'} />
                </View>
              );
            },
          }} />

        <Tab.Screen name="ChatList" component={ChatList} options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Chats</Text>
            ),
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white'}}>
                <Ionicon name='md-chatbubble-ellipses'style={{margin:1}} size={25} color={focused?'#5f5aad':'gray'} />
                </View>
              );
            },
          }} />

        <Tab.Screen name="ChannelList" component={ChannelList} options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Channels</Text>
            ),
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white'}}>
                <Material name='stack-exchange'style={{margin:1}} size={25} color={focused?'#5f5aad':'gray'} />
                </View>
              );
            },
          }} />

       


    </Tab.Navigator>
  )
}