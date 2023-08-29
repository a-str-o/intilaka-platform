import React from 'react';
import i18n from 'i18next';
import { Box, Button, Popover, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const LanguageChangePopup: React.FC = () => {

  const availableLanguages: Language[] = [
    { code: 'ar', label: 'العربية', flag: '/images/flags/ar.png' },
    { code: 'en', label: 'English', flag: '/images/flags/en.png' },
    { code: 'fr', label: 'Français', flag: '/images/flags/fr.png' },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (code: string): void => {
    i18n.changeLanguage(code);
    localStorage.setItem('selectedLanguage', code);
    setAnchorEl(null);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onClick={handleLanguageClick}>
        <img
          src={'/images/flags/icon.jpg'}
          alt={'flag'}
          style={{ width: '24px', height: 'auto' }}
        />
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
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
