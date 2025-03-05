// components/sections/Home/Home.js
import React from 'react';
import { Container } from '@mui/material';
import Carousel from './Carousel/Carousel';

export default function HomeSection() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ mb: 4 }}>
      <Carousel />
    </Container>
  );
}
