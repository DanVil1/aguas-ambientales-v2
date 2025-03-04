// components/sections/Home/Home.js
import { Container, Typography } from '@mui/material';

export default function HomeSection() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Site
      </Typography>
      <Typography variant="body1">
        This is the Home section. Customize this content to reflect your brand.
      </Typography>
    </Container>
  );
}