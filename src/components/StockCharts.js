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

const stocks = [AAPL, AMZN, JNJ, T, TSLA, MSFT, ZM, SHOP];

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
                {stocks.map((stock) => (

                    <Grid item xs={8} md={3} key={stock}>
                        <Paper elevation="4">
                            <Line options={options} data={stock}/>
                            <Typography sx={chartTitleStyles} noWrap>
                                {stock.datasets[0].label}    
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Fade>
    </Box>
  )
}

export default StockCharts;