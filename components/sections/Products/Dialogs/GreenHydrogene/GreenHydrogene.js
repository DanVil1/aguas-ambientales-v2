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

export default function GreenHydrogeneDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth maxWidth="md">
      <DialogTitle>
        HIDRÓGENO VERDE H2V<br />
        Producción, Almacenamiento y Suministro
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          El Hidrógeno Verde H2V es una fuente de energía poderosa y 100% limpia, se halla en grandes volúmenes disponible en la naturaleza, y con una excelente favorabilidad de condiciones técnicas de agua, sol y viento para producirlo masivamente en el territorio colombiano. Solo hay que separarlo del oxígeno, a hacerlo y utilizarlo, no se libera ningún tipo de emisión contaminante a la atmósfera; razón que lo hace actualmente y en el futuro cercano, el combustible verde con mejor desempeño y sostenibilidad, que lo hacen necesariamente en un elemento esencial, para las acciones que se deben ejecutar para una pronta y ecológica transición energética.
        </Typography>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h6">Proceso Tecnológico</Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Desde una fuente alternativa limpia sea solar, eólica o micro hidráulica se genera la energía eléctrica necesaria para realizar procesos de electrólisis del agua, en los cuales divide la molécula H2O, y se separan los (2) elementos gaseosos que la componen, hidrógeno (H2) y oxígeno (O). Al efectuar esta separación, se producen importantes volúmenes de gases H2V y oxígeno; El gas H2V comprimido se almacena en un tanque de almacenamiento, que de acuerdo con el requerimiento, por medio de un compresor - surtidor, recarga con combustible H2V las baterías hidroeléctricas de vehículos de transporte y carga, máquinas, y equipos. Igualmente por medio de baterías con celdas cargadas de H2V, de forma autónoma se genera energía eléctrica a escala industrial.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Combina la electrólisis del agua y las celdas de combustible en un sistema de energía autosuficiente para la producción, almacenamiento, generación y suministro de energía eléctrica.
        </Typography>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h6">
            SOLUCIONES PARA LA PRODUCCIÓN, ALMACENAMIENTO Y SUMINISTRO DE H2V PARA ACTIVIDADES COMERCIALES, INDUSTRIALES Y DOMÉSTICAS
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Las actividades productivas que padecen por los problemas relacionados con los altos costos, y la baja confiabilidad en el suministro de energía que pagan y reciben, lo que les condiciona negativamente su buen desempeño y crecimiento. Al invertir en la implementación de infraestructuras de producción, almacenamiento y suministro con H2V, una fuente de energía inagotable, se le abren grandes posibilidades de progreso a quienes las implementen y a la región donde se efectúa este tipo de inversión, debido a que con su potencial energético, se crean aplicaciones por medio de las cuales, se originan y derivan nuevas inversiones económicas; a partir de las cuales nacen nuevas actividades con diversas fuentes de emprendimiento, de trabajo y vigorosa dinámica. Son un efecto multiplicador de progreso y desarrollo.
        </Typography>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body1">
            A nivel mundial muchos sectores productivos están implementando, las numerosas soluciones y aplicaciones industriales del Hidrógeno Verde H2V, que como fuente de combustible, están desplazando en el consumo a la gasolina, el diésel, gas natural CO4 y otros combustibles con origen fósil:
          </Typography>
        </Box>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          <Typography component="li" variant="body1">Producción de H2V, oxígeno y otros gases - Metanol CH3OH.</Typography>
          <Typography component="li" variant="body1">Generación, almacenamiento y suministro de energías alternativas limpias - autosuficiencia energética.</Typography>
          <Typography component="li" variant="body1">Baterías.</Typography>
          <Typography component="li" variant="body1">Calefacción.</Typography>
          <Typography component="li" variant="body1">Cosméticos.</Typography>
          <Typography component="li" variant="body1">Electrónica.</Typography>
          <Typography component="li" variant="body1">Estaciones de servicio.</Typography>
          <Typography component="li" variant="body1">Generación de energía eléctrica y redes de transmisión.</Typography>
          <Typography component="li" variant="body1">Llantas.</Typography>
          <Typography component="li" variant="body1">Metalmecánica.</Typography>
          <Typography component="li" variant="body1">Refinamiento del petróleo.</Typography>
          <Typography component="li" variant="body1">Química.</Typography>
          <Typography component="li" variant="body1">Servicios públicos - Municipios - Comunidades - Poblaciones y lugares aislados y/o alejados.</Typography>
          <Typography component="li" variant="body1">Siderurgia.</Typography>
          <Typography component="li" variant="body1">Telecomunicaciones.</Typography>
          <Typography component="li" variant="body1">Transporte de carga y pasajeros.</Typography>
          <Typography component="li" variant="body1">Vidrio y otros muchos más.</Typography>
          <Typography component="li" variant="body1">Así como apoyando y fortaleciendo los sistemas de transmisión en red.</Typography>
        </Box>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="body1">
            Con la implementación de la producción y el consumo del Hidrógeno Verde H2V, la humanidad acoge una forma limpia y sostenible de combustión, permitiendo que la vida crezca, y prolifere…
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
