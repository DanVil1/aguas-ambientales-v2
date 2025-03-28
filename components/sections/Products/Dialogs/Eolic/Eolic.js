import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

export default function EolicDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth maxWidth="md">
      <DialogTitle>
        ESTACIONES DE GENERACIÓN DE ENERGÍA EÓLICA EGEAL
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          Con energía eólica del viento una Estación de Generación de energía Eólica EGEAL, transforma energía de rotación en energía eléctrica.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los vientos son una fuente abundante e inagotable, lo que hace posible que, en muchas zonas geográficas de Colombia, se pueda contar con esta fuente original que produce la energía. La energía eólica, está disponible siempre dependiendo de las condiciones atmosféricas. Son una solución económica para reducir costos por concepto de consumo de energía, son ecológicas, y no contaminan el aire porque no producen emisiones gaseosas de efecto invernadero.
        </Typography>

        {/* First set of 3 Images */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                width: '30%',
                height: 150,
                border: '1px dashed grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="caption">Image Placeholder</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="body1" gutterBottom>
          Con alternativas para escoger en capacidades de generación y tipos de diseño de eje de rotación horizontal o vertical. Fabricadas con tecnología de punta, con estrictos controles de calidad en sus procesos y con los mejores componentes y materiales para asegurar una larga vida útil. Son silenciosas, aprovechan en forma óptima y constante las corrientes de los vientos para generar electricidad de forma práctica y confiable. Una velocidad de viento baja para su arranque, y sus modelos aerodinámicos, modernos que producen y acumulan mucha más energía, que otros sistemas parecidos, así como una fácil y rápida instalación y puesta en operación, son algunas de sus novedosas características.
        </Typography>

        {/* Second set of 3 Images */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                width: '30%',
                height: 150,
                border: '1px dashed grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="caption">Image Placeholder</Typography>
            </Box>
          ))}
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
