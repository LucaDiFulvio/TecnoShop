"use client"
import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import Cookies from "js-cookie";

interface IAuthContext{
    token : string | null,
    login: (token: string, user: string) => void
    user: string | null
    logOut: () => void
}

const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({children}: {children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null)
    const [ userdata, setUserData]= useState<string | null>(null)
    

    useEffect(() => {

        const isToken = Cookies.get("token")
        const isUser = localStorage.getItem("user")
        if (isToken) {setToken(isToken)}
        if (isUser) {setUserData(JSON.parse(isUser))}
    },[])
    const login = (token: string, user: string) => {
        Cookies.set("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setToken(token);
        setUserData(user);
    }

    const logOut=()=>{
        Cookies.remove("token");
        localStorage.removeItem("user");
        setToken(null);
        setUserData(null);
    }

    return <AuthContext.Provider value={{token, login, user: userdata, logOut}}>{children}</AuthContext.Provider>;
}

export function useAuth(): IAuthContext |null {
    return useContext(AuthContext);
    
}

export default useAuth