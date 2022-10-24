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
import { SPX, NDX, VIX } from '../data/Charts';

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
        legend: {
        position: 'top',
        display: false
        },
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


const GridCharts = () => {
  return (
    <Box>
        <Grid container sx={gridStyle}>
            {/* {indexes.map((chart)=> ( */}
                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={SPX}/>
                </Grid>
            {/* ))} */}

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={NDX}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={VIX}/>
                </Grid>
        </Grid>
    </Box>
  )
}

export default GridCharts