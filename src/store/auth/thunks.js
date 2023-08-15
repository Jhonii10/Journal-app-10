/* eslint-disable no-unused-vars */
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
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


export const startcreateUserWithEmailAndPassword = ({email,password,displayName})=>{

    return async(dispatch)=>{
        dispatch(checkingCredentials())
        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({displayName,email,password})
        if ( !ok ) return dispatch( logout( {errorMessage} ) );

        dispatch( login( {uid,photoURL,email,displayName} ))
    }
}