import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerStackParams } from '../../router/navigators/DrawerNavigators'
// import { DrawerStackParams } from '../../router/router'

type AppProps = {
    height: number,
    width: number,
    
}


const  ChatListHeader:FC<AppProps> = ({height,width}):JSX.Element => {


    const navigation = useNavigation<DrawerNavigationProp<DrawerStackParams,'ChatList'>>();

  return (
    <View style={{height:height*0.1,}}>
    <Pressable style={{height:height*0.065,borderColor:'gray',backgroundColor:'white',margin:height*0.02,marginTop:height*0.01,borderRadius:height*0.009,elevation:3,alignItems:'center',flexDirection:'row'}}>
        <Pressable onPress={()=>navigation.toggleDrawer()} style={{marginLeft:width*0.03,}}>
            <Ionicons name='ios-reorder-three-outline' size={height*0.035} style={{margin:height*0.01}} color={'black'}/>
        </Pressable>
        <Text style={{fontFamily:'ZohoRegular',marginLeft:width*0.02,margin:height*0.01,fontSize:height*0.018}}>Search</Text>
    </Pressable>
    </View>
  )
}

export default  ChatListHeader;