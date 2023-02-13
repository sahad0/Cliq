import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../Hooks/hooks';
import axios from 'axios';
import AuthNav from './navigators/AuthNav';
import NewUserStackNav from './navigators/NewUserStackNav';
import ExistingUserNav from './navigators/ExistingUserNav';



export default function Router():JSX.Element {



  const {token,orgNewUser} = useAppSelector((state)=>state.cart.auth.value);
  const auth = token;
  const newUser = orgNewUser;
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth}`;




  

  return (
    
    <NavigationContainer >
      {
        !auth && (
          <AuthNav />
         )
      }
      {
        auth && newUser && (
          <NewUserStackNav />
        )
      }
      {
        auth && !newUser &&(
          <ExistingUserNav />
        )
      }  
      

         
       
    </NavigationContainer>
  );
}
