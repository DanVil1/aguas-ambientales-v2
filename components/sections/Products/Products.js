import { Container, Typography, Box } from '@mui/material';

export default function ProductsSection() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        PRODUCTOS
      </Typography>
      <Typography variant="body1" gutterBottom>
        En la ejecución de proyectos ambientales y sostenibles, involucrando la integración de la producción, purificación, regeneración y el reciclaje de aguas, con la generación y explotación de energías alternativas limpias; así como la recuperación de subproductos, y reciclaje de residuos, contribuimos sólidamente con nuestros clientes, en optimizar su inversión a largo plazo con:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, mt: 3 }}>
        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography variant="h5" gutterBottom>
            ESCENARIOS DE PRODUCCIÓN, PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS
          </Typography>
          <Typography variant="body1">
            Construcción - Integración - Instalación - Montaje - Operación - Mantenimiento
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
            Sabemos cómo hacer posible el ciclo completo del agua, desde la potabilización para consumo humano, transitando por su purificación, luego su utilización, hasta la regeneración para su reciclaje.
          </Typography>
          <Typography variant="body1">
            AGUA POTABLE | AGUA RESIDUAL | PROYECTOS ESPECIALES
          </Typography>
        </Box>

        <Box sx={{ flex: 1, border: '1px solid', borderColor: 'grey.300', p: 2 }}>
          <Typography variant="h5" gutterBottom>
            ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN DE ENERGÍAS ALTERNATIVAS LIMPIAS EGEAL
          </Typography>
          <Typography variant="body1">
            Construcción de Obras Civiles - Logística - Dotación - Integración - Instalación y Montaje - Operación - Mantenimiento
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
            Sacamos sorprendentes ganancias de la fuerte incidencia del sol, el viento, y de la abundancia de caudales y cuerpos de agua sobre el territorio colombiano.
          </Typography>
          <Typography variant="body1">
            Gestionamos la producción de exclusivos componentes, dispositivos, equipos, maquinaria y materiales de alta tecnología en una alianza estratégica con nuestros socios especialistas desarrolladores y fabricantes, líderes en innovación, que nos permiten integrar un valor agregado en nuestros productos y servicios.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
