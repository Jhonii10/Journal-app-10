/* eslint-disable no-extra-boolean-cast */
import { IconButton } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import NothingSelectedView from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

const JournalPage = () => {
    
    const {isSaving , active} = useSelector(state => state.journal)
    
    
    const dispatch = useDispatch()

    const onClickNewNote=()=>{
        dispatch(startNewNote())
    }
    return (
        <JournalLayout>
                {
                  (!!active)
                  ?<NoteView/>
                  :<NothingSelectedView/>
                }
                <IconButton 
                    disabled={isSaving}
                    size="large"
                    sx={{
                        color:'white',
                        backgroundColor:'error.main',
                        ':hover':{backgroundColor:'error.main', opacity:0.9},
                        position:'fixed',
                        right:50,
                        bottom:50
                    }}
                    onClick={onClickNewNote}
                    
                    
                >

                <AddOutlined
                    sx={{fontSize:30}}
                />

                </IconButton>
        </JournalLayout>
    );
}

export default JournalPage;
