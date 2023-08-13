/* eslint-disable no-unused-vars */
import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email,password) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

    }
}


export const startGoogleSignIn = ()=>{
    return async (dispatch)=>{
        dispatch(checkingAuthentication())
    }
}