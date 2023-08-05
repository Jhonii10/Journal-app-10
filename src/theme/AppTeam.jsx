/* eslint-disable react/prop-types */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeColor } from './themeColor.js';

const AppTeam = ({children}) => {
    return (
        <ThemeProvider theme={themeColor}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
}

export default AppTeam;
