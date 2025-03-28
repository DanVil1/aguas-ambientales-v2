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

export default function EgealDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth maxWidth="md">
      <DialogTitle>
        ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN<br />
        DE ENERGÍAS ALTERNATIVAS LIMPIAS<br />
        EGEAL
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="subtitle1" gutterBottom>
          `La tecnología que suministramos operando, trabaja con la naturaleza, no contra ella`
        </Typography>
        <Typography variant="body2" gutterBottom>
          Construcción de Obras Civiles - Logística - Dotación - Integración - Instalación y Montaje - Operación - Mantenimiento
        </Typography>
        <Typography variant="body1" gutterBottom>
          Abordamos con éxito los desafíos que enfrentan las energías fósiles altamente contaminantes, que impactan negativamente la naturaleza, y que por ser no renovables, en forma constante emplean cuantiosos recursos económicos para su suministro y su transporte, así también las energías convencionales de la transmisión en red, que tienen grandes requerimientos de áreas de tierra para embalsar y represar agua, al igual de grandes inversiones y distancias para su expansión. Ambos proponen bajos factores de capacidad en cubrimiento.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Nuestras Estaciones de Generación de Energías Alternativas Limpias EGEAL son una solución ambiental, técnica y financiera favorable, porque están configuradas con una nueva generación de innovadoras tecnologías e integradas con los mejores equipos, componentes y materiales en su ramo, facultándolas garantizar en el tiempo de su vida útil, la obtención de resultados eficientes en el suministro constante de energía eléctrica.
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" align="center" gutterBottom>
            energyenergyenergyenergyenergy
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Alimentan de electricidad a infraestructuras que demandan su servicio en proyectos: comerciales, construcción, industriales, de servicios públicos, turísticas y otras más del sector público y privado.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Son un valor agregado dando arranque y excelente confiabilidad de suministro a componentes, dispositivos, equipos y otros, cubriendo en forma autónoma demandas de consumo, y asegurando funcionalidad en nuestros Contratos de Ejecución de Obra, Concesión del Servicio y Joint Venture de Escenarios de Producción, Purificación, Regeneración, y Reciclaje de Aguas VÓRTICE, AWA y PROYECTOS ESPECIALES.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Demuestran alta calidad y óptima funcionalidad. Sus cualidades estratégicas más importantes son su capacidad de generar más kW de energía eléctrica fiable, inclusive en entornos difíciles, y su agilidad para devolver pronto la inversión realizada con la prestación de su servicio.
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" align="center" gutterBottom>
            energyenergy
          </Typography>
        </Box>
        <Typography variant="h6" gutterBottom>
          CUALIDADES ESTRATÉGICAS
        </Typography>
        <Typography variant="body1" gutterBottom>
          Generan energía de forma constante y confiable a través de tiempo, reduciendo costos por cada kW producido.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Generación de energía híbrida: Eólica, Solar, Micro hidráulica, Hidrógeno Verde H2V.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Energía 100% renovable.
        </Typography>
        <Typography variant="body1" gutterBottom>
          No contaminan el medio ambiente, ni impactan negativamente la naturaleza.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reducen 100% las emisiones de gases nocivos o de efecto invernadero en la atmósfera en comparación con las grandes represas hidroeléctricas y los sistemas tradicionales de generación a partir de energías fósiles que generan emisiones de CO2 y CO4.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sacan ganancias de la fuerte incidencia del sol, el viento, caídas y corrientes de agua, y del aire sobre el territorio colombiano.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Alimentan de energía eléctrica de forma eficaz e independiente a zonas alejadas y/o aisladas de las redes de transmisión.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Capacidad de devolver prontamente la inversión con la prestación de su servicio.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Rápida construcción de obras civiles complementarias y simplicidad en el montaje e instalación de equipos, componentes, dispositivos y partes.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Su vida útil es mayor de 20 años.
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom>
            EQUIPOS, COMPONENTES, DISPOSITIVOS Y MATERIALES PARA ESTACIONES SOLARES - EÓLICAS - MICRO HIDRÁULICAS - HIDRÓGENO VERDE H2V - HÍBRIDAS EGAL
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nuestros equipos, componentes, dispositivos y materiales exclusivos hacen de la dotación e integración, montaje, instalación y puesta en operación una tarea práctica, rápida y durable.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Integramos productos y servicios exclusivos que hacen del montaje, instalación y puesta en operación de una Estación de Generación Energía Alternativa EGEAL, una tarea práctica, rápida y durable.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Contamos con una completa selección de equipos, componentes, dispositivos ambientales robustos, acreditados con certificaciones de calidad en fabricación y gestión, aceptadas y homologadas internacionalmente en la fabricación de:
          </Typography>
          <Typography variant="body2" gutterBottom>- Módulos solares.</Typography>
          <Typography variant="body2" gutterBottom>- Turbinas eólicas.</Typography>
          <Typography variant="body2" gutterBottom>- Turbinas Micro Hidráulicas.</Typography>
          <Typography variant="body2" gutterBottom>- Controladores.</Typography>
          <Typography variant="body2" gutterBottom>- Cargadores.</Typography>
          <Typography variant="body2" gutterBottom>- Baterías con iones de litio (Li).</Typography>
          <Typography variant="body2" gutterBottom>- Ecualizadores de carga.</Typography>
          <Typography variant="body2" gutterBottom>- Administradores de información.</Typography>
          <Typography variant="body2" gutterBottom>- Controladores.</Typography>
          <Typography variant="body2" gutterBottom>- Optimizadores, conectores eléctricos, cables, accesorios y otros.</Typography>
          <Typography variant="body2" gutterBottom>- Anclajes, rieles, soportes, postes, estructuras de montaje y fijación.</Typography>
          <Typography variant="body2" gutterBottom>- Baterías hidroeléctricas con celdas auto recargables de combustible H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Electrolizadores.</Typography>
          <Typography variant="body2" gutterBottom>- Secadores H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Compresores H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Tanques de almacenamiento H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Surtidores H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Sistemas de gestión de energía Solar-Eólica-Micro hidráulica - H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Equipos para calefacción con H2V.</Typography>
          <Typography variant="body2" gutterBottom>- Generadores de H2V a gran escala para generación de MW.</Typography>
          <Typography variant="body2" gutterBottom>- Módulos Solares: module</Typography>
          <Typography variant="body2" gutterBottom>- Turbinas Eólicas: eoliceoliceoliceoliceolic</Typography>
          <Typography variant="body2" gutterBottom>- Invertidores interactivos: invertersinvertersinverters</Typography>
          <Typography variant="body2" gutterBottom>- Controladores y Optimizadores de carga: controlerscontrolerscontrolers</Typography>
          <Typography variant="body2" gutterBottom>- Controles Remoto: controls</Typography>
          <Typography variant="body2" gutterBottom>- Baterías de Iones de Litio: bateriesbateries</Typography>
          <Typography variant="body2" gutterBottom>- Sistemas de Montaje: systemsystemsystemsystemsystem</Typography>
          <Typography variant="body2" gutterBottom>- Soporte, Fijación y Anclajes: suppoertsuppoert</Typography>
          <Typography variant="body2" gutterBottom>
            - Postes de soporte Turbina y Cables para conexiones: eoliceolic
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
