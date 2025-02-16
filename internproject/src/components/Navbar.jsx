import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  Toolbar,
  AppBar
} from '@mui/material';

const translations = {
  en: {
    brand: "Fashion Brand",
    english: "English",
    malayalam: "Malayalam"
  },
  ml: {
    brand: "ഫാഷൻ ബ്രാൻഡ്",
    english: "ഇംഗ്ലീഷ്",
    malayalam: "മലയാളം"
  }
};

// Create the context
export const LanguageContext = React.createContext();

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #9333EA, #DB2777)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar 
        sx={{
          maxWidth: 'xl',
          width: '100%',
          margin: '0 auto',
          padding: '0.5rem 1rem',
          display: 'flex',
          justifyContent: 'space-between' // This ensures proper spacing
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}
        >
          {translations[language].brand}
        </Typography>
        
        <Select
          value={language}
          onChange={handleLanguageChange}
          size="small"
          sx={{
            color: 'white',
            marginLeft: 'auto', // This pushes the select to the right
            minWidth: '120px', // Ensures consistent width
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiSelect-icon': {
              color: 'white',
            }
          }}
        >
          <MenuItem value="en">{translations[language].english}</MenuItem>
          <MenuItem value="ml">{translations[language].malayalam}</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;