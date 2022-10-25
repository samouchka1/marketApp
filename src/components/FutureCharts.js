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


const IndexCharts = () => {
  return (
    <Box>
        <Grid container sx={gridStyle}>
            {/* {indexes.map((chart)=> ( */}
                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={ES}/>
                </Grid>
            {/* ))} */}

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={NQ}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={GC}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={SI}/>
                </Grid>

                <Grid item xs={8} md={3} sx={{border: 'solid black 1px'}}>
                    <Line options={options} data={CL}/>
                </Grid>
        </Grid>
    </Box>
  )
}

export default IndexCharts;