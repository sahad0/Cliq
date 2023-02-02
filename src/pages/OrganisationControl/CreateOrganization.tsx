import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import CreateOrgHeader from '../../components/CreateOrganization/CreateOrgHeader';
import CreateOrgBody from '../../components/CreateOrganization/CreateOrgBody';
import CreateOrgFooter from '../../components/CreateOrganization/CreateOrgFooter';

export default function CreateOrganization():JSX.Element {

    const {width, height} =Dimensions.get('screen');


  return (
    <View style={{flex:1,}}>
      <CreateOrgHeader height={height} width={width} />
      <CreateOrgBody height={height} width={width} />
      <CreateOrgFooter height={height} width={width} />

    </View>
  )


}