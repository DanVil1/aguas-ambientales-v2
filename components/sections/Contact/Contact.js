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
        minHeight: '50vh',
      }}
    >
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          width: '100%',
          justifyContent: 'center',
        }}
      >
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
          <SocialMedia />
        </Box>
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
          <ContactInfo />
        </Box>
      </Box>
    </Container>
  );
}
