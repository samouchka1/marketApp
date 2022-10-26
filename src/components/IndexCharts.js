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
import { options, gridStyle, center } from '../data/Charts';
import { SPX, NDX, DJX, RUT, VIX, DJU, DJT } from '../data/Charts';

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
                            <Line options={options} data={SPX}/>
                            <Typography sx={center}>SPX</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={NDX}/>
                            <Typography sx={center}>NDX</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJX}/>
                            <Typography sx={center}>DJX</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={RUT}/>
                            <Typography sx={center}>RUT</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={VIX}/>
                            <Typography sx={center}>VIX</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJU}/>
                            <Typography sx={center}>DJU</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJT}/>
                            <Typography sx={center}>DJT</Typography>
                        </Paper>
                    </Grid>
                
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;