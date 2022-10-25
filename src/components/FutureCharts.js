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
import { options, gridStyle, center } from '../data/Charts';
import { ES, NQ, GC, SI, CL } from '../data/Charts';

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
                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={ES}/>
                            <Typography sx={center}>ES</Typography>
                        </Paper>
                    </Grid>
                {/* ))} */}

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={NQ}/>
                            <Typography sx={center}>NQ</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={GC}/>
                            <Typography sx={center}>GC</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={SI}/>
                            <Typography sx={center}>SI</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={CL}/>
                            <Typography sx={center}>CL</Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;