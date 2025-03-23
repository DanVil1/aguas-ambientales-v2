import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProyectosEspecialesDialog from './Dialogs/SpecialProjects/SpecialProjects';
import AguaPotableDialog from './Dialogs/PotableWater/PotableWater';
import AguaResidualDialog from './Dialogs/ResidualWater/ResidualWater';
import SolarDialog from './Dialogs/Solar/Solar';

export default function ProductsSection() {
  const [openDialog, setOpenDialog] = useState(null);

  const handleOpenDialog = (dialogType) => {
    setOpenDialog(dialogType);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        PRODUCTOS
      </Typography>
      <Typography variant="body1" gutterBottom>
        En la ejecución de proyectos ambientales y sostenibles, involucrando la integración de la producción,
        purificación, regeneración y el reciclaje de aguas, con la generación y explotación de energías
        alternativas limpias; así como la recuperación de subproductos, y reciclaje de residuos, contribuimos
        sólidamente con nuestros clientes, en optimizar su inversión a largo plazo con:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, mt: 3 }}>
        {/* First Box */}
        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography variant="h5" gutterBottom>
            ESCENARIOS DE PRODUCCIÓN, PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS
          </Typography>
          <Typography variant="body1">
            Construcción - Integración - Instalación - Montaje - Operación - Mantenimiento
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
            Sabemos cómo hacer posible el ciclo completo del agua, desde la potabilización para consumo humano,
            transitando por su purificación, luego su utilización, hasta la regeneración para su reciclaje.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mt: 3,
            }}
          >
            <Box>
              <Typography variant="body1">AGUA POTABLE</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog('AGUA_POTABLE')}
              >
                Ver Detalles
              </Button>
            </Box>
            <Box>
              <Typography variant="body1">AGUA RESIDUAL</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog('AGUA_RESIDUAL')}
              >
                Ver Detalles
              </Button>
            </Box>
            <Box>
              <Typography variant="body1">PROYECTOS ESPECIALES</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog('PROYECTOS_ESPECIALES')}
              >
                Ver Detalles
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Second Box */}
        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography variant="h5" gutterBottom>
            ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN DE ENERGÍAS ALTERNATIVAS LIMPIAS EGEAL
          </Typography>
          <Typography variant="body1">
            Construcción de Obras Civiles - Logística - Dotación - Integración - Instalación y Montaje -
            Operación - Mantenimiento
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
            Sacamos sorprendentes ganancias de la fuerte incidencia del sol, el viento, y de la abundancia de
            caudales y cuerpos de agua sobre el territorio colombiano.
          </Typography>
          <Typography variant="body1">
            Gestionamos la producción de exclusivos componentes, dispositivos, equipos, maquinaria y materiales
            de alta tecnología en una alianza estratégica con nuestros socios especialistas desarrolladores
            y fabricantes, líderes en innovación, que nos permiten integrar un valor agregado en nuestros productos
            y servicios.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>
            <Button variant="contained" onClick={() => handleOpenDialog('SOLAR')}>
              Solar
            </Button>
            <Button variant="contained" onClick={() => handleOpenDialog('EOLICA')}>
              Eolica
            </Button>
            <Button variant="contained" onClick={() => handleOpenDialog('MICRO_HIDRAULICA')}>
              Micro Hidráulica
            </Button>
            <Button variant="contained" onClick={() => handleOpenDialog('HIDROGENO')}>
              Hidrógeno verde H2v
            </Button>
            <Button variant="contained" onClick={() => handleOpenDialog('HIBRIDA')}>
              Hibrida
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Render individual dialogs based on state */}
      <AguaPotableDialog open={openDialog === 'AGUA_POTABLE'} onClose={handleCloseDialog} />
      <AguaResidualDialog open={openDialog === 'AGUA_RESIDUAL'} onClose={handleCloseDialog} />
      <ProyectosEspecialesDialog open={openDialog === 'PROYECTOS_ESPECIALES'} onClose={handleCloseDialog} />
      <SolarDialog open={openDialog === 'SOLAR'} onClose={handleCloseDialog} />
      {/* Similarly, you can create and render dialogs for EOLICA, MICRO_HIDRAULICA, HIDROGENO, and HIBRIDA */}
    </Container>
  );
}
