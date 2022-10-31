import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper
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
import { ES, NQ, GC, SI, CL, ZC, ZW } from '../data/Charts';

const futures = [ES, NQ, GC, SI, CL, ZC, ZW ];

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
                {futures.map((future) => (
                    <Grid item xs={8} md={3} key={future}>
                        <Paper elevation="4">
                            <Line options={options} data={future}/>
                            <Typography sx={chartTitleStyles} noWrap>
                                {future.datasets[0].label}    
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