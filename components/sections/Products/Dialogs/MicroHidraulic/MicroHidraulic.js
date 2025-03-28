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

export default function MicroHidraulicDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper" fullWidth maxWidth="md">
      <DialogTitle>
        ESTACIONES MICRO HIDROELÉCTRICAS EGEAL
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          La energía hidráulica de un flujo de agua de una Estación de Generación Micro Hidráulica EGEAL, con su energía de rotación, la transforma en energía eléctrica.
        </Typography>

        <Typography variant="h6" gutterBottom>
          INNOVACIÓN AMBIENTAL
        </Typography>
        <Typography variant="body1" gutterBottom>
          Con tecnología innovadora brindamos un enfoque novedoso en la Micro Generación de Energía Hidráulica, abordando todos los problemas asociados con la generación de energía eléctrica clásica:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          <Typography component="li" variant="body1">No causan daños ecológicos.</Typography>
          <Typography component="li" variant="body1">No implican grandes obras de infraestructura.</Typography>
          <Typography component="li" variant="body1">Sin grandes inversiones iniciales.</Typography>
          <Typography component="li" variant="body1">Sin costosas líneas de transmisión.</Typography>
          <Typography component="li" variant="body1">Generación a la mano del consumidor.</Typography>
          <Typography component="li" variant="body1">Sin emisiones de CO2.</Typography>
          <Typography component="li" variant="body1">Son las más eficientes como carga con base estable o calidad de potencia.</Typography>
        </Box>

        <Typography variant="body1" gutterBottom>
          Con una nueva generación de tecnologías de generación hidráulica, estamos cambiando la forma en que se desarrolla la energía hidroeléctrica en el país. Nuestra novedosa variedad de Estaciones Micro Hidroeléctricas EGEAL no requieren de grandes y costosas infraestructuras, ni embalsar agua. Se pueden instalar en paralelo o con derivación en cualquier río, curso o canal de agua, solo requieren de pendientes mínimas para cada rango de requerimiento. Como resultado ofrecen una generación hidroeléctrica de bajo mantenimiento que produce electricidad limpia de manera eficiente las 24 horas del día y bastante amigable con la naturaleza.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Son integradas con componentes de inteligente manufactura y diseño compacto, equipadas con un generador con características robustas para un escaso requerimiento de mantenimiento; sellado con múltiples capas de protección al contacto con aguas dulces, pero también altamente turbias o salobres y/o con arena; integradas y dotadas para un uso pesado y continuo en entornos difíciles con turbinas de eje vertical.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pueden generar electricidad individualmente o en redes múltiples y de diferentes características técnicas para mayores demandas de energía de acuerdo con las condiciones técnicas de la región donde serán instaladas. Han sido diseñadas, configuradas y desarrolladas para una larga vida útil con escaso mantenimiento.
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="body1" align="center">
            Amigables con la naturaleza. <br/>
            Fáciles de instalar, obra civil simple y de bajo costo. <br/>
            Tablero de control y respaldo con monitoreo a control remoto en línea. <br/>
            Energía las 24 horas, los 365 días del año. <br/>
            Son las más pequeñas de su tipo por cada kW de energía generado. <br/>
            Al instalar grupos distribuidos de Estaciones Micro Hidroeléctricas EGEAL, regiones enteras pueden recibir electricidad 100% ecológica, limpia y confiable.
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          MODELOS DE ESTACIONES MICRO HIDROELÉCTRICAS EGEAL
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" align="center">
            micromicro
          </Typography>
        </Box>

        <Typography variant="body1" gutterBottom>
          Trabajamos rangos de 5 a 100 kW escalables de generación micro hidráulica, de acuerdo con condiciones y exigencias técnicas del lugar de instalación.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>De Derivación.</strong> <br/>
          Del cauce de un río se construye una derivación o variante, por donde en forma controlada el flujo de agua, luego de pasar a través de un sistema de rejas que impiden la entrada de residuos y peces, entra a través de una compuerta de admisión a un canal que tiene una pendiente que la hace bajar raudamente y entrar a una estructura en forma de espiral, la cual tiene instalada una turbina de Eje Vertical a Reacción de Caudal, que funciona por gravedad y diferentes niveles de presión de los volúmenes de agua que impactan e impulsan las aspas hidrodinámicas de flujo optimizado para hacerlo girar con sorprendente facilidad, para generar energía eléctrica. El agua evacuada es retornada al curso del río nuevamente.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cabezal Hidráulico: &lt; 1 - 10 m <br/>
          Capacidad de Generación: 15 - 70 kW <br/>
          Caudal Mínimo: 1.000 l/s
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>De Canal Abierto con Turbina de Doble Eje Vertical a Reacción de Caudal</strong> <br/>
          Sin grandes obras complicadas y costosas, mediante la construcción de una Estación Micro Hidroeléctricas EGEAL de Ultra Baja Altura (UBA) en un canal existente, aprovechando el uso efectivo de los flujos de agua de baja altura generamos electricidad. Utilizando la energía del agua que fluye a un nivel mínimo, de forma práctica, fácil y rápida son instalados medios mecánicos para aplicar energía de cabeza, al subir el nivel y obtener una mayor altura de caída, y energía cinética al impactar e impulsar con el flujo de agua las aspas de flujo hidrodinámicas que hace girar los dos rotores de la Turbina de Doble Eje Vertical, que multiplican e incrementan su capacidad de generación, empleando el mismo flujo de agua de muy baja altura. De esta forma se puede generar una sorprendente producción de kW, utilizando la infraestructura existente de canales urbanos, rurales y otras estructuras existentes con un cauce de agua bajo.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cabezal Hidráulico: &lt; 3 m <br/>
          Capacidad de Generación: 0,5 – 44 kW <br/>
          Caudal Mínimo: 0,3 – 4,5 m³/s
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" align="center">
            micromicro
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
