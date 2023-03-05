import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddParticipantsHeader from '../../components/CreateChannelStack/AddParticiapants/AddParticipantsHeader'
import AddParticipantsBody, { ItemProps } from '../../components/CreateChannelStack/AddParticiapants/AddParticiapantsBody';
import axios from 'axios';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav';
import { useAppSelector } from '../../Hooks/hooks';
import requestStatus, { initial_state } from '../../utils/LoaderHandling';

export type Selected = {
  id: string,
  name: string,
}





export type SelectedState = Selected[]|[]; 

export default function AddParticipants():JSX.Element {

const {height,width} = Dimensions.get('screen');
const [selected,setSelected] = useState<SelectedState>([]);
const [members,setMembers] = useState<ItemProps[]>([]);

const {params:{organization_id}} = useRoute<RouteProp<ChannelStackParams,'AddParticipants'>>();

const {profile} = useAppSelector((state)=>state.cart.auth.value);
const {participants_list} = useAppSelector((state)=>state.cart.channelParticipant.value);
const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);




console.log(participants_list)



useEffect(()=>{
  fetchMembers();
},[selected]);


const fetchMembers = async ():Promise<void> => {
  try{
    setEventReducer({type:'loading'});
    if(organization_id && profile!==null){
      const y = participants_list.map((k)=>k.id);
      const {members} = (await axios('/organization/members',{method:'POST',timeout:5000,data:{organization_id:organization_id,excludeMembers:[profile.user_id,...y]}})).data;
      setMembers(members);
      

    }
    setEventReducer({type:'success'});


   
  }catch(err:any){  
    setEventReducer({type:'error'});

  }
}



return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <AddParticipantsHeader height={height} width={width} />
      <AddParticipantsBody height={height} width={width} data={members} selected={selected} setSelected={setSelected}  eventReducer={eventReducer} />
    </SafeAreaView>
  )
}