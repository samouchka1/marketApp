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
import { AAPL, AMZN, JNJ, T, TSLA, MSFT, ZM, SHOP } from '../data/Charts';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const StockCharts = () => {
  return (
    <Box>
        <Fade cascade damping={0.15}>
            <Grid container sx={gridStyle}>
                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={AAPL}/>
                            <Typography sx={center}>AAPL</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={AMZN}/>
                            <Typography sx={center}>AMZN</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={JNJ}/>
                            <Typography sx={center}>JNJ</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={T}/>
                            <Typography sx={center}>T</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={TSLA}/>
                            <Typography sx={center}>TSLA</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={MSFT}/>
                            <Typography sx={center}>MSFT</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={ZM}/>
                            <Typography sx={center}>ZM</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={SHOP}/>
                            <Typography sx={center}>SHOP</Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </Fade>
    </Box>
  )
}

export default StockCharts;