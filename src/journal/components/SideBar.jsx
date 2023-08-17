/* eslint-disable react/prop-types */
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";
import { CloseOutlined } from "@mui/icons-material";


const SideBar = ({draweWidth , isOpen, toggleSidebar}) => {



    const {displayName, email} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)
    
    
  

    return (
        <Box
            component={'nav'}
            sx={{
                    width: { sm: draweWidth },
                    flexShrink: { sm: 0 },
                    display: { xs: isOpen ? 'block' : 'none', md: 'block' },
                    
                }}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs:'block'},
                    '& .MuiDrawer-paper':{ boxSizing:'border-box',width:draweWidth}
                }}
            >

            <Toolbar >
                <Typography variant="h6" noWrap component={'div'}>
                    {displayName || email}
                </Typography>
            </Toolbar>

            <IconButton
        aria-label="Cerrar"
        onClick={toggleSidebar}
        sx={{
          position: 'absolute',
          top: 12,
          right: 0,
          display: {md: 'none'}
        }}
      >
        <CloseOutlined />
      </IconButton>

            <Divider/>

            <List>
                {
                    notes.map(note =>(
                        <SideBarItem key={note.id} {...note} />
                    ))
                }
            </List>

            </Drawer>
         
            
        </Box>
    );
}

export default SideBar;
