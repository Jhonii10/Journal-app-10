import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ImageGallery from "../components/ImageGallery";

const NoteView = () => {
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
              <Typography fontSize={39} fontWeight={'light'}>05 de agosto del 2023</Typography>

            </Grid>

            <Grid
                item   
            >
              <Button color="primary" sx={{p:2 , borderRadius:2}} >
                <SaveOutlined sx={{fz:30, mr:1}}/>
                 Guardar
              </Button>

            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="ingresa una entraeda"
                    label='titulo'
                    sx={{border: 'none', mb:1}}
                    autoComplete="off"
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
                />

            </Grid>

            <ImageGallery/>


           
            
        </Grid>
    );
}

export default NoteView;
