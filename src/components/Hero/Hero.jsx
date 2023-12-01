
import { Grid, Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Img from "./icon-image-not-found-free-vector.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <Grid container fluid sx={{ backgroundColor: "rgba(0,0,0,0.03)", borderRadius: 10,  width:'100%', padding: "5%", mb: 5 }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '4rem',
              xl: '5rem'
            },
          }}
        >
          Tu texto aquí
        </Typography>
        <Typography variant="h2" component="h2" sx={{
          marginLeft: 'auto',
          marginRight: "20%",
          fontSize: {
            xs: '1rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '3rem',
            xl: '4rem'
          },
        }}>
          $259.99
        </Typography>
        <Button variant="contained" sx={{ width: 300, height: 70, fontSize: "1.5rem", fontWeight: "bold", borderRadius: 10 }}>Buy Now</Button>
      </Grid>
      <Grid item xs={12} md={6} >
        <Box width={'100%'} height={'100%'}  position="relative" display={'flex'} alignItems={'center'} justifyContent={'center'}>

          <ArrowBackIcon fontSize='large' style={{ cursor:'pointer',position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}></ArrowBackIcon>

          <img
            src={Img}
            alt=""
            style={{width:'70%',height:'auto',display:'block', objectFit: 'contain' }}
          />
          
          <ArrowForwardIcon fontSize='large' style={{ cursor:'pointer', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}></ArrowForwardIcon>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;