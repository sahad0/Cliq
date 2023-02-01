import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/auth/Signup';
import  {Login}  from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import OtpVerifySignUp from '../pages/auth/OtpVerifySignUp';
import CreateOrganization from '../pages/OrganisationControl/CreateOrganization';
import { useAppSelector } from '../Hooks/hooks';
import OtpVerifyForgotPass from '../pages/auth/OtpVerifyForgotPass';
import ResetPassword from '../pages/auth/ResetPassword';


type userAuth = {
  token : object,
}


const Stack = createNativeStackNavigator(); 

export default function Router():JSX.Element {

  const {token} = useAppSelector((state)=>state.cart.value);

  const auth = token;



  return (
    
    <NavigationContainer >
         <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'Login'} >
          {
            auth==='' && (
              <>
                <Stack.Screen  options={{animation:'fade_from_bottom'}} name='Login' component={Login} />

                <Stack.Screen  options={{animation:'fade_from_bottom'}} name='SignUp' component={Signup} />
    
                <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifySignUp' component={OtpVerifySignUp} />
    
                <Stack.Screen  options={{animation:'slide_from_right'}} name='ForgotPassword' component={ForgotPassword} />
                
                <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifyForgotPass' component={OtpVerifyForgotPass} />

                <Stack.Screen  options={{animation:'slide_from_right'}} name='ResetPassword' component={ResetPassword} />

                
              </>
            )
          }
          {
            auth!==''&& (
              <>
                 <Stack.Screen  options={{animation:'slide_from_right'}} name='createOrg' component={CreateOrganization} />
              </>
            )
          }
            

           

        </Stack.Navigator>
       
    </NavigationContainer>
  );
}