import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProyectosEspecialesDialog from './Dialogs/SpecialProjects/SpecialProjects';
import AguaPotableDialog from './Dialogs/PotableWater/PotableWater';
import AguaResidualDialog from './Dialogs/ResidualWater/ResidualWater';
import SolarDialog from './Dialogs/Solar/Solar';
import { useTheme } from '@mui/material/styles';
import WaterIcon from '@mui/icons-material/Water';
import RecyclingIcon from '@mui/icons-material/Recycling';
import EolicDialog from './Dialogs/Eolic/Eolic';
import EgealDialog from './Dialogs/Egeal/Egeal';
import MicroHidraulicDialog from './Dialogs/MicroHidraulic/MicroHidraulic';
import GreenHydrogeneDialog from './Dialogs/GreenHydrogene/GreenHydrogene';
import HibridDialog from './Dialogs/Hibrid/Hibrid';

export default function ProductsSection() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(null);

  const handleOpenDialog = (dialogType) => {
    setOpenDialog(dialogType);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  return (
    <Container sx={{ py: 4 }}>
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
        PRODUCTOS
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'justify',
          mb: 2,
          fontSize: { xs: '16px', md: '18px' },
          '& strong': { color: theme.palette.primary.main }
        }}
      >
        En la ejecución de proyectos ambientales y sostenibles, involucrando la integración de la producción,
        purificación, regeneración y el reciclaje de aguas, con la generación y explotación de energías
        alternativas limpias; así como la recuperación de subproductos, y reciclaje de residuos, contribuimos
        sólidamente con nuestros clientes, en optimizar su inversión a largo plazo con:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 3 }}>
      {/* First Box */}
        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textAlign: 'center'
            }}
          >
            ESCENARIOS DE PRODUCCIÓN, PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS
          </Typography>
          <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
            Construcción - Integración - Instalación - Montaje - Operación - Mantenimiento
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              mt: 1,
              textAlign: 'justify'
            }}
          >
            Sabemos cómo hacer posible el ciclo completo del agua, desde la potabilización para consumo humano,
            transitando por su purificación, luego su utilización, hasta la regeneración para su reciclaje.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mt: 3,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                AGUA POTABLE
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<WaterIcon />}
                onClick={() => handleOpenDialog('AGUA_POTABLE')}
              >
                VÓRTICE
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                AGUA RESIDUAL
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<RecyclingIcon />}
                onClick={() => handleOpenDialog('AGUA_RESIDUAL')}
              >
                AWA
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                PROYECTOS ESPECIALES
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog('PROYECTOS_ESPECIALES')}
              >
                Ver Todos
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Second Box */}
        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span>ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN DE ENERGÍAS ALTERNATIVAS LIMPIAS EGEAL</span>
            <IconButton
              color="primary"
              onClick={() => handleOpenDialog('EGEAL')}
              sx={{ p: 0, ml: 1 }}
            >
              <SearchIcon />
            </IconButton>
          </Typography>
          <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
            Construcción de Obras Civiles - Logística - Dotación - Integración - Instalación y Montaje -
            Operación - Mantenimiento
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              mt: 1,
              textAlign: 'justify'
            }}
          >
            Sacamos sorprendentes ganancias de la fuerte incidencia del sol, el viento, y de la abundancia de
            caudales y cuerpos de agua sobre el territorio colombiano.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'justify'
            }}
          >
            Gestionamos la producción de exclusivos componentes, dispositivos, equipos, maquinaria y materiales
            de alta tecnología en una alianza estratégica con nuestros socios especialistas desarrolladores
            y fabricantes, líderes en innovación, que nos permiten integrar un valor agregado en nuestros productos
            y servicios.
          </Typography>

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

      <AguaPotableDialog open={openDialog === 'AGUA_POTABLE'} onClose={handleCloseDialog} />
      <AguaResidualDialog open={openDialog === 'AGUA_RESIDUAL'} onClose={handleCloseDialog} />
      <ProyectosEspecialesDialog open={openDialog === 'PROYECTOS_ESPECIALES'} onClose={handleCloseDialog} />
      <EgealDialog open={openDialog === 'EGEAL'} onClose={handleCloseDialog} />
      <SolarDialog open={openDialog === 'SOLAR'} onClose={handleCloseDialog} />
      <EolicDialog open={openDialog === 'EOLICA'} onClose={handleCloseDialog} />
      <MicroHidraulicDialog open={openDialog === 'MICRO_HIDRAULICA'} onClose={handleCloseDialog} />
      <GreenHydrogeneDialog open={openDialog === 'HIDROGENO'} onClose={handleCloseDialog} />
      <HibridDialog open={openDialog === 'HIBRIDA'} onClose={handleCloseDialog} />
    </Container>
  );
}
