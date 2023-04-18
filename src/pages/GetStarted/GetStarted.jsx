import * as React from 'react';
import Stack from '@mui/material/Stack';
import styles from './GetStarted.module.css'
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Logo from '/src/components/Logo/Logo';

export default function GetStarted() {
  return (
    <Box sx={{ 
      backgroundColor: '#000000', 
      width: '100%', 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0'
      }}>
      <CssBaseline />
      <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap"spacing={0}>
        <Logo/>
        <Typography variant="h3" sx={{
          textAlign: 'right',
          width: '500px',
          maxWidth: '80vw'
        }} >
        Encontre shows de seus artistas

        {/* Alterar  */}
        FAVORITOS
        </Typography>
      </Stack>
      <Button variant="contained">
        <Link to="/home">Get Started</Link>
      </Button>
    </Box>
  )
}
