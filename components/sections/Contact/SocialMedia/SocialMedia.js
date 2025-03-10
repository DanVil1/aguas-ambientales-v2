// components/SocialMediaIcons.js
import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialMediaIcons() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mt: 2,
      }}
    >
      {/* Facebook */}
      <IconButton
        sx={{
          width: 80,
          height: 80,
          backgroundColor: '#fff',
          borderRadius: '50%',
          border: '3px solid #fff',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.5s',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#3b5999',
            transition: 'top 0.5s ease-out',
            zIndex: 1,
          },
          '&:hover:before': {
            top: 0,
          },
          '& svg': {
            position: 'relative',
            zIndex: 2,
            transition: 'transform 0.5s',
          },
          '&:hover svg': {
            transform: 'rotateY(360deg)',
            color: '#fff',
          },
        }}
      >
        <FacebookIcon sx={{ fontSize: 35, color: '#262626' }} />
      </IconButton>

      {/* Twitter */}
      <IconButton
        sx={{
          width: 80,
          height: 80,
          backgroundColor: '#fff',
          borderRadius: '50%',
          border: '3px solid #fff',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.5s',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#55acee',
            transition: 'top 0.5s ease-out',
            zIndex: 1,
          },
          '&:hover:before': {
            top: 0,
          },
          '& svg': {
            position: 'relative',
            zIndex: 2,
            transition: 'transform 0.5s',
          },
          '&:hover svg': {
            transform: 'rotateY(360deg)',
            color: '#fff',
          },
        }}
      >
        <TwitterIcon sx={{ fontSize: 35, color: '#262626' }} />
      </IconButton>

      {/* LinkedIn */}
      <IconButton
        sx={{
          width: 80,
          height: 80,
          backgroundColor: '#fff',
          borderRadius: '50%',
          border: '3px solid #fff',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.5s',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0077b5',
            transition: 'top 0.5s ease-out',
            zIndex: 1,
          },
          '&:hover:before': {
            top: 0,
          },
          '& svg': {
            position: 'relative',
            zIndex: 2,
            transition: 'transform 0.5s',
          },
          '&:hover svg': {
            transform: 'rotateY(360deg)',
            color: '#fff',
          },
        }}
      >
        <LinkedInIcon sx={{ fontSize: 35, color: '#262626' }} />
      </IconButton>

{/* Instagram Button */}
<IconButton
  sx={{
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: '50%',
    border: '3px solid #fff',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.5s',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#E1306C', // Instagram brand color
      transition: 'top 0.5s ease-out',
      zIndex: 1,
    },
    '&:hover:before': {
      top: 0,
    },
    '& svg': {
      position: 'relative',
      zIndex: 2,
      transition: 'transform 0.5s',
    },
    '&:hover svg': {
      transform: 'rotateY(360deg)',
      color: '#fff',
    },
  }}
>
  <InstagramIcon sx={{ fontSize: 35, color: '#262626', transition: 'transform 0.5s' }} />
</IconButton>

    </Box>
  );
}
