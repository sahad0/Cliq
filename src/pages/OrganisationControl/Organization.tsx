import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CreateOrgHeader from '../../components/CreateOrganization/CreateOrgHeader'
import { Dimensions } from 'react-native'
import OrganisationBody from '../../components/Organizations/OrganisationBody';

export default function Organization():JSX.Element {

    const {height,width} = Dimensions.get('screen');


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <CreateOrgHeader height={height} width={width} />
        <OrganisationBody height={height} width={width} />
    </SafeAreaView>
  )
}