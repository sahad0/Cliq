import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddParticipantsHeader from '../../components/CreateChannelStack/AddParticiapants/AddParticipantsHeader'
import AddParticipantsBody from '../../components/CreateChannelStack/AddParticiapants/AddParticiapantsBody';
import { clockRunning } from 'react-native-reanimated';

export type Selected = {
  id: string,
  name: string,
}


export type SelectedState = Selected[]|[]; 

export default function AddParticipants():JSX.Element {

const {height,width} = Dimensions.get('screen');
const [selected,setSelected] = useState<SelectedState>([]);

let data = [
    {
        id:"1",
        name:'Ganesh',
        email:'safe@gmail.com',
    },
    {
        id:"2",
        name:'P2V',
        email:'ndjksnn@gmail.com',
    },
    {
      id:"3",
      name:'Ganesh',
      email:'safe@gmail.com',
  },
  {
      id:"4",
      name:'P2V',
      email:'ndjksnn@gmail.com',
  },
  {
    id:"5",
    name:'Ganesh',
    email:'safe@gmail.com',
},
{
    id:"6",
    name:'P2V',
    email:'ndjksnn@gmail.com',
},
{
  id:"7",
  name:'Ganesh',
  email:'safe@gmail.com',
},
{
  id:"8",
  name:'P2V',
  email:'ndjksnn@gmail.com',
},
{
  id:"8588",
  name:'Ganesh',
  email:'safe@gmail.com',
},
{
  id:"9",
  name:'P2V',
  email:'ndjksnn@gmail.com',
},
{
  id:"10",
  name:'Ganesh',
  email:'safe@gmail.com',
},
{
  id:"211",
  name:'P2V',
  email:'ndjksnn@gmail.com',
},
{
  id:"156556",
  name:'Ganesh',
  email:'safe@gmail.com',
},
{
  id:"255",
  name:'P2V',
  email:'ndjksnn@gmail.com',
},
{
  id:"1sdsd",
  name:'Ganesh',
  email:'safe@gmail.com',
},

]

// useEffect(()=>{
//   console.log(selected);
// },[selected]);



return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <AddParticipantsHeader height={height} width={width} />
      <AddParticipantsBody height={height} width={width} data={data} selected={selected} setSelected={setSelected}  />
    </SafeAreaView>
  )
}