/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Delete, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

const NoteView = () => {

    const dispatch = useDispatch()
    const {active: note , MessageSave, isSaving} = useSelector(state => state.journal);
    const {body, title,date,onInputChange,formState} = useForm(note)

    const dateString = useMemo(()=>{
        const newDate = new Date(date)
        return newDate.toUTCString()
    },[date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    useEffect(() => {
       if (MessageSave.length > 1) {
        Swal.fire('Nota actualizada', MessageSave,'success')
       }
    }, [MessageSave]);

    const fileInputRef = useRef();

    const onSaveNote = ()=>{
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = ()=>{
        dispatch(startDeletingNote())
    }
    

    return (
        <Grid
            container
            direction="row"
            justifyContent='space-between'
            sx={{mb:1}}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid
                item   
            >
              <Typography fontSize={39} fontWeight={'light'}>{dateString}</Typography>

            </Grid>

            <Grid
                item   
            >
            <input 
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

              <Button 
                color="primary"
                sx={{p:2 , borderRadius:2}} 
                onClick={onSaveNote}
                disabled={isSaving}
                >
                <SaveOutlined sx={{fz:30, mr:1}}/>
                 Guardar
              </Button>

            </Grid>

            <Grid 
              container
              >
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="ingresa una titulo"
                    label='titulo'
                    sx={{border: 'none', mb:1}}
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio hoy?"
                    sx={{border: 'none', mb:1}}
                    minRows={5}
                    autoComplete="off"
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>

            <Grid
             container
             justifyContent={'end'}

            >
                <Button
                  onClick={onDelete}
                  sx={{mt:1}}
                  color="error"
                >
                    <Delete/>
                </Button>

            </Grid>

            <ImageGallery
                images={note.imageUrl}
            />


           
            
        </Grid>
    );
}

export default NoteView;
