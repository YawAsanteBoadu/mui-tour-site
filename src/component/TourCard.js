import Paper from '@mui/material/Paper';
import { Box, Grid2, Typography } from '@mui/material';


const TourCard = () => {
    return (
        <Grid2 item xs={3}>
            <Paper>
            <img src='' alt='AKOSOMBO' className='img'/>
            
            <Box paddingX={1}>
                <Typography variant='h6' component={'h2'}>
                    Do beter
                </Typography>

                <Box 
            sx={{ display:"flex",
                    alignItems:"center"
            }}
            >
                <Typography>5 hours</Typography>
            </Box>
            </Box>
            </Paper>
        </Grid2>
    )
};

export default TourCard;