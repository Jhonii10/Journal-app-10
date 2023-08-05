import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import {Link as routerLink} from 'react-router-dom'
import Authlayout from "../layout/Authlayout";


export const LoginPages = () => {
    return (
        
            <Authlayout title="Login">
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
                        label='correo'
                        type="email"
                        placeholder="correo@gmail.com "
                        fullWidth
                        autoComplete="off"
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
                    spacing={2}
                    sx={{mt:2, mb:1}}
                >
                <Grid 
                    item
                    xs={12}
                    sm={6}
                >
                <Button variant="contained" fullWidth>
                    Login
                </Button>

                </Grid>

                <Grid 
                    item
                    xs={12}
                    sm={6}
                >
                <Button variant="contained" fullWidth>
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


