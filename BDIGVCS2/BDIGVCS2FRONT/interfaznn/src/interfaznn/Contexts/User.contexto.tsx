import { createContext } from "react";

interface IAuthContext {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext({} as IAuthContext);
