import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useState } from 'react';
import { Alert } from 'react-native';

interface AuthContextData {
    isAuthenticated: boolean | null;
    dologin: (email: string, password: string) => void;
    dologout: () => void;
}

// Criação do contexto
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Provedor do contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);   
    const router = useRouter();

    const dologin = (email: string, password: string) => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (email === "arthur@email.com") {
            if (password === "senha") {
                setIsAuthenticated(true);
                router.navigate({pathname: "/home"});
                return;
            }
        }
        Alert.alert('Erro', 'Confira os dados informados.');
    };

    const dologout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, dologin, dologout }}>
            {children}
        </AuthContext.Provider>
    );
};