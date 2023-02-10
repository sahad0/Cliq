import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../Hooks/hooks';
import axios from 'axios';
import AuthNav from './navigators/AuthNav';
import NewUserStackNav from './navigators/NewUserStackNav';
import ExistingUserNav from './navigators/ExistingUserNav';



export default function Router():JSX.Element {



  const storeValue = useAppSelector((state)=>state.cart.value);
  const auth = storeValue.token;
  const newUser = storeValue.orgNewUser;
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
