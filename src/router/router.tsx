import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/Signup';
import { Login } from '../pages/Login';


const Stack = createNativeStackNavigator(); 

export default function Router():JSX.Element {

   


  return (
    
    <NavigationContainer >
         <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'Login'} >
            <Stack.Screen   name='Login' component={Login} />

            <Stack.Screen   name='SignUp' component={Signup} />
        </Stack.Navigator>
       
    </NavigationContainer>
  );
}