/* eslint-disable react/prop-types */
import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useState } from "react";

const draweWidth = 240;

const JournalLayout = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    

    return (
        <Box sx={{ display:"flex"}}
             className="animate__animated animate__fadeIn animate__faster"
        >
            <Navbar draweWidth={draweWidth} toggleSidebar={toggleSidebar}/>
            <SideBar draweWidth={draweWidth} isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
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
