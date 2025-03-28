import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';

export default function HibridDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth maxWidth="md">
      <DialogTitle>
        ESTACIONES HÍBRIDAS EGEAL<br />
        Solar - Eólica - Micro Hidráulica - Hidrógeno Verde H2V
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          Las energías lumínicas del sol, eólica del viento, hidráulica del agua, así como también el rompimiento de la molécula del agua, una Estación de Generación Híbridas EGEAL, con sus energías, fotovoltaica, de rotación y de electrólisis del agua las transforma en energía eléctrica limpia, renovable y ecológica.
        </Typography>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            hibridhibridhibrid
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Integran de forma práctica, y flexible, varias tecnologías de generación de energías alternativas limpias. Se pueden combinar con diferentes configuraciones de modelos de diseño. Así, cualquier variable es posible, generando kW de una forma constante, con o sin el mismo almacenamiento de energía en baterías para un suministro de energía verde más confiable y sostenible.
        </Typography>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            hibridhibrid
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Las Estaciones Híbridas Solar - Eólicas EGEAL pueden hacer pleno uso y combinación de las energías producidas por el viento y la luz solar; ambos juegan un papel al mismo tiempo realizando la función de generación de energía para todo tipo de clima. De noche y en días lluviosos se genera energía eólica, mientras que en días soleados se genera energía solar; también muchas veces ambas a la vez. Estas también pueden ser integradas y respaldadas con una generación micro hidráulica.
        </Typography>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            hibridhibrid
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          El ciclo se inicia en una Estación Híbrida - H2V EGEAL, de una forma mixta, alternativa y coordinada, desde una fuente alternativa limpia, ya sea Solar, Eólica o Micro Hidráulica, que genera la energía eléctrica para cubrir una demanda. Entonces, cuando la generación supera la demanda de electricidad, los excedentes producidos cargan la batería de respaldo del sistema generador primario o iniciador, proporcionando autonomía de suministro de electricidad por largos periodos sin tener que recargar. Mientras tanto, esos kW excedentes, que no son almacenados ni consumidos, se utilizan para producir y almacenar hidrógeno verde. En cualquier caso, de que no haya sol, viento o cese de suministro eléctrico de origen hidráulico, el H2V almacenado puede generar electricidad con la ayuda de baterías hidroeléctricas cargadas de este combustible, sin fuente de alimentación externa a esta unidad múltiple de generación de energía verde.
        </Typography>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            hibridhibrid
          </Typography>
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
