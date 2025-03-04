// components/sections/Home/Home.js
import { Container, Typography } from '@mui/material';

export default function ServicesSection() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Services
      </Typography>
      <Typography variant="body1">
        This is the Services section. Customize this content to reflect your brand.
      </Typography>
    </Container>
  );
}