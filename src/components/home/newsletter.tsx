import React, { FC ,useState , useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import FormDialog from './FormDialog';

const enTranslations = {
  message: "To subscribe" ,
  message2: "Intilaka invites you to subscribe" 
};

// Arabic translations
const arTranslations = {
  message: "للاشتراكك",
  message2: ". انطلاقة تدعوكم للإشتراك" 
};

// French translations
const frTranslations = {
  message: "Pour vous abonner",
  message2: "Intilaka vous invite à vous abonner" 
};
const HomeNewsLetter: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () : void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  type Translations = {
    message: string;
    message2: string;
  };
  let translation: Translations;
  const [selectedLanguage,setSelectedLanguage]= useState('en')
  switch (selectedLanguage) {
    case 'en':
      translation = enTranslations;
      break;
    case 'ar':
      translation = arTranslations;
      break;
    case 'fr':
      translation = frTranslations;
      break;
    default:
      // Default to English if the selected language is not recognized
      translation = enTranslations;
      break;
  }
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
    
        const en = localStorage.getItem('selectedLanguage')
        if (en) 
          setSelectedLanguage(en)
      
    };
    fetchData();
  }, [selectedLanguage]);


  return (
    <Box id="newsletter" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container >
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            {translation.message2}
          </Typography>
          <Typography sx={{ mb: 2 }}>
            The Cosmic Stage: Explore, Code, Act, Learn 🌌💻🎭📚
            </Typography>
            <Typography sx={{ mb: 2 }}>
            🌌💻🎭📚 المسرح الكوني: استكشف، اكتب البرمجيات، امثل، تعلم 
            </Typography>
            <Typography sx={{ mb: 6 }}>
            La Scène Cosmique : Explorez, Codez, Jouez, Apprenez 🌌💻🎭📚
            </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
             <StyledButton disableHoverEffect size="large" onClick={handleClickOpen}>
             {translation.message}
            </StyledButton>
            <FormDialog open={open} onClose={handleClose} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
