// components/sections/Home/SolutionsSection.js
import React from 'react';
import { Container, Box, Typography, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OpacityIcon from '@mui/icons-material/Opacity';
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
          fontFamily: 'Lato, sans-serif'
        }}
      >
        Soluciones Competentes
      </Typography>
      
      {/* First Paragraph */}
      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3, fontSize: { xs: '16px', md: '18px' } }}>
        Invertir en avanzados e innovadores escenarios de producción, purificación, regeneración y reciclaje de aguas; potable <strong>VÓRTICE</strong> y residuales <strong>AWA</strong>, involucrando la integración de estaciones de generación y explotación de energías alternativas limpias <strong>EGEAL</strong>, trae considerables beneficios ambientales y económicos como son la obtención de una mejor producción de agua consumible, el regeneramiento que la hace reutilizable y amable con la naturaleza al descargarla, así mismo la generación de electricidad a partir de energías renovables, sumado a la producción de <strong>H2V</strong> un combustible limpio que no emite gases contaminantes al aire.
      </Typography>
      
      {/* Second Paragraph */}
      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 4, fontSize: { xs: '16px', md: '18px' } }}>
        Estas son acciones convenientes y lucrativas, que contribuyen solidariamente con la compensación hídrica y descontaminación de los cuerpos de agua naturales, así como también con una moderación del aire, que finalmente resultan en un mejoramiento ostensible en la salud y calidad de vida de la población beneficiada, asociado a la obtención de un rentable y satisfactorio negocio para nuestros inversionistas.
      </Typography>


      {/* Modalities Section with Box Container */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
          Proponemos concretas modalidades de productivos acuerdos comerciales para proyectos de:
        </Typography>
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <List sx={{ gap: 2, padding: 0 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
              <OpacityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                Producción, Purificación, Regeneración y Reciclaje de Aguas.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
              <FlashOnIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                Generación y Explotación de Energías Alternativas Limpias.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Contratos de Ejecución de Obra Civil Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Contratos de Ejecución de Obra Civil para:
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box
            sx={{
              flex: 1,
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2
            }}
          >
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              1. Construcción, Puesta en Operación Llave en Mano y Mantenimiento.
            </Typography>
          </Box>
          
          <Box
            sx={{
              flex: 1,
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2
            }}
          >
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              2. Construcción, Operación, Transferencia y Mantenimiento.
            </Typography>
          </Box>
          
          <Box
            sx={{
              flex: 1,
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                mb: 1
              }}
            >
              3. Subcontratación para Construcción y Puesta en Operación Llave en Mano:
            </Typography>
            <List>
              <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="caption">
                  Contratistas de Obras Públicas.
                </Typography>
              </ListItem>
              <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: { xs: '12px', md: '25px' } }} />
                <Typography variant="caption">
                  Contratistas de Obras Privadas.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

      {/* Contratos de Concesión del Servicio */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Contratos de Concesión del Servicio
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'grey.300',
              p: 2,
              borderRadius: 2,
              width: '100%',
              maxWidth: '600px'
            }}
          >
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              Inversión, Construcción y Administración; Pago por tarifa y modalidad convenida.
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* Contratos de Joint Venture */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Contratos de Joint Venture
        </Typography>
      </Box>

      {/* Final Paragraph */}
      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', fontSize: { xs: '16px', md: '18px' } }}
      >
        Brindamos efectiva seguridad, con excelente calidad de productos y servicios, de la mano del mejor negocio para nuestros clientes en proyectos:
      </Typography>
      <List sx={{ ml: 2, mb: 2 }}>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Ambientales.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Comerciales.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Construcción.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Servicios Públicos.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Industriales.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Recreacionales.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Turísticas.
          </Typography>
        </ListItem>
        <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
            Otras.
          </Typography>
        </ListItem>
      </List>
      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', fontSize: { xs: '16px', md: '18px' } }}
      >
        Desde la planeación del proyecto, hasta la administración, incluyendo el diseño, la fabricación de equipos y componentes, construcción de obras civiles, logística, instalación y montaje de equipos, puesta en operación, mantenimiento, la concesión del servicio y otros más, con cuidadosa atención personalizada, controlamos la calidad en cada una de las etapas del proceso contractual y su gestión.
      </Typography>

    </Container>
  );
}
