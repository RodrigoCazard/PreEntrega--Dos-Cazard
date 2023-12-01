import { Box } from '@mui/material';
import  { useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from '@mui/material/styles';
const NavMenu = () => {

  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);

  const handleCategoriesClick = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;






  const styleSocial = { 
    cursor: 'pointer',
    opacity: 0.8,
    transition: 'transform 0.3s ease-in-out', 
    "&:hover": {
      transform: "scale(1.1) ", 
      opacity: 1,
      color:primaryColor
    }}


  const styleLink = {
    fontSize: {
      xs: '1.5rem',
      xl: '2rem',
    },
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.8,
    position:'relative',
    transition: 'transform 0.3s ease-in-out', 
    "&:hover": {
      transform: "scale(1.1) ", 
      opacity: 1,
      
    }
  };

  const styleLinkVariant = {
    fontSize: {
      xs: '1.2rem',
      xl: '1.7rem',
    },
  }

  const styleCategories = {
    opacity: showCategoriesMenu ? 1 : 0.8,
    transform: showCategoriesMenu ? "scale(1.1)" :  'scale(1)', 
    
  }
  return (
    <Box padding={'0 9%'}>
        <Box mt={"20px"} component={'ul'} sx={{
          listStyle: 'none',
          display: 'inline-flex',
          flexDirection: "column",
          rowGap: '20px'
        }}>
          <Box component={'li'} sx={styleLink}>Home</Box>
          <Box  onClick={handleCategoriesClick} component={'li'} sx={{...styleLink,...styleCategories}}>Categories
           <ExpandMoreIcon fontSize='large' sx={{ transform: 'rotate(-90deg)' }} />
            {showCategoriesMenu 
            ? 
            <Box position={'absolute'} right={{
              xs: '-80%',
              xl: '-100%',
            }} top={'10%'}
            display={'flex'}
            flexDirection={'column'}
            rowGap={2}>
              <Box component={'li'} sx={{...styleLink,...styleLinkVariant}}>Laptop</Box>
              <Box component={'li'} sx={{...styleLink,...styleLinkVariant}}>Desktop</Box>
              <Box component={'li'} sx={{...styleLink,...styleLinkVariant}}>Mobile phone</Box>
              <Box component={'li'} sx={{...styleLink,...styleLinkVariant}}>Printer</Box>
              <Box component={'li'} sx={{...styleLink,...styleLinkVariant}}>Others</Box>

            </Box> 
            : 
            <></>
            }
          </Box>
          <Box component={'li'} sx={styleLink}>About</Box>
          <Box component={'li'} sx={styleLink}>Contact</Box>
        </Box>
  
      <Box mt={'25vh'}
      mb={'30px'}
      display={'flex'}
      columnGap='2.5%'>
        <FacebookIcon sx={styleSocial} fontSize='large' ></FacebookIcon>
        <InstagramIcon sx={styleSocial} fontSize='large'></InstagramIcon>
        <TwitterIcon sx={styleSocial} fontSize='large'></TwitterIcon>
      </Box>
    </Box>
  )
}

export default NavMenu;
