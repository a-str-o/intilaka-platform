// src/FormDialog.tsx
import React, { useState ,useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { Button, Container, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box'
// English translations
const enTranslations = {
  formDialogTitle: "Enter Your Information",
  formDialogContent: "Please fill in the following information:",
  formNameLabel: "Name",
  formEmailLabel: "Email Address",
  formPhoneLabel: "Phone Number",
  formAgeLabel: "Age",
  formCancelButton: "Cancel",
  formSubmitButton: "Submit",
  message: "Thanks for your subscription."
};

// Arabic translations
const arTranslations = {
  formDialogTitle: "أدخل المعلومات الخاصة بك",
  formDialogContent: ": يرجى ملء المعلومات التالية",
  formNameLabel: "الاسم",
  formEmailLabel: "عنوان البريد الإلكتروني",
  formPhoneLabel: "رقم الهاتف",
  formAgeLabel: "العمر",
  formCancelButton: "إلغاء",
  formSubmitButton: "إرسال",
  message: "شكرًا لاشتراكك"
};

// French translations
const frTranslations = {
  formDialogTitle: "Entrez vos informations",
  formDialogContent: "Veuillez remplir les informations suivantes :",
  formNameLabel: "Nom",
  formEmailLabel: "Adresse e-mail",
  formPhoneLabel: "Numéro de téléphone",
  formAgeLabel: "Âge",
  formCancelButton: "Annuler",
  formSubmitButton: "Envoyer",
  message: "Merci pour votre abonnement"
};

interface FormDialogProps {
    open: boolean;
    onClose: () => void;
  }
  
  const FormDialog: React.FC<FormDialogProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });
  type Translations = {
    formDialogTitle: string;
    formDialogContent: string;
    formNameLabel: string;
    formEmailLabel: string;
    formPhoneLabel: string;
    formAgeLabel: string;
    formCancelButton: string;
    formSubmitButton: string;
    message: string;
  };
  // Set the translation object based on the selected language
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
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onClose();
    const formEle = document.querySelector("form");
    if (formEle !== null) 
    {
    const formDatab: FormData = new FormData(formEle);
    axios
      .post(
        'https://script.google.com/macros/s/AKfycbzVHFvnTyflXzpkAHl4W09ylfJ-okg8XoPX8IAwco4CRsyY4Rso4UJ8KzGTCRPjZyI9/exec',
        formDatab
      )
      .then((response) => {
        console.log(response.data);
        alert(translation.message)
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
  const handleClose = () : void => {
    onClose();
  };
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
    
        const en = localStorage.getItem('selectedLanguage')
        if (en) 
          setSelectedLanguage(en)
      
    };
    fetchData();
  }, [selectedLanguage]);


  return (
    <Dialog open={open} onClose={onClose}>
     <Container maxWidth="sm" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {translation.formDialogTitle}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {translation.formDialogContent}
       
      </Typography>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label= {translation.formNameLabel}
          name="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label= {translation.formEmailLabel}
          name="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label= {translation.formPhoneLabel}
          name="Phone"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label= {translation.formAgeLabel}
          name="Age"
          variant="outlined"
          margin="normal"
          fullWidth
        />
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
       <Button variant="contained" type="submit" color="primary" sx={{ margin: '10px' }}>
        {translation.formSubmitButton}
      </Button>
      <Button variant="contained" onClick={handleClose} color="primary" sx={{ margin: '10px' }}>
        {translation.formCancelButton}
      </Button>

        </Box>
      </form>
    </Container>
    </Dialog>
  );
};

export default FormDialog;
