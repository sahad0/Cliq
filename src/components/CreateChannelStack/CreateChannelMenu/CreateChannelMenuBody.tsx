import { View, Text, StatusBar } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav'

type AppProps = {
    height: number,
    width: number,
}


const CreateChannelMenuBody:FC<AppProps> = ({height,width}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams>>();

    return(
        <View style={{backgroundColor:'white',margin:height*0.01,height:height*0.25,borderRadius:height*0.01}}>
            <View style={{margin:height*0.03}}>
                <Text style={{color:'black',fontSize:height*0.02}}>Create a Channel</Text>
                <Text style={{color:'gray',fontSize:height*0.016,marginTop:height*0.02}}>
                    Designed for enhanced collaboration, channels are meant to improve workplace communication at your organization.
                </Text>

                <View style={{height:0.5,backgroundColor:'lightgray',marginTop:height*0.03}} />
                <TouchableOpacity onPress={()=>navigation.navigate('CreateChannelForm')}>
                    <Text style={{color:'#5f5aad',fontSize:height*0.022,marginTop:height*0.02,alignSelf:'center'}}>Create Channel</Text>
                </TouchableOpacity>

            </View>

        </View>
    );

}


export default CreateChannelMenuBody;