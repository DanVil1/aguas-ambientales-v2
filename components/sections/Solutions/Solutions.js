// components/sections/Home/SolutionsSection.js
import React from 'react';
import { Container, Box, Typography, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CheckIcon from '@mui/icons-material/Check';

export default function SolutionsSection() {
  
  const theme = useTheme();

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
          fontFamily: 'Lato, sans-serif',
          fontWeight: 'bold'
        }}
      >
        Soluciones Competentes
      </Typography>
      
      {/* First Paragraph */}
      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2, fontSize: { xs: '16px', md: '18px' }, '& strong': { color: theme.palette.primary.main } }}>
        Invertir en avanzados e innovadores escenarios de producción, purificación, regeneración y reciclaje de aguas; potable <strong>VÓRTICE</strong> y residuales <strong>AWA</strong>, involucrando la integración de estaciones de generación y explotación de energías alternativas limpias <strong>EGEAL</strong>, trae considerables beneficios ambientales y económicos como son la obtención de una mejor producción de agua consumible, el regeneramiento que la hace reutilizable y amable con la naturaleza al descargarla, así mismo la generación de electricidad a partir de energías renovables, sumado a la producción de <strong>H2V</strong> un combustible limpio que no emite gases contaminantes al aire.
      </Typography>
      
      {/* Second Paragraph */}
      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2, fontSize: { xs: '16px', md: '18px' } }}>
        Estas son acciones convenientes y lucrativas, que contribuyen solidariamente con la compensación hídrica y descontaminación de los cuerpos de agua naturales, así como también con una moderación del aire, que finalmente resultan en un mejoramiento ostensible en la salud y calidad de vida de la población beneficiada, asociado a la obtención de un rentable y satisfactorio negocio para nuestros inversionistas.
      </Typography>

      {/* Modalities Section with Box Container */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
          Proponemos concretas modalidades de productivos acuerdos comerciales para proyectos de:
        </Typography>
        <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          <List sx={{ gap: 2, padding: 0 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
              <WaterDropIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' }, color: theme.palette.primary.main, fontWeight: 'bold' }}>
                Producción, Purificación, Regeneración y Reciclaje de Aguas.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
              <FlashOnIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' }, color: theme.palette.primary.main, fontWeight: 'bold' }}>
                Generación y Explotación de Energías Alternativas Limpias.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Contratos de Ejecución de Obra Civil Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Contratos de Ejecución de Obra Civil para:
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              1. Construcción, Puesta en Operación Llave en Mano y Mantenimiento.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              2. Construcción, Operación, Transferencia y Mantenimiento.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              3. Subcontratación para Construcción y Puesta en Operación Llave en Mano:
            </Typography>
            <List sx={{ p: 0 }}>
              <ListItem
                disableGutters
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  m: 0,
                  p: 0
                }}
              >
                <CheckIcon
                  sx={{ mr: 0.5, color: theme.palette.primary.main, fontSize: '16px' }}
                />
                <Typography variant="caption" sx={{ m: 0 }}>
                  Contratistas de Obras Públicas.
                </Typography>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  m: 0,
                  p: 0
                }}
              >
                <CheckIcon
                  sx={{ mr: 0.5, color: theme.palette.primary.main, fontSize: '16px' }}
                />
                <Typography variant="caption" sx={{ m: 0 }}>
                  Contratistas de Obras Privadas.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

      {/* Contratos de Concesión del Servicio */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}>
          Contratos de Concesión del Servicio
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2,
              textAlign: 'center',
              maxWidth: { xs: '100%', md: '600px' },
              mx: 'auto'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              Inversión, Construcción y Administración; Pago por tarifa y modalidad convenida.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Contratos de Joint Venture */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
          Contratos de Joint Venture
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'justify',
            mb: 2,
            fontSize: { xs: '16px', md: '18px' }
          }}
        >
          Brindamos efectiva seguridad, con excelente calidad de productos y servicios, de la mano del mejor negocio para nuestros clientes en proyectos:
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'grey.300',
            p: 2,
            borderRadius: 2,
            textAlign: 'center',
            maxWidth: { xs: '100%', md: '600px' },
            mx: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Ambientales.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Comerciales.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Construcción.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Servicios Públicos.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Industriales.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Recreacionales.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Turísticas.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(25% - 16px)' },
                maxWidth: { xs: '100%', md: 'calc(25% - 16px)' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '14px' }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
              >
                Otras.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{ textAlign: 'justify', mt: 2, fontSize: { xs: '16px', md: '18px' } }}
        >
          Desde la planeación del proyecto, hasta la administración, incluyendo el diseño, la fabricación de equipos y componentes, construcción de obras civiles, logística, instalación y montaje de equipos, puesta en operación, mantenimiento, la concesión del servicio y otros más, con cuidadosa atención personalizada, controlamos la calidad en cada una de las etapas del proceso contractual y su gestión.
        </Typography>
      </Box>

    </Container>
  );
}
