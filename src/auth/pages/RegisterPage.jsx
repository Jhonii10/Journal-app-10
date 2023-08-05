import {  Grid, Link, TextField } from "@mui/material";
import {Link as routerLink} from 'react-router-dom'
import Authlayout from "../layout/Authlayout";


export const RegisterPage = () => {
    return (
        
            <Authlayout title="Crear Cuenta">
            <form>
                <Grid
                    container

                >
                <Grid
                    
                    item
                    xs={12}
                    sx={{marginTop:2}}
                >
                    <TextField
                        label='name'
                        type="name"
                        placeholder="username "
                        fullWidth
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
                    />
                    
                </Grid>

               

                <Grid 
                    container
                    direction='row'
                    justifyContent='end'
                >

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
