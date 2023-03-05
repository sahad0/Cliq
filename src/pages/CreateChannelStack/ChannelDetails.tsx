import { View, Text, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import ChatListHeader from '../../components/ChatList/ChatListHeader';
import CreateChannelDetailIcon from '../../components/CreateChannelStack/CreateChannelDetails/CreateChannelDetailsIcon';
import CreateChannelDetailsBody from '../../components/CreateChannelStack/CreateChannelDetails/CreateChannelDetailsBody';

export default function ChannelDetails():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  const data = [
    {
      id:'1',
      imgUrl :require('../../assets/images/player/p5.png'),
      name:'#Astro_CLub',
      memberCount:20,
    },
    {
      id:'2',
      imgUrl :require('../../assets/images/player/p6.png'),
      name:'#Astro_CLub',
      memberCount:20,
    },
    {
      id:'3',
      imgUrl :require('../../assets/images/player/p7.png'),
      name:'#Astro_CLub',
      memberCount:20,
    },
    {
      id:'4',
      imgUrl :require('../../assets/images/player/p8.png'),
      name:'#Astro_CLub',
      memberCount:20,
    },
    {
      id:'5',
      imgUrl :require('../../assets/images/player/p9.png'),
      name:'#Astro_CLub',
      memberCount:20,
    }
  ]



  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <StatusBar  barStyle={'default'} backgroundColor={'#5f5aad'} />

          <ChatListHeader height={height} width={width} />
          <CreateChannelDetailsBody height={height} width={width} data={data} />

          <CreateChannelDetailIcon height={height} width={width}  />
    </SafeAreaView>
  )
}