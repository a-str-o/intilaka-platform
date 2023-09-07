import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Modal, ListItem, ListItemIcon, ListItemText } from '@mui/material';


const LanguageSelectionPopup: React.FC = (): JSX.Element => { 

  const [open, setOpen] = useState(true);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLanguageChange = (languageCode:string) : void => {
    localStorage.setItem('selectedLanguage', languageCode);
    window.location.reload();
    handleClose();
  };
  const availableLanguages = [
    { code: 'ar', label: 'العربية', flag: '/images/flags/ar.png' },
    { code: 'en', label: 'English', flag: '/images/flags/en.png' },
    { code: 'fr', label: 'Français', flag: '/images/flags/fr.png' },
    
  ];

  return (
    <Modal open={open} onClose={handleClose}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <h2>Welcome to INTILAKA!</h2>
        <p>Please select your preferred language:</p>
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
      </div>
    </div>
  </Modal>
  );
};

export default LanguageSelectionPopup;
