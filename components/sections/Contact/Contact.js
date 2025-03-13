// components/sections/Home/ContactSection.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SocialMedia from './SocialMedia/SocialMedia';
import ContactInfo from './ContactInfo/ContactInfo';
import { useTheme } from '@mui/material/styles';

export default function ContactSection() {

  const theme = useTheme();
  
  return (
    <Container
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh', // ensures the content is centered vertically within at least 50% of viewport height
      }}
    >
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // stack on mobile, side by side on desktop
          gap: 4,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {/* Social Media Box */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '40%' },
            p: 3,
            backgroundColor: '#ededed',
            borderRadius: '31px',
            boxShadow: '7px 7px 24px #cccccc, -7px -7px 24px #ffffff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: theme.palette.primary.main }}>
            Síguenos 
          </Typography>
          {/* Add your social media icons/links here */}
          <SocialMedia />
        </Box>
        {/* Contact Information Box */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '40%' },
            p: 3,
            backgroundColor: '#ededed',
            borderRadius: '31px',
            boxShadow: '7px 7px 24px #cccccc, -7px -7px 24px #ffffff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: theme.palette.primary.main }}>
            Contacto
          </Typography>
          {/* Add your contact info here */}
          <ContactInfo />
        </Box>
      </Box>
    </Container>
  );
}
