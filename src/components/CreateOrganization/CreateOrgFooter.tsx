import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer } from 'react'
import requestStatus, { initial_state } from '../../utils/LoaderHandling';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../router/router';

type AppProps = {
    height: number,
    width:number,
}


const CreateOrgFooter:FC<AppProps> = ({height,width}):JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams,'CreateOrganization'>>();


  return (
    <View style={{height:height*0.5,backgroundColor:'rgba(255,255,255,0.5)'}}>
      
        <TouchableOpacity onPress={()=>navigation.navigate('NameOrganisation')}  style={{borderColor:'black',elevation:0.5,borderRadius:5,paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
            <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular',}}>{"Create your own company!"}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CreateOrgFooter;