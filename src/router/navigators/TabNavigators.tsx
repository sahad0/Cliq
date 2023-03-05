import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import ChannelDetails from '../../pages/CreateChannelStack/ChannelDetails'
import WidgetList from '../../pages/chat/WidgetList'
import ChatList from '../../pages/ChatListStack/ChatList'
import { Pressable } from 'react-native'

export type TabStackParams ={
  ChatList:undefined,
  ChannelDetails:undefined,
  WidgetList:undefined,
}


const Tab = createBottomTabNavigator<TabStackParams>();

export default function TabNavigators():JSX.Element {

  const {height,width} = Dimensions.get('screen');
    
  return (
    <Tab.Navigator  initialRouteName='ChatList' screenOptions={{headerShown:false,tabBarStyle:{height:height*0.08,elevation:3},headerTitleStyle:{margin:30} }}>
         
         <Tab.Screen name="WidgetList" component={WidgetList} options={{
            tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Ionicon name={focused?'call':'call-outline'} color={focused?'#5f5aad':'gray'} size={height*0.03} />
                  {/* {
                    focused ?
                     <>
                      <Image source={require('../../assets/images/TabIcon/Widget.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />
                     </>
                      : 
                     <>
                      <Image source={require('../../assets/images/TabIcon/Widget1.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />
                     
                     </>
                     
                  } */}
                <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Calls</Text>

                </View>
              );
            },
          }} />

        <Tab.Screen name="ChatList" component={ChatList} options={{
           tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Ionicon name={focused?'ios-chatbubbles-sharp':'ios-chatbubbles-outline'} color={focused?'#5f5aad':'gray'} size={height*0.03} />
                 
                  {/* {
                    focused?
                     <>
                     <Image source={require('../../assets/images/TabIcon/Chat.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />
                      
                     </>
                      : 
                    <>
                    <Image source={require('../../assets/images/TabIcon/Chat1.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />
                    </>
                  } */}
                
                <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Chats</Text>

                </View>
              );
            },
          }} />

        <Tab.Screen name="ChannelDetails" component={ChannelDetails} options={{
            tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Material name={focused?'account-group':'account-group-outline'} color={focused?'#5f5aad':'gray'} size={height*0.03} />
                  {/* {
                    focused ? 
                    <>
                     <Image source={require('../../assets/images/TabIcon/Channel.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />

                    </>
                     :
                    <>
                   <Image source={require('../../assets/images/TabIcon/Channel1.png')} style={{height:height*0.028,width:height*0.028}} resizeMode='contain' />
                    
                    </>
                  } */}
                <Text style={{color: focused ? '#5f5aad' : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Channels</Text>
                
                </View>

              );
            },
          }} />

       


    </Tab.Navigator>
  )
}