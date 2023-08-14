import {GoogleAuthProvider,  signInWithPopup} from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider =new GoogleAuthProvider();

export const singInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        //const credencial = GoogleAuthProvider.credentialFromResult(result)
        const {displayName, email, photoURL,uid} = result.user;

        return{
            ok: true,
            // info de user 
            displayName,email,photoURL,uid
        }
        
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
    

        return {
            ok:false,
            errorCode,
            errorMessage,
            email,

        }
    }
}