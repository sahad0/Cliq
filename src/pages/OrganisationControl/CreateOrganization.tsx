import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useAppDispatch } from '../../Hooks/hooks'
import { logoutController } from '../../store/store';

export default function CreateOrganization() {

    const dispatch = useAppDispatch();

  return (
    <View>
      <Button title='logout' onPress={()=> dispatch(logoutController())} />
    </View>
  )
}