import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuthContext() {
  const context = useContext(AuthContext);

  const {
    user,
    signIn,
    logout,
  } = context;

  return {
    user,
    signIn,
    logout,
  };
};