import { StarTwoTone } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";


const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{minHeight:'calc(100vh - 110px)',backgroundColor:'primary.main',padding:4, }}
            className="animate__animated animate__fadeIn animate__faster"
        >

        <Grid item xs={12}>
            <StarTwoTone sx={{fontSize:100 , color: 'white'}}/>
        </Grid>

        <Grid item xs={12}>
            <Typography color={'white'} variant="h5">
             selecione o crea una nota 
            </Typography>
        </Grid>


        </Grid>
    );
}

export default NothingSelectedView;
