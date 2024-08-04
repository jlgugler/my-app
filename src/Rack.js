import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const theme = createTheme();

function Rack() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="rack" sx={{ border: 1, borderColor: 'grey.400', m: 1 }}>
        <Box className="rack-section top" sx={{ borderBottom: 1, borderColor: 'grey.400', p: 2, textAlign: 'center' }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">U Size: {uSize}</Typography>
          <Typography variant="body2">Type: {type}</Typography>
          <Typography variant="body2">Room: {room}</Typography>
        </Box>
        <Grid container className="rack-section center" sx={{ borderTop: 1, borderBottom: 1, borderColor: 'grey.400', flexDirection: 'row' }}>
          {renderUnits()}
        </Grid>
        <Box className="rack-section" sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Rack;