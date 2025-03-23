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

export default function AguaPotableDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        ESCENARIOS HIDRO AUTOMÁTICOS DE PURIFICACIÓN Y REGENERACIÓN DE AGUA POTABLE - VÓRTICE
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" gutterBottom>
          `A veces menos es más`
        </Typography>
        <Typography variant="body1" gutterBottom>
          Superficiales, Subterráneas, y de Lluvia
        </Typography>
        <Typography variant="body1" gutterBottom>
          Haciendo uso de nuestro conocimiento y experiencia en el desarrollo de aplicaciones
          de conceptos no convencionales y disruptivos, hemos desarrollado, puesto en operación
          y evaluado ampliamente en Colombia el Escenario Hidroautomático de Purificación, Regeneración
          y Reciclaje de Agua Potable - VÓRTICE, sometiéndose a rigurosas pruebas y altas exigencias,
          demostrando, con sus eficaces procesos de purificación y regeneración del agua, contundentes
          resultados en la reducción de los parámetros de norma, que regulan la calidad del agua para
          consumo humano; concluyendo así, que opera continuamente, respondiendo a altas exigencias con
          resultados óptimos.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Facultades
        </Typography>
        <Typography variant="body2" gutterBottom>
          Simplifica en forma eficaz la potabilización del agua en pocos procesos.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Soluciona problemas indeseables de olor, color y sabor para aguas subterráneas y superficiales.
        </Typography>
        {/* Add additional content as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}