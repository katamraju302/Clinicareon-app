import React from 'react';
import {Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent
} from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for charts
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'User Activity',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: '#1976d2',
      tension: 0.4
    }
  ]
};

const barData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 90, 150, 80],
      backgroundColor: '#1976d2'
    }
  ]
};

const Home = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        📊 Dashboard Analytics
      </Typography>

      <Grid container spacing={4}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Activity (Line Chart)
              </Typography>
              <Line data={lineData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Performance (Bar Chart)
              </Typography>
              <Bar data={barData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
