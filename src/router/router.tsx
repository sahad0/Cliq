import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/auth/Signup';
import  {Login}  from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import OtpVerifySignUp from '../pages/auth/OtpVerifySignUp';
import OtpVerifyLogin from '../pages/auth/OtpVerifyLogin';


const Stack = createNativeStackNavigator(); 

export default function Router():JSX.Element {

   


  return (
    
    <NavigationContainer >
         <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'Login'} >
            <Stack.Screen  options={{animation:'fade_from_bottom'}} name='Login' component={Login} />

            <Stack.Screen  options={{animation:'fade_from_bottom'}} name='SignUp' component={Signup} />

            <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifySignUp' component={OtpVerifySignUp} />

            <Stack.Screen  options={{animation:'slide_from_right'}} name='ForgotPassword' component={ForgotPassword} />
            
            <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifyLogin' component={OtpVerifyLogin} />

        </Stack.Navigator>
       
    </NavigationContainer>
  );
}