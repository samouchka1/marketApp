import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper,
} from '@mui/material';
import { Fade } from "react-awesome-reveal";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { options, gridStyle, chartTitleStyles } from '../data/Charts';
import { SPX, NDX, DJX, RUT, VIX, DJU, DJT } from '../data/Charts';

const indexes = [ SPX, NDX, DJX, RUT, VIX, DJU, DJT ];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const IndexCharts = () => {

  return (
    <Box>
        <Fade cascade damping={0.15}>
            <Grid container sx={gridStyle}>
                {indexes.map((index) => (
                    <Grid item xs={8} md={3} key={index}>
                        <Paper elevation="4">
                            <Line options={options} data={index}/>
                            <Typography sx={chartTitleStyles} noWrap>
                                {index.datasets[0].label}    
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;