import { View, Text, Dimensions, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import CreateOrgHeader from '../../components/CreateOrganization/CreateOrgHeader'
import NameOrgBody from '../../components/NameOrganization/NameOrgBody';

export default function NameOrganisation():JSX.Element {

    const{height,width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity activeOpacity={1} onPress={() =>Keyboard.dismiss()} >
        <CreateOrgHeader height={height} width={width} />
        <NameOrgBody height={height} width={width} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}