import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { FC, useEffect } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Selected } from '../../../pages/CreateChannelStack/AddParticipants'
import { useAppDispatch } from '../../../Hooks/hooks'
import { participantsListController } from '../../../store/participantsStore'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav'

type AppProps = {

    height: number,
    width: number,
    selected:Selected[],
    removeId:(id:string)=>void,

}

export type ParticipantsListType = {
    id:string,
    name:string,
}

const AddParticipantsExt:FC<AppProps> = ({height,width,selected,removeId}):JSX.Element => {

    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'AddParticipants'>>();



    const removeKey = ()=>{
        dispatch(participantsListController({participants_list:selected}));
        navigation.navigate('CreateChannelForm');
    }


  return (

    <View style={{height:height*0.12,backgroundColor:'white',justifyContent:'center',flexDirection:'row',borderTopRightRadius:height*0.01,borderTopLeftRadius:height*0.01,elevation:5,borderColor:'gray'}}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{backgroundColor:'white',width:width*0.8}}>
        
       {
        selected && selected.map((k:Selected,i:number)=>{
            
            return(
            
            <Pressable onPress={()=>removeId(k.id)} key={i} style={{alignSelf:'center',margin:width*0.01,marginLeft:width*0.04,marginRight:0,alignItems:'center',justifyContent:'center'}}>
                <View >
                    <Image source={require('../../../assets/images/profile.png')} style={{height:height*0.055,width:height*0.055,}} />
                    <View style={{top:height*0.035,borderColor:'white',borderWidth:1.5,height:height*0.018,width:height*0.018,borderRadius:height,backgroundColor:'lightgray',position:'absolute'}} >
                        <Text style={{fontSize:height*0.009,color:'white',alignSelf:'center'}}>x</Text>
                    </View>
                </View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'black'}}>{k.name}</Text>
            </Pressable>
        )})
       }
        
    </ScrollView>
    <View>
        <TouchableOpacity onPress={removeKey} style={{alignSelf:'center',height:height*0.2,width:width*0.2,marginTop:height*0.02}}>
            <IonIcons name='checkmark-circle-sharp' color={'#5f5aad'} size={height*0.045} style={{alignSelf:'center'}} />
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default AddParticipantsExt;