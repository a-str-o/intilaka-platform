import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

const ClubPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p={8}
    >
      <Image
        src="/images/clubs/logos-04.png"
        width={180}
        height={180}
        alt="Club Logo"
      />
      <Typography variant="h4" mt={4} mb={1}>
        Coding Club 
      </Typography>
      <Typography variant="body1">
          Découvrez le monde créatif et stimulant de la programmation en rejoignant notre club de 
          coding pour enfants et adultes ! Apprenez à créer vos propres jeux, sites web et applications 
          tout en développant des compétences essentielles pour l'avenir. Peu importe votre niveau 
          d'expérience, notre club vous offre une opportunité passionnante d'explorer la technologie de 
          manière amusante et collaborative. Rejoignez-nous pour transformer vos idées en réalité numérique
           dès aujourd'hui !
      </Typography>

      <Box mt={3}>
        <Grid container spacing={4}>
          {/* Loop through 10 images */}
          {Array.from({ length: 9 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Image
                src={`/images/Coding/${index}.jpg`}
                width={400}
                height={300}
                alt={`Image ${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClubPage;
