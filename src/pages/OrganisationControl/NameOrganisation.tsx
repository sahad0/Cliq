import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import CreateOrgHeader from '../../components/CreateOrganization/CreateOrgHeader'
import NameOrgBody from '../../components/NameOrganization/NameOrgBody';

export default function NameOrganisation():JSX.Element {

    const{height,width} = Dimensions.get('screen');

  return (
    <View>
        <CreateOrgHeader height={height} width={width} />
        <NameOrgBody height={height} width={width} />
    </View>
  )
}