// components/sections/Home/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Keyframe for slide-up animation
const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

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
  };

  return (
    <Box sx={{ width: '100vw', ml: 'calc(-50vw + 50%)', overflow: 'hidden' }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <Box
            sx={{
              width: '100%',
              height: { xs: '400px', md: '800px' },
              position: 'relative',
              backgroundImage: 'url(/images/carousel/water.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay to dim the background image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                pointerEvents: 'none',
              }}
            />
            {/* Title Box on the Left */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 16, md: 32 },
                bottom: { xs: 16, md: 32 },
                maxWidth: { xs: '80%', md: '40%' },
                textAlign: 'left',
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: '#0f3b68',
                  mb: 1,
                  animation: `${slideUp} 1s ease-out`,
                }}
              >
                ESCENARIOS DE PRODUCCIÓN, PURIFICACIÓN, REGENERACIÓN Y RECICLAJE DE AGUAS
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: '#0f3b68',
                  animation: `${slideUp} 1s ease-out`,
                }}
              >
                AWA
              </Typography>
            </Box>
          </Box>
        </div>
        {/* Slide 2 */}
        <div>
          <Box
            sx={{
              width: '100%',
              height: { xs: '400px', md: '800px' },
              position: 'relative',
              backgroundImage: 'url(/images/carousel/wind.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 16, md: 32 },
                bottom: { xs: 16, md: 32 },
                maxWidth: { xs: '80%', md: '40%' },
                textAlign: 'left',
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: '#0f3b68',
                  animation: `${slideUp} 1s ease-out`,
                }}
              >
                ESTACIONES DE GENERACIÓN Y EXPLOTACIÓN DE ENERGÍAS ALTERNATIVAS LIMPIAS EGEAL
              </Typography>
            </Box>
          </Box>
        </div>
      </Slider>
    </Box>
  );
};

export default Carousel;
