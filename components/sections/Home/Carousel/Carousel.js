// components/sections/Home/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// This component handles the title animation when its slide is active.
const SlideTitle = ({ children, isActive }) => {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    if (isActive) {
      // Delay slightly to ensure the slide is fully active.
      const timeout = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timeout);
    } else {
      // Reset the state when slide becomes inactive.
      setAnimate(false);
    }
  }, [isActive]);
  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        color: '#0f3b68',
        fontWeight: '600',
        fontSize: { xs: '28px', md: '40px' },
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {children}
    </Typography>
  );
};

// Custom Next Arrow component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#0f3b68',
        backgroundColor: 'rgba(255,255,255,0.7)',
        zIndex: 2,
        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

// Custom Prev Arrow component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#0f3b68',
        backgroundColor: 'rgba(255,255,255,0.7)',
        zIndex: 2,
        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

const Carousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    // Full-width container using a CSS trick to span the entire viewport width
    <Box sx={{ width: '100vw', ml: 'calc(-50vw + 50%)', overflow: 'hidden' }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <Box
            sx={{
              width: '100%',
              height: { xs: '652px', md: '637px' },
              position: 'relative',
            }}
          >
            {/* Background Image with 50% opacity */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/carousel/water.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'opacity(0.5)',
                zIndex: 0,
              }}
            />
            {/* Title Box in the Top Left */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 1, md: 1 },
                left: { xs: 16, md: 32 },
                p: 7,
                maxWidth: { xs: '80%', md: '60%' },
                textAlign: 'left',
                zIndex: 1,
              }}
            >
              <SlideTitle isActive={activeSlide === 0}>
                ESCENARIOS DE PRODUCCIÓN, PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS
                {/* List of services */}
                <Box sx={{ mt: 2, pl: 2 }}>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', listStyle: 'none', color: '#0f3b68' }}>
                    {["AWA", "VÓRTICE", "PROYECTOS ESPECIALES"].map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '25.6px', fontWeight: '600', lineHeight: 1.4, marginBottom: '4px' }}>
                        <ChevronRightIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Box>
                {/* "Ver más" Button */}
                <Box sx={{ display: 'flex' }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#0f3b68',
                      color: '#fff',
                      borderRadius: '9999px',
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontWeight: '600',
                      '&:hover': { backgroundColor: '#fff', color: '#0f3b68' },
                    }}
                  >
                    Ver más
                  </Button>
                </Box>
              </SlideTitle>
            </Box>
          </Box>
        </div>
        {/* Slide 2 */}
        <div>
          <Box
            sx={{
              width: '100%',
              height: { xs: '652px', md: '637px' },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/carousel/wind.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'opacity(0.5)',
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 1, md: 1 },
                left: { xs: 16, md: 32 },
                p: 7,
                maxWidth: { xs: '80%', md: '60%' },
                textAlign: 'left',
                zIndex: 1,
              }}
            >
              <SlideTitle isActive={activeSlide === 1}>
                ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN DE ENERGÍAS ALTERNATIVAS LIMPIAS EGEAL
                <Box sx={{ mt: 2, pl: 2 }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', listStyle: 'none', color: '#0f3b68' }}>
                  {["SOLAR", "EÓLICA", "MICRO HIDRÁULICA", "HIDRÓGENO VERDE H2V", "HÍBRIDA"].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '25.6px', fontWeight: '600', lineHeight: 1.4, marginBottom: '4px' }}>
                      <ChevronRightIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#0f3b68',
                      color: '#fff',
                      borderRadius: '9999px',
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontWeight: '600',
                      '&:hover': { backgroundColor: '#fff', color: '#0f3b68' },
                    }}
                  >
                    Ver más
                  </Button>
                </Box>
              </SlideTitle>
            </Box>
          </Box>
        </div>
      </Slider>
    </Box>
  );
};

export default Carousel;
