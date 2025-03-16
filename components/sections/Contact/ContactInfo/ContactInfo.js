import React from 'react';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { useTheme } from '@mui/material/styles';

const ContactInfo = () => {
  const theme = useTheme();
  const contactItems = [
    { icon: <EmailIcon sx={{ mr: 1, fontSize: { xs: '18px', md: '25px' } }} />, text: "aguasambientales.sas@gmail.com" },
    { icon: <PhoneIcon sx={{ mr: 1, fontSize: { xs: '18px', md: '25px' } }} />, text: "+57 - 6017070124" },
    { icon: <SmartphoneIcon sx={{ mr: 1, fontSize: { xs: '18px', md: '25px' } }} />, text: "+57 - 3196799556" },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
      {contactItems.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          {item.icon}
          <Typography variant="body1" sx={{ color: theme.palette.black.main,  fontSize: { xs: '14px', md: '18px' } }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ContactInfo;
