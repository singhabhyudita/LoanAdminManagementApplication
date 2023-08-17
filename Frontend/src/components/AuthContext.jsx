import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("username");;
        if (isAuthenticated) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [])
    return (
        <AuthContext Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}