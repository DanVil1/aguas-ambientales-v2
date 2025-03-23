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

export default function SolarDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>ESTACIONES DE GENERACIÓN DE ENERGÍA SOLAR EGEAL</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          Con energía lumínica del sol, una Estación de Generación Solar EGEAL transforma energía
          fotovoltaica en energía eléctrica.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Están configuradas con una nueva generación de módulos solares, diseñados y manufacturados,
          empleando la tecnología del dopaje con Galio; con celdas de alta eficiencia, parámetros
          eléctricos y tamaño de módulo optimizados, soldadura inteligente y rendimiento excepcional,
          mono y/o bifacial, según las condiciones del lugar de instalación.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Gracias a su fuerte resistencia a vientos huracanados, frío, calor, humedad y corrosión salina,
          pueden trabajar de forma confiable en condiciones ambientales extremas, configuradas para
          soportar zonas climáticas difíciles. Entregan la mejor manera de generar energía solar
          fotovoltaica de forma eficiente y expandible.
        </Typography>
        {/* Grid for 6 images */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            mt: 2,
          }}
        >
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 1"
            sx={{ width: '100%' }}
          />
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 2"
            sx={{ width: '100%' }}
          />
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 3"
            sx={{ width: '100%' }}
          />
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 4"
            sx={{ width: '100%' }}
          />
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 5"
            sx={{ width: '100%' }}
          />
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Solar Image 6"
            sx={{ width: '100%' }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}