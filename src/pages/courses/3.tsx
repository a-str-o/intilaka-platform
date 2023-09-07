import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material'; // Import the Button component
import Image from 'next/image';
// import { useTranslation } from "next-i18next";

const ClubPage: React.FC = (): JSX.Element => {
  // const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p={4}>
      <Image src="/images/clubs/logos-05.png" width={180} height={180} alt="Club Logo" />
      <Typography variant="h4" mt={4} mb={1}>
      {/* {t('hello')} */}
      </Typography>
      <Typography variant="body1">{/* Your content */}</Typography>

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
