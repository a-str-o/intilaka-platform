import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Popover, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const LanguageChangePopup = () => {
  const { i18n } = useTranslation();

  const availableLanguages = [
    { code: 'ar', label: 'العربية', flag: '/images/flags/ar.png' },
    { code: 'en', label: 'English', flag: '/images/flags/en.png' },
    { code: 'fr', label: 'Français', flag: '/images/flags/fr.png' },
    
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('selectedLanguage', code);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onClick={handleLanguageClick}>
        {/* Add your language change icon here */}
        <img
                  src={'/images/flags/icon.jpg'}
                  alt={' flag'}
                  style={{ width: '24px', height: 'auto' }} 
                />
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom', // Position the pop-up at the bottom
          horizontal: 'center', // Center the pop-up horizontally
        }}
        transformOrigin={{
          vertical: 'top', // Position the pop-up content at the top
          horizontal: 'center', // Center the pop-up content horizontally
        }}
      >
        <Box sx={{ p: 2 }}>
          {availableLanguages.map((language) => (
            <ListItem
            key={language.code}
            button
            onClick={() => handleLanguageChange(language.code)}
          >
            <ListItemIcon>
                    <img
                  src={language.flag}
                  alt={language.label + ' flag'}
                  style={{ width: '24px', height: 'auto' }} 
                />
            </ListItemIcon>
            <ListItemText primary={language.label} />
          </ListItem>
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default LanguageChangePopup;
