/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";
import { Grid,  ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

const SideBarItem = ({title, body , id, date, imageUrl = []}) => {

    const newTitle = useMemo(()=>{
        return title.length > 17 
                ? title.substring(0,17) + '...'
                : title;
    },[title])

    
    const dispatch = useDispatch();



    return (
        <ListItem  
        disablePadding
        onClick={()=>dispatch(setActiveNote({title, body , id, date, imageUrl}))}
        >
        <ListItemButton>
                        <ListItemIcon >
                            <TurnedInNot />
                        </ListItemIcon>
                            <Grid container display={'block'}>
                                <ListItemText primary={newTitle}/>
                                <ListItemText secondary={body}/>
                            </Grid>
                            </ListItemButton>
                        </ListItem>
    );
}

export default SideBarItem;
