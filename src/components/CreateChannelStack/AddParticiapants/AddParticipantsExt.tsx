import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { FC } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Selected } from '../../../pages/CreateChannelStack/AddParticipants'

type AppProps = {

    height: number,
    width: number,
    selected:Selected[],
    removeId:(id:string)=>void,

}

const AddParticipantsExt:FC<AppProps> = ({height,width,selected,removeId}):JSX.Element => {

  return (

    <View style={{height:height*0.12,backgroundColor:'white',justifyContent:'center',flexDirection:'row'}}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{backgroundColor:'white',width:width*0.8}}>
        
       {
        selected && selected.map((k:Selected,i:number)=>{
            
            return(
            
            <Pressable onPress={()=>removeId(k.id)} key={i} style={{alignSelf:'center',margin:height*0.02,marginRight:0,width:width*0.15}}>
                <View>
                    <Image source={require('../../../assets/images/profile.png')} style={{height:height*0.055,width:height*0.055,}} />
                    <View style={{top:height*0.035,borderColor:'white',borderWidth:1.5,left:height*0.039,height:height*0.018,width:height*0.018,borderRadius:height,backgroundColor:'lightgray',position:'absolute'}} >
                        <Text style={{fontSize:height*0.009,color:'white',alignSelf:'center'}}>x</Text>
                    </View>
                </View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'black'}}>{k.name}</Text>
            </Pressable>
        )})
       }
        
    </ScrollView>
    <View>
        <TouchableOpacity style={{alignSelf:'center',height:height*0.2,width:width*0.2,marginTop:height*0.02}}>
            <IonIcons name='arrow-forward-circle' color={'#5f5aad'} size={50} style={{alignSelf:'center'}} />
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default AddParticipantsExt