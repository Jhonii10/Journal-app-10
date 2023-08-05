/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

const SideBar = ({draweWidth}) => {
    return (
        <Box
            component={'nav'}
            sx={{ width: {sm: draweWidth}, flexShrink: {sm: 0 }}}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs:'block'},
                    '& .MuiDrawer-paper':{ boxSizing:'border-box',width:draweWidth}
                }}
            >

            <Toolbar>
                <Typography variant="h6" noWrap component={'div'}>
                    Jhoni ipia
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    ['enero','febrero','marzo','abril','mayo','junio'].map(text =>(
                        <ListItem key={text} disablePadding>
                        <ListItemIcon>
                            <TurnedInNot/>
                        </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'i am have a cat, and your has a dog'}/>
                            </Grid>
                        </ListItem>
                    ))
                }
            </List>

            </Drawer>
         
            
        </Box>
    );
}

export default SideBar;