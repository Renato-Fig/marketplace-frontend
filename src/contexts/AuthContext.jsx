import { useState, useEffect, createContext, ReactNode } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';



export const AuthContext = createContext({});

export function AuthProvider() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { 'mundoweb-auth-token': authToken } = parseCookies();

        if (!authToken) {
            setUser(null);
            navigate('/login', { replace: true });
        }
    }, []);


    async function signIn(responseToken) {
            const { token, id } = responseToken;
            console.log(responseToken)

            setCookie(undefined, 'mundoweb-auth-token', token, {
                maxAge: 60 * 60 * 2, // 2 hour
            });

            setUser(responseToken);

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

