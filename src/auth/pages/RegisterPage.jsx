import {  Alert, Button, Grid, Link, TextField } from "@mui/material";
import {Link as routerLink} from 'react-router-dom'
import Authlayout from "../layout/Authlayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { startcreateUserWithEmailAndPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
    email: '',
    password:'',
    displayName:''
}

const formValidations = {
     email:[(value)=> value.includes('@'), 'El correo debe incluir una @'],
     password:[(value)=> value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
     displayName:[(value)=> value.length >= 2, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmit, setFormSubmit] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status == 'checking', [status]);
    console.log(isCheckingAuthentication);
       

    const {
        formState,displayName, email, password, onInputChange,
          isFormValid,displayNameValid,emailValid,passwordValid
        } = useForm(formData,formValidations)

    const onSubmit = (event)=>{
        event.preventDefault()
        setFormSubmit(true)
        if(!isFormValid) return;

        dispatch(startcreateUserWithEmailAndPassword(formState))
        
        
    }


    return (
        
            <Authlayout title="Crear Cuenta">
            <form onSubmit={onSubmit}>
                <Grid
                    container

                >
                <Grid
                    
                    item
                    xs={12}
                    sx={{marginTop:2}}
                >
                    <TextField
                        label='Nombre'
                        type="text"
                        placeholder="username"
                        fullWidth
                        name="displayName"
                        value={displayName}
                        onChange={onInputChange}
                        error={!!displayNameValid && formSubmit}
                        helperText={displayNameValid}
                    />
                    
                </Grid>

                <Grid
                    
                    item
                    xs={12}
                    sx={{marginTop:2}}
                >
                    <TextField
                        label='correo'
                        type="email"
                        placeholder="correo@gmail.com "
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        error={!!emailValid && formSubmit}
                        helperText={emailValid}
                    />
                    
                </Grid>

                <Grid
                    item
                    xs={12}
                    sx={{marginTop:2}}
                >
                    <TextField
                        label='contraseña'
                        type="password"
                        placeholder="contraseña"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        error={!!passwordValid && formSubmit}
                        helperText={passwordValid }
                    />
                    
                </Grid>

               

                <Grid 
                    container
                    direction='row'
                    justifyContent='end'
                    spacing={2}
                    sx={{mb:1,mt:1}}
                >

                <Grid 
                  item 
                  xs={12}
                  display={errorMessage ? '':'none'}
                >
                <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={12}>
               <Button
                    disabled={isCheckingAuthentication}
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{mt:2}}
                    
          
                >
                    Crear Cuenta
                </Button>
                </Grid>

                <Link 
                    color={'inherit'} 
                    component={routerLink} 
                    sx={{mt:2 , mb:1}}
                    to={'/auth/login'}
                    
                >
                    Ya tengo cuenta
                </Link>


                </Grid>

                </Grid>
            </form>
            </Authlayout>
    );
}
