import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

const ClubPage = () => {
  const imageStyle = {
  borderRadius: '10px',
}
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p={4}
    >
      <Image
        src="/images/clubs/logos-03.png"
        width={180}
        height={180}
        alt="Club Logo"
      />
      <Typography variant="h4" mt={4} mb={1}>
      PopCorn Theatre Club 
      </Typography>
      <Typography variant="body1">
      Plongez dans l'univers fascinant du théâtre avec le club Popcorne ! Fort de 6 années d'expérience, nous vous invitons à rejoindre une aventure artistique captivante. Explorez les scènes, libérez votre créativité et découvrez le pouvoir de l'expression. Rejoignez-nous pour une expérience théâtrale inoubliable !
      </Typography>

      <Box mt={3}>
        <Grid container spacing={4}>
          {/* Loop through 10 images */}
          {Array.from({ length: 9 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
                  <Image
                     src={`/images/Coding/${index}.jpg`}
                    objectFit="cover"
                    alt={`Image ${index}`}
                    quality={75} 
                    style={imageStyle}
                    width="400px"
                    height="300px"
                  />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClubPage;
