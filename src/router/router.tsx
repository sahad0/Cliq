import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/auth/Signup';
import  Login  from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import OtpVerifySignUp from '../pages/auth/OtpVerifySignUp';
import CreateOrganization from '../pages/OrganisationControl/CreateOrganization';
import { useAppSelector } from '../Hooks/hooks';
import OtpVerifyForgotPass from '../pages/auth/OtpVerifyForgotPass';
import ResetPassword from '../pages/auth/ResetPassword';
import NameOrganisation from '../pages/OrganisationControl/NameOrganisation';
import axios from 'axios';
import Organization from '../pages/OrganisationControl/Organization';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigators from './navigators/DrawerNavigators';



export type RootStackParams = {
  Login:undefined,
  SignUp:undefined,
  OtpVerifySignUp:{
    user:{
      email:string,
      password:string,
      phone:string,
    }
  },
  ForgotPassword:undefined,
  OtpVerifyForgotPass:{
    email:string
  },
  ResetPassword:{
    user:{
      email:string,
      otp:string,
    }
  },
  CreateOrganization:undefined,
  NameOrganisation:undefined,
  Organization:undefined,

  

}


export type DrawerStackParams ={
  ChatList:undefined;
}
const Stack = createNativeStackNavigator<RootStackParams>(); 
const Drawer = createDrawerNavigator<DrawerStackParams>();

export default function Router():JSX.Element {



  const storeValue = useAppSelector((state)=>state.cart.value);

  const auth = storeValue.token;
  const newUser = storeValue.orgNewUser;
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth}`;




  

  return (
    
    <NavigationContainer >
        <DrawerNavigators />

         {/* <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'Login'} >
          {
            auth===''&&(
              <>
                <Stack.Screen  options={{animation:'fade_from_bottom'}} name='Login' component={Login} />

                <Stack.Screen  options={{animation:'fade_from_bottom'}} name='SignUp' component={Signup} />
    
                <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifySignUp' component={OtpVerifySignUp} />
    
                <Stack.Screen  options={{animation:'slide_from_right'}} name='ForgotPassword' component={ForgotPassword} />
                
                <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifyForgotPass' component={OtpVerifyForgotPass}  />

                <Stack.Screen  options={{animation:'slide_from_right'}} name='ResetPassword' component={ResetPassword} />

                
              </>
            )
          }
           {
            auth!=='' && newUser===false && (
              <>
                 <Stack.Screen  options={{animation:'slide_from_right'}} name='Organization' component={Organization} />

              </>
            )
          }
          {
            auth!=='' && newUser===true && (
              <>
                 <Stack.Screen  options={{animation:'slide_from_right'}} name='CreateOrganization' component={CreateOrganization} />
                 <Stack.Screen  options={{animation:'slide_from_right'}} name='NameOrganisation' component={NameOrganisation} />

              </>
             )
          } 
         
            

           

        </Stack.Navigator> */}
       
    </NavigationContainer>
  );
}
