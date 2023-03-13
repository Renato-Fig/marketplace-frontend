import { useState, useEffect, createContext, ReactNode } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface SignInProps {
    email: string;
    senha: string;
}

interface AuthContextData {
    user: string | null;
    signIn: ({ email, senha }: SignInProps) => Promise<any>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { 'mundoweb-auth-token': authToken } = parseCookies();

        if (!authToken) {
            setUser(null);
            navigate('/login', { replace: true });
        }
    }, []);

    async function signIn({ email, senha }: SignInProps) {
        try {
            const response = await api.post('administrador/usuario-auth/login', {
                email,
                senha,
            });

            const { token, id } = response.data;

            setCookie(undefined, 'mundoweb-auth-token', token, {
                maxAge: 60 * 60 * 2, // 2 hour
            });

            setUser(response.data);

            api.defaults.headers.Authorization = `Bearer ${token}`;

            return response;
        } catch (err) {
            console.log(err);
        }

        return false;
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

