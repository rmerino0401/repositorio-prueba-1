import {useState, useEffect, createContext} from 'react';
import { fire, auth, firebase } from '../config/firebase';
import Loading from "../components/Loading";
const proveedorGoogle = new firebase.auth.GoogleAuthProvider()

export const AuthContext = CreateContext()

export const AuthContextProvider = (props) => {
    const [userState, SetUserState] = useState(null)
    const [authPending, setAuthPending] = useState(true)

    const signIn ) async () => {
        const rpta = await          
    }
    return (
        <div>
            
        </div>
    )
}
