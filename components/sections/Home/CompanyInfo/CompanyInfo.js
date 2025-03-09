// components/sections/Home/CompanyInfo.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '@mui/material/styles';

const CompanyInfo = () => {
  const theme = useTheme();

  const boldText = "AGUAS AMBIENTALES S.A.S.";
  const restText =
    " una compañía de construcción y desarrollo, que evolucionamos cimentados en conceptos tecnológicos no convencionales y disruptivos. Innovamos, implementando eficaces y avanzadas soluciones ambientales, técnica y financieramente rentables para producir, purificar, regenerar y reciclar agua. Hacemos un diagnóstico y formulamos la receta para conseguirlo. Trabajamos de la mano con la integración de las energías que nos surte la naturaleza, para hacerlo de prácticas y diversas maneras altamente competentes. Nuestro principal objetivo es “Saber Cómo” poder lograr “limpiar el agua” en una fuerte sinergia con la generación y explotación de energías alternativas limpias.";

  const bulletPoints = [
    "Construimos, integramos e implementamos productos y servicios con resultados técnicos y monetarios tangibles.",
    "Diseñamos y desarrollamos soluciones útiles y eficaces innovando para un amplio rango de requerimientos.",
    "También originales configuraciones para proyectar y encontrar, integrar, construir e implementar nuevas aplicaciones de nuestra plataforma tecnológica, son de nuestro dominio intelectual y comercial.",
    "Nuestras soluciones parten de la simplicidad funcional, garantizando a nuestros clientes un resultado excepcional con alta perdurabilidad en el tiempo.",
    "Nos adaptamos rápidamente a las necesidades del mercado, debido a una armónica relación entre nuestros conocimientos académicos y una amplia experiencia práctica exitosa.",
    "Cooperamos y nos apoyamos con destacadas entidades y fundaciones de investigación y desarrollo tecnológico, con las cuales nos asesoramos y aconsejamos, intercambiando información relevante, para actualizaciones y nuevos desarrollos, que nos permiten continuar siendo competitivos ante futuros desafíos.",
    "En sólidas alianzas con un selecto grupo de socios innovadores y reconocidos fabricantes de ingeniosos y factibles componentes, equipos y materiales “que nosotros no hacemos”, pero que gestionamos su fabricación, para brindar calidad funcional óptima, con avanzada y exclusiva tecnología a nuestro portafolio productos y servicios.",
  ];

  return (
    <Box sx={{ pl: { xs: '16px', md: '80px' }, pr: { xs: '16px', md: '80px' }, pt: '20px' }}>
      {/* Company description with bolded company name */}
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.black.main, // default text color: black
          fontSize: '18px',
          lineHeight: 1.6,
          mb: 3,
          textAlign: 'justify'
        }}
      >
        <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
          S
        </Box>
        omos{' '}
        <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
          {boldText}
        </Box>
        {restText}
      </Typography>
      {/* Bullet list with check icons and bold first letter */}
      <List sx={{ pl: 2 }}>
        {bulletPoints.map((point, index) => {
          const firstLetter = point.charAt(0);
          const restOfText = point.slice(1);
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  mr: 1,
                  color: theme.palette.primary.main,
                  alignSelf: 'baseline',
                  mt: '4px', // adjust this value as needed
                }}
              >
                <CheckIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: theme.palette.black.main, fontSize: '18px', fontWeight: 500 }}>
                    <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                    {firstLetter}
                    </Box>
                    {restOfText}
                  </Typography>
                }
                disableTypography
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default CompanyInfo;
