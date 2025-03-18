import React from 'react';
import { Container } from '@mui/material';
import Carousel from './Carousel/Carousel';
import CompanyInfo from './CompanyInfo/CompanyInfo';

export default function HomeSection() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ mb: 4 }}>
      <Carousel />
      <CompanyInfo />
    </Container>
  );
}
