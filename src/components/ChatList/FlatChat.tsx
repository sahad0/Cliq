import {  FlatList, Image, ListRenderItem, Pressable, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { FC, PureComponent, memo } from 'react'
import { ChatProfileType } from './ChatListBody';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav';




type AppProps   = {
    height: number,
    width: number,
    data :any,
}
type RenderType = {
    height:number,
    width:number,
    item:ChatProfileType
}

const RenderItem:FC<RenderType> = memo(({item,height,width,}):JSX.Element=>{

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'ChatList'>>();
    

    return(
    <>
        <Pressable onPress={()=>navigation.navigate('Chat',{name:item.name,id:item.id})} android_ripple={{color:'#EBCF0',borderless:false,radius:height,foreground:true}} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:width,alignSelf:'center',height:height*0.084}}>
           <View>
              <Image source={item.imgUrl} style={{height:height*0.062,width:height*0.062}} resizeMode='contain' />
            </View>

            <View style={{width:width*0.78,marginLeft:width*0.02}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:height*0.017,color:'black',fontWeight:'400'}}>{item.name}</Text>
              <Text style={{fontSize:height*0.015,color:'gray'}}>{item.timestamp}</Text>

              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text numberOfLines={1} ellipsizeMode='tail'  style={{width:width*0.6,fontSize:height*0.016,color:'gray',marginTop:height*0.002}}>{item.recentMsg}</Text>
                {/* <View style={{marginRight:height*0.01,backgroundColor:'#5f5aad',borderRadius:height,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white',marginLeft:height*0.008,marginRight:height*0.008,fontSize:height*0.01,alignSelf:'center',maxWidth:width*0.04}} ellipsizeMode='tail' numberOfLines={1}>1</Text>
                </View> */}
              </View>
            </View>

      </Pressable>
    </>
)})





export default class FlatChat extends PureComponent<AppProps> {


    keyExtractor = (item:ChatProfileType):string => item.id;

    renderItem:ListRenderItem<ChatProfileType> = ({item})=> <RenderItem  height={this.props.height} width={this.props.width}  item={item}/>

   
    Layout = (data:ChatProfileType[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: this.props.height*0.09, offset: (this.props.height*0.09 * index), index}
      )





  render() {
    return (
      <FlatList showsVerticalScrollIndicator={false} data={this.props.data} getItemLayout={this.Layout} initialNumToRender={10} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
    )
  }
}