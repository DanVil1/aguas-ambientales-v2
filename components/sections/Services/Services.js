// components/sections/Services/Services.js
import React, { useState } from 'react';
import { Container, Box, Typography, Button, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';

export default function ServicesSection({ onSectionChange }) {
  const theme = useTheme();
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleFlipBack = () => {
    setFlipped(false);
  };

  const handleNavigate = () => {
    // Update the active section to 'solutions'
    onSectionChange('solutions');
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Main Heading */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textTransform: 'uppercase',
          color: theme.palette.primary.main,
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Lato, sans-serif'
        }}
      >
        Servicios
      </Typography>

      {/* First Paragraph */}
      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', mb: 3, fontSize: { xs: '16px', md: '18px' } }}
      >
        Proponemos la prestación de un servicio competente, que desarrolla y ejecuta nuestras mejores soluciones.
      </Typography>

      {/* Centered Flip Card */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ perspective: '1000px' }}>
          <Box
            sx={{
              position: 'relative',
              width: '300px',
              height: '200px',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front Side */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: theme.palette.grey[300],
                borderRadius: '8px',
                boxShadow: 3,
                backgroundColor: 'white',
                p: 2,
              }}
            >
              <SettingsIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                CONCESION
              </Typography>
              <Button variant="contained" onClick={handleFlip}>
                Ver
              </Button>
            </Box>

            {/* Back Side */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: theme.palette.grey[300],
                borderRadius: '8px',
                boxShadow: 3,
                backgroundColor: 'white',
                p: 2,
              }}
            >
              <List sx={{ width: '100%' }}>
                <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                    Producción, Purificación, Regeneración y Reciclaje de Aguas.
                  </Typography>
                </ListItem>
                <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                    Generación y Explotación de Energías Alternativas Limpias.
                  </Typography>
                </ListItem>
              </List>
              <Button variant="contained" onClick={handleNavigate} sx={{ mt: 2 }}>
                Ver Mas
              </Button>
              <Button variant="text" onClick={handleFlipBack} sx={{ mt: 1 }}>
                Volver
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
