"use client"

import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext({
    user: null ,
    login: (username: string, password: string) => Promise.resolve(false),
    logout: () => {},
  });
  

export const AuthProvider = ({ children }: { children: ReactNode | ReactNode[]}) => {
    const [user, setUser] = useState<null | string>(null);

    const login = async (username: string, password: string) => {
        if(username == "test" && password == "test"){
            setUser(username);
            return true;
        }

        return false
    }

    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);