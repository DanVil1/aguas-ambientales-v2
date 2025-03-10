// components/sections/Home/ContactSection.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SocialMedia from './SocialMedia/SocialMedia';

export default function ContactSection() {
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
            border: '1px solid #ddd',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h3" gutterBottom>
            Social Media
          </Typography>
          {/* Add your social media icons/links here */}
          <Typography variant="body1">
            <SocialMedia />
          </Typography>
        </Box>
        {/* Contact Information Box */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '40%' },
            p: 3,
            border: '1px solid #ddd',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h3" gutterBottom>
            Contact Information
          </Typography>
          {/* Add your contact info here */}
          <Typography variant="body1">
            [Email, Phone, Address, etc.]
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
