import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import AccountBalanceGraph from './AccountBalanceGraph';

function PerformanceSummary() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Performance Summary
      </Typography>

      {/* Main Content */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>Account Balance & Projection</Typography>
            <AccountBalanceGraph />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>Spending Breakdown</Typography>
            <Box mt={2}>Chart Placeholder</Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PerformanceSummary;
