
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple, green } from '@mui/material/colors';
import PropTypes from 'prop-types';


// Define tu propio tema utilizando createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  // Otros estilos y configuraciones del tema
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // ... más configuraciones de tipografía si es necesario
  },
  // ... más configuraciones del tema si es necesario
});

// Componente ThemeProvider personalizado para proporcionar el tema a toda la aplicación
const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      {children}
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validación para la prop 'children'
  };

export default CustomThemeProvider;
