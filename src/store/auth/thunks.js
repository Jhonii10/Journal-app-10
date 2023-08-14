/* eslint-disable no-unused-vars */
import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email,password) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

    }
}


export const startGoogleSignIn = ()=>{
    return async (dispatch)=>{
        dispatch(checkingAuthentication())
        const results = await singInWithGoogle()
        
        if (!results.ok) {
            dispatch(logout(results.errorMessage))
        }else{
            dispatch(login(results))
        }
    }
}