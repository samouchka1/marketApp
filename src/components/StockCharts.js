import React from 'react';
import {
    Box,
    Grid,
} from '@mui/material';
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
import { AAPL, AMZN, JNJ, T, TSLA } from '../data/Charts';

// const indexes = [ SPX, NDX, VIX ]


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        // position: 'top',
        // },
        title: {
        display: true,
        text: '',
        },
    },
};

const gridStyle = {
    justifyContent: 'center',
    gap: '1.1rem'
}


const StockCharts = () => {
  return (
    <Box>
        <Grid container sx={gridStyle}>
            {/* {indexes.map((chart)=> ( */}
                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={AAPL}/>
                </Grid>
            {/* ))} */}

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={AMZN}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={JNJ}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={T}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={TSLA}/>
                </Grid>
        </Grid>
    </Box>
  )
}

export default StockCharts;