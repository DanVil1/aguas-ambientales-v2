// components/sections/Home/SolutionsSection.js
import React from 'react';
import { Container, Box, Typography, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SolutionsSection() {
  const theme = useTheme();

  return (
    <Container sx={{ py: 4 }}>
      {/* Main Heading */}
      <Typography
        variant="h2"
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
      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', mb: 3, fontSize: { xs: '16px', md: '18px' } }}
      >
        Invertir en avanzados e innovadores escenarios de producción, purificación, regeneración y reciclaje de aguas; potable <strong>VÓRTICE</strong> y residuales <strong>AWA</strong>, involucrando la integración de estaciones de generación y explotación de energías alternativas limpias <strong>EGEAL</strong>, trae considerables beneficios ambientales y económicos como son la obtención de una mejor producción de agua consumible, el regeneramiento que la hace reutilizable y amable con la naturaleza al descargarla, así mismo la generación de electricidad a partir de energías renovables, sumado a la producción de <strong>H2V</strong> un combustible limpio que no emite gases contaminantes al aire.
      </Typography>
      
      {/* Second Paragraph */}
      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', mb: 4, fontSize: { xs: '16px', md: '18px' } }}
      >
        Estas son acciones convenientes y lucrativas, que contribuyen solidariamente con la compensación hídrica y descontaminación de los cuerpos de agua naturales, así como también con una moderación del aire, que finalmente resultan en un mejoramiento ostensible en la salud y calidad de vida de la población beneficiada, asociado a la obtención de un rentable y satisfactorio negocio para nuestros inversionistas.
      </Typography>

      {/* Modalities Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Proponemos concretas modalidades de productivos acuerdos comerciales para proyectos de:
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: { xs: '16px', md: '18px' } }}>
          Producción, Purificación, Regeneración y Reciclaje de Aguas. <br />
          Generación y Explotación de Energías Alternativas Limpias.
        </Typography>
      </Box>

      {/* Contratos de Ejecución de Obra Civil Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Contratos de Ejecución de Obra Civil para:
        </Typography>
        <List>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              1. Construcción, Puesta en Operación Llave en Mano y Mantenimiento.
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              2. Construcción, Operación, Transferencia y Mantenimiento.
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              3. Subcontratación para Construcción y Puesta en Operación Llave en Mano:
              Contratistas de Obras Públicas. Contratistas de Obras Privadas.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* Contratos de Concesión del Servicio */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Contratos de Concesión del Servicio
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: { xs: '16px', md: '18px' } }}>
          Inversión, Construcción y Administración; Pago por tarifa y modalidad convenida.
        </Typography>
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
        <br /><br />
        Ambientales. <br />
        Comerciales. <br />
        Construcción. <br />
        Servicios Públicos. <br />
        Industriales. <br />
        Recreacionales. <br />
        Turísticas. <br />
        Otras.
        <br /><br />
        Desde la planeación del proyecto, hasta la administración, incluyendo el diseño, la fabricación de equipos y componentes, construcción de obras civiles, logística, instalación y montaje de equipos, puesta en operación, mantenimiento, la concesión del servicio y otros más, con cuidadosa atención personalizada, controlamos la calidad en cada una de las etapas del proceso contractual y su gestión.
      </Typography>
    </Container>
  );
}
