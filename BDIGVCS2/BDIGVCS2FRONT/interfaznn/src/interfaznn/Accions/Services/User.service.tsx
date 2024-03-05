import axios from "axios";
import { IUser } from "../Models/User.model";

const urlbase="http://127.0.0.1:8000/api/"
const endpoint = "iniciar_secion/"

const Entrar = async (box:IUser)=>{
    return await axios.post(urlbase+endpoint,box)
}

export const UserServicio={
    Entrar
}