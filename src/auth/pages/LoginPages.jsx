import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import {Link as routerLink} from 'react-router-dom'
import Authlayout from "../layout/Authlayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";


export const LoginPages = () => {

    const {status,errorMessage} = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const {email,password,onInputChange} = useForm({
        email:'',
        password:'',
    })

    const isAuthenticating = useMemo(()=>status === 'checking',[status])

    const onSubmit = (event)=>{
        event.preventDefault()
        dispatch(startLoginWithEmailPassword({email,password}))
    }

    const onGoogleSignIn = ()=>{
        dispatch(startGoogleSignIn())
    }

   


    return (
        
            <Authlayout title="Login">
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
                        label='correo'
                        type="email"
                        placeholder="correo@gmail.com "
                        fullWidth
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={onInputChange}
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
                        
                    />
                    
                </Grid>

                <Grid
                    container
                    spacing={2}
                    sx={{mt:2, mb:1}}
                >

                <Grid 
                  item 
                  xs={12}
                  display={errorMessage ? '':'none'}
                >
                <Alert severity="error">{errorMessage}</Alert>
                </Grid>
                <Grid 
                    item
                    xs={12}
                    sm={6}
                >
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isAuthenticating}
                   
                >
                    Login
                </Button>

                </Grid>

                <Grid 
                    item
                    xs={12}
                    sm={6}
                >
                <Button 
                    variant="contained" 
                    fullWidth
                    onClick={onGoogleSignIn}
                    disabled={isAuthenticating}
                    >
                    <Google/>
                     <Typography sx={{marginLeft:1}}>Google</Typography>
                </Button>

                </Grid>



                </Grid>

                <Grid 
                    container
                    direction='row'
                    justifyContent='end'
                >

                <Link 
                    color={'inherit'} 
                    component={routerLink} 
                    to={'/auth/register'}
                >
                    Crear cuenta
                </Link>


                </Grid>

                </Grid>
            </form>
            </Authlayout>
    );
}


