import { BrowserRouter, Router } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthProvider'; 
import AppRoutes from './App.Routes';
import AuthRoutes from './Auth.Routes';
export function Routes(){

  return( 
    <AuthRoutes/> 
    
  )

}