
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AppTeam from "./theme/AppTeam";

const JournalApp = () => {
    return (
        
        <BrowserRouter>
        <AppTeam>
           <AppRouter/>
        </AppTeam> 
        </BrowserRouter>
    );
}

export default JournalApp;
