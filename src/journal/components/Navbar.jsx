/* eslint-disable react/prop-types */
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";


const Navbar = ({draweWidth = 240, toggleSidebar }) => {

    

    const dispatch = useDispatch()
    const onLogout = ()=>{
        dispatch(startLogout())
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${draweWidth}px)` },
                ml:{sm:`${draweWidth}px`}
                }}
        >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{mr:2 , display: {md: 'none'}}}
                onClick={toggleSidebar}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid 
                container
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography variant="h6" noWrap component={'div'}>Journal App</Typography>

                <IconButton
                    color="error"
                    onClick={onLogout}
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
