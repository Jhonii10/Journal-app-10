/* eslint-disable react/prop-types */
import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const draweWidth = 240;

const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display:"flex"}}
             className="animate__animated animate__fadeIn animate__faster"
        >
            <Navbar draweWidth={draweWidth}/>
            <SideBar draweWidth={draweWidth}/>
            <Box 
                component={'main'}
                sx={{flexGrow:1, p:3}}
            >

            <Toolbar/>
            {children}

            </Box>
        </Box>
    );
}

export default JournalLayout;
