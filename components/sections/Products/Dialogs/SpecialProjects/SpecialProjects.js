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

export default function ProyectosEspecialesDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>PROYECTOS ESPECIALES</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          Contamos con ingeniosas aplicaciones, con las cuales llegamos a resultados concretos.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reestructuración y Optimización de Sistemas de Tratamiento de Aguas existentes Potable y
          Residuales.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reciclaje Total sin Efluentes.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reactores de Filtración ASF para Aguas Residuales Domésticas ARD e Industriales ARI.
        </Typography>
        {/* Include further bullet points or sections as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}