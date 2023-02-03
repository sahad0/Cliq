import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Image } from 'react-native'
import { useAppDispatch } from '../../Hooks/hooks'
import { logoutController } from '../../store/store'

type AppProps = {
    height:number,
    width:number,
}

const CreateOrgHeader:FC<AppProps> = ({height,width}):JSX.Element => {

  const dispatch = useAppDispatch();


  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'rgba(255,255,255,1)'}}>
        <View style={{flexDirection:'row',}}>
            <Image source={require('../../assets/images/cliq.png')} style={{height:height*0.12,width:width*0.12}} resizeMode={'contain'} />
            <Text style={{color:'black',fontFamily:'ZohoRegular',marginTop:height*0.042,fontSize:height*0.02}}>Cliq</Text>
        </View>
        <TouchableOpacity onPress={()=>
          {setTimeout(()=>{
            dispatch(logoutController())
          },100)}}>
          <Text style={{fontFamily:'ZohoRegular',margin:height*0.042,marginRight:height*0.01,fontSize:height*0.018,color:'gray'}}>SignOut</Text>
        </TouchableOpacity>
      </View>

      <View style={{height:0.2,backgroundColor:'lightgray',width:width,alignSelf:'center'}} />
    </View>
  )
}


export default CreateOrgHeader;