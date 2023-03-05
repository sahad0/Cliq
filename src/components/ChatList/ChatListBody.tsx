import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import QuickChatIcon from './QuickChatIcon'
import FlatChat from './FlatChat'

type AppProps = {
    height: number,
    width: number,
    
}
export type ChatProfileType={
  
    id:string,
    imgUrl : ImageSourcePropType,
    name:string,
    recentMsg:string,
    timestamp : string
}


const data = [
  {
    id:'1',
    imgUrl : require('../../assets/images/player/p1.png'),
    name:'Liya',
    recentMsg:'How are you doin?',
    timestamp : 'Feb 08'
  },
  {
    id:'2',
    imgUrl : require('../../assets/images/player/p2.png'),
    name:'Laura',
    recentMsg:'What\'s the progress',
    timestamp : 'Feb 09'
  },
  {
    id:'3',
    imgUrl : require('../../assets/images/player/p3.png'),
    name:'Meg',
    recentMsg:'Did you reach the required centre',
    timestamp : 'Feb 10'
  },
  {
    id:'4',
    imgUrl : require('../../assets/images/player/p4.png'),
    name:'Jamie',
    recentMsg:'I am out!',
    timestamp : 'Feb 11'
  },
  {
    id:'5',
    imgUrl : require('../../assets/images/player/p1.png'),
    name:'Liya',
    recentMsg:'How are you doin?',
    timestamp : 'Feb 08'
  },
  {
    id:'6',
    imgUrl : require('../../assets/images/player/p2.png'),
    name:'Laura',
    recentMsg:'What\'s the progress',
    timestamp : 'Feb 09'
  },
  {
    id:'7',
    imgUrl : require('../../assets/images/player/p3.png'),
    name:'Meg',
    recentMsg:'Did you reach the required centre',
    timestamp : 'Feb 10'
  },
  {
    id:'8',
    imgUrl : require('../../assets/images/player/p4.png'),
    name:'Jamie',
    recentMsg:'I am out!',
    timestamp : 'Feb 11'
  },
  {
    id:'9',
    imgUrl : require('../../assets/images/player/p1.png'),
    name:'Liya',
    recentMsg:'How are you doin?',
    timestamp : 'Feb 08'
  },
  {
    id:'10',
    imgUrl : require('../../assets/images/player/p2.png'),
    name:'Laura',
    recentMsg:'What\'s the progress',
    timestamp : 'Feb 09'
  },
  {
    id:'11',
    imgUrl : require('../../assets/images/player/p3.png'),
    name:'Meg',
    recentMsg:'Did you reach the required centre',
    timestamp : 'Feb 10'
  },
  {
    id:'12',
    imgUrl : require('../../assets/images/player/p4.png'),
    name:'Jamie',
    recentMsg:'I am out!',
    timestamp : 'Feb 11'
  },
]



const ChatListBody:FC<AppProps> = ({height,width}):JSX.Element => {
  return (
    <View style={{flex:1,}}>

     <FlatChat height={height} width={width} data={data} />


      <QuickChatIcon height={height} width={width} />
    </View>
  )
}

export default ChatListBody