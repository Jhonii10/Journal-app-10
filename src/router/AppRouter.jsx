import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui/components/CheckingAuth";
import { UseCheckAuth } from "../hooks/useCheckAuth";



const AppRouter = () => {

    const {status} = UseCheckAuth()

    if( status === 'checking' || status === ''){
        return <CheckingAuth/>
    }

    return (
        <Routes>
        {
            (status === 'authenticated')
            ? <Route path="/*" element={<JournalRoutes/>}/>
            : <Route path="/auth/*" element={<AuthRoutes/>}/>

        }
          <Route path="/*" element={<Navigate to={'/auth/login'}/>}/>
            
        </Routes>
    );
}

export default AppRouter;
