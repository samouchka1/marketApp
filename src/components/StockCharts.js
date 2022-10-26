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
                            <Typography sx={chartTitleStyles} noWrap>AAPL - Apple</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={AMZN}/>
                            <Typography sx={chartTitleStyles} noWrap>AMZN - Amazon</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={JNJ}/>
                            <Typography sx={chartTitleStyles} noWrap>JNJ - Johnson & Johnson</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={T}/>
                            <Typography sx={chartTitleStyles} noWrap>T - AT&T</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={TSLA}/>
                            <Typography sx={chartTitleStyles} noWrap>TSLA - Tesla</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={MSFT}/>
                            <Typography sx={chartTitleStyles} noWrap>MSFT - Microsoft</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={ZM}/>
                            <Typography sx={chartTitleStyles} noWrap>ZM - Zoom</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={SHOP}/>
                            <Typography sx={chartTitleStyles} noWrap>SHOP - Shopify</Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </Fade>
    </Box>
  )
}

export default StockCharts;