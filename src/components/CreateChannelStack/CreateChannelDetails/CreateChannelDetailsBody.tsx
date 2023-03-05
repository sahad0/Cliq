import { View, Text, Pressable, ImageSourcePropType, ListRenderItem, FlatList } from 'react-native'
import React, { FC, memo } from 'react'
import { Image } from 'react-native'
import RenderItems1 from './RenderItems1'
import RenderItems from './RenderItems'

type AppProps = {
    height: number,
    width: number,
    data :RenderItem[],
}

type RenderItem = {
    id:string,
    imgUrl :ImageSourcePropType,
    name:string,
    memberCount:number,
}

export type RenderType = {
    item : RenderItem,
    height: number,
    width: number,
}

const HeaderComp:FC<AppProps> = ({height,width,data})=>{
    const  keyExtractor = (item:RenderItem):string => item.id;

    const  renderItem: ListRenderItem<RenderItem> = ({item})=> <RenderItems  height={height} width={width}  item={item}/>

   
    const Layout = (data:RenderItem[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: height*0.09, offset: (height*0.09 * index), index}
    )
return(
    <>
    <Text style={{color:'#5f5aad',marginLeft:height*0.02,fontSize:height*0.02,margin:height*0.015}}>New Channel</Text>

    <FlatList showsHorizontalScrollIndicator={false}  keyExtractor={keyExtractor} data={data} renderItem={renderItem}  horizontal/>
    <Text style={{color:'#5f5aad',marginLeft:height*0.02,fontSize:height*0.02,margin:height*0.015}}>Organization</Text>
    </>
)
}







const CreateChannelDetailsBody:FC<AppProps> = ({height,width,data}):JSX.Element => {

    const  keyExtractor = (item:RenderItem):string => item.id;

    const  renderItem: ListRenderItem<RenderItem> = ({item})=> <RenderItems1  height={height} width={width}  item={item}/>
   
    const Layout = (data:RenderItem[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: height*0.09, offset: (height*0.09 * index), index}
    )


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
            <FlatList  showsVerticalScrollIndicator={true} ListHeaderComponent={(<HeaderComp data={data} height={height} width={width} />)} getItemLayout={Layout} keyExtractor={keyExtractor} data={data} renderItem={renderItem} />

    </View>
  )
}

export default CreateChannelDetailsBody;