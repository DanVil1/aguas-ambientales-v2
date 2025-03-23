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

export default function AguaResidualDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        ESCENARIOS DE PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS RESIDUALES - AWA
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" gutterBottom>"Lo hacemos diferente"</Typography>
        <Typography variant="body1" gutterBottom>
          Domésticas, Comerciales, Grises, Industriales, Lixiviados y Municipales
        </Typography>
        <Typography variant="body1" gutterBottom>
          Con un especial interés en desarrollar aplicaciones innovadoras con nuestras soluciones no
          convencionales y disruptivas, hemos implementado el Escenario de Purificación, Regeneración y
          Reciclaje de Aguas Residuales - Advanced Wastewater Applications - AWA, desarrollando y
          evolucionando un modelo flexible y robusto para escenarios de purificación, regeneración y
          reciclaje de aguas residuales.
        </Typography>
        {/* More detailed technical and financial content can be added here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}