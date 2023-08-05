/* eslint-disable react/prop-types */
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";


const Navbar = ({draweWidth = 240}) => {
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
                sx={{mr:2 , display: {sm: 'none'}}}
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
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
