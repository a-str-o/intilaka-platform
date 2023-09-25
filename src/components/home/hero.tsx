import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import axios from 'axios';


interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}


const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}
interface LanguageData {
  titleCoding: string;
  descriptionCoding: string;
  titlePopCorn: string;
  descriptionPopCorn: string;
  titleKepler: string;
  descriptionKepler: string;
  titleGutenberg: string;
  descriptionGutenberg: string;
  intilaka: string;
  Certificate: string;
  Certificate2: string;
  Started: string;
  exp:any;
}


const HomeHero: FC = () => {
  const [languageData, setLanguageData] = useState<LanguageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [en, setEn] = useState("en");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const selectedLanguage = localStorage.getItem('selectedLanguage')
        if (selectedLanguage) 
          setEn(selectedLanguage)
        const response = await axios.get(`/api/data2?lang=${en}`);
        setLanguageData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [en]);
  const whatsappGroupLink = 'https://chat.whatsapp.com/GaIdZ4lvaYkBsVAnXOImT6';

  const handleButtonClick = () : void => {
    window.open(whatsappGroupLink, '_blank');
  };

  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {loading ? (
          // Loading animation or message
          // <LoadingAnimation />
          <h1>loading</h1>
        ) : (
        
        <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Improve{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    skill
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#10a2bb"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#10a2bb"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#10a2bb"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>s{' '}
                  <br />
                  in different ways
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                 {languageData ? (
                          <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                              {languageData.intilaka}
                          </Typography>
                        ) : 
                  (
                  <div>Loading...</div>
                  )}
              </Box>
         
              <Box sx={{ '& button': { mr: 2 } }}>
              {languageData ? (
                
                  <ScrollLink to="newsletter" spy={true} smooth={true} offset={0} duration={350}>
                    <StyledButton color="primary" size="large" variant="contained">
                      {languageData.Started}
                    </StyledButton>
                  </ScrollLink>
              ) : 
                  (
                  <div>Loading...</div>
            )}

              
                  <StyledButton onClick={handleButtonClick} color="primary" size="large" variant="outlined">
                    Join WhatsApp Group
                  </StyledButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
             
              {languageData ? ( 
                        <Box>
                          <Typography
                            component="h6"
                            sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                          >
                            {languageData.Certificate}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                          {languageData.Certificate2}
                          </Typography>
                        </Box>
                          
                        ) : 
                  (
                  <div>Loading...</div>
                  )}


                
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-hero.png" width={800} height={800} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

       

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
       
          {languageData ? (
             <Grid container spacing={2}>
                {languageData.exp.map((item:any) => (
                  <Grid key={item.value} item xs={12} md={4}>
                    <ExpItem item={item} />
                  </Grid>
                ))}
              </Grid>
              ) : 
                  (
                  <div>Loading...</div>
            )}
          
            


         
        </Box>

        
      </Container>
    </Box>
     )}
     </Container>
   </Box>
  )
}

export default HomeHero
