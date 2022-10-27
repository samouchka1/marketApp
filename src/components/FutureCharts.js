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
                            <Typography sx={chartTitleStyles} noWrap>ES - S&P500 Futures</Typography>
                        </Paper>
                    </Grid>
                {/* ))} */}

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={NQ} /> 
                            <Typography sx={chartTitleStyles} noWrap>NQ - Nasdaq Futures</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={GC}/>
                            <Typography sx={chartTitleStyles} noWrap>GC - Gold Futures</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={SI}/>
                            <Typography sx={chartTitleStyles} noWrap>SI - Silver Futures</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={CL}/>
                            <Typography sx={chartTitleStyles} noWrap>CL - Crude Oil Futures</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={ZC}/>
                            <Typography sx={chartTitleStyles} noWrap>ZC - Corn Futures</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={ZW}/>
                            <Typography sx={chartTitleStyles} noWrap>ZW - Wheat Futures</Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;