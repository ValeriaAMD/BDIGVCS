import React, { useState } from "react";
import { AuthContext } from "./User.contexto";

interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};
