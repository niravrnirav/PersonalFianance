import React from 'react';
import { CssBaseline, Grid, Paper, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import PerformanceSummary from './components/PerformanceSummary';

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2}>
          <Box sx={{ backgroundColor: '#f5f5f5', height: '100vh', paddingTop: 2 }}>
            <Sidebar />
          </Box>
        </Grid>
        
        {/* Main Content */}
        <Grid item xs={10}>
          <Box sx={{ padding: 4 }}>
            <PerformanceSummary />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
