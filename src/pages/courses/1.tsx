import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const ClubPage = () => {
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);

  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
  };

  useEffect(() => {
    setShowLanguageButtons(true); // Show the language buttons after component is mounted
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p={4}>
      <Image src="/images/clubs/logos-05.png" width={180} height={180} alt="Club Logo" />
      <Typography variant="h4" mt={4} mb={1}>
        Coding Club {t('welcome')}
      </Typography>
      <Typography variant="body1">{/* Your content */}</Typography>

      {showLanguageButtons && (
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
          <button onClick={() => changeLanguage('ar')}>العربية</button>
        </div>
      )}

      <Box mt={3}>
        <Grid container spacing={4}>
          {/* Loop through 10 images */}
          {Array.from({ length: 9 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Your image */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClubPage;
