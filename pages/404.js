// pages/404.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const typeAnimation = keyframes`
  from { box-shadow: inset -3px 0px 0px #888; }
  to { box-shadow: inset -3px 0px 0px transparent; }
`;

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error 404 - Página no encontrada</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Box
        id="main"
        sx={{
          display: 'table',
          width: '100%',
          height: '50vh',
          textAlign: 'center',
          fontFamily: 'Lato, sans-serif',
          color: '#888',
          m: 0,
        }}
      >
        <Box
          className="fof"
          sx={{
            display: 'table-cell',
            verticalAlign: 'middle',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '40px', md: '50px' },
              display: 'inline-block',
              pr: '12px',
              animation: `${typeAnimation} 0.5s alternate infinite`,
              m: 0,
            }}
          >
            Error 404
          </Typography>
          <Typography variant="body1" component="p" sx={{ m: 0, mt: 2 }}>
            Página no encontrada.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Link href="/" passHref>
              <Button variant="contained" color="primary">
                Volver a inicio
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
