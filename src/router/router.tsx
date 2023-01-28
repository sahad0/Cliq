import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/Signup';


const Stack = createNativeStackNavigator(); 

export default function Router():JSX.Element {

   


  return (
    
    <NavigationContainer >
         <Stack.Navigator  screenOptions={{headerShown:false,animation:'slide_from_right',}}  initialRouteName={'LandingPage'} >
             <Stack.Screen   name='SignUp' component={Signup} />
        </Stack.Navigator>
       
    </NavigationContainer>
  );
}