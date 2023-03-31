import { useState, useEffect, createContext, ReactNode } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';



export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { 'mundoweb-auth-token': authToken } = parseCookies();

        if (!authToken) {
            setUser(null);
            navigate('/login', { replace: true });
        } else{
            console.log('tem no localStorage')
            setUser(authToken)
            api.defaults.headers.Authorization = `Bearer ${authToken}`;
        }
    }, []);


    async function signIn(responseToken) {
            const { token, id } = responseToken;

            setCookie(undefined, 'mundoweb-auth-token', token, {
                maxAge: 60 * 60 * 2, // 2 hour
            });

            setUser(responseToken);
            navigate('/')

            api.defaults.headers.Authorization = `Bearer ${token}`;

    };

    async function logout() {
        destroyCookie(undefined, 'mundoweb-auth-token');
        setUser(null);
        navigate('/login', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ signIn, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

