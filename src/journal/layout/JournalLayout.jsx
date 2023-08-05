/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

//const draweWidth = 240;

const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display:"flex"}}>
            {/* navbar */}
            {/* slider */}
            <Box 
                component={'main'}
                sx={{flexGrow:1, p:3}}
            >
            {children}

            </Box>
        </Box>
    );
}

export default JournalLayout;
