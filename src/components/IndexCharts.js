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
import { options, gridStyle, chartTitleStyles } from '../data/Charts';
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
                            <Typography sx={chartTitleStyles} noWrap>SPX - S&P500 Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={NDX}/>
                            <Typography sx={chartTitleStyles} noWrap>NDX - Nasdaq Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJX}/>
                            <Typography sx={chartTitleStyles} noWrap>DJX - Dow Jones Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={RUT}/>
                            <Typography sx={chartTitleStyles} noWrap>RUT - Russell 2000 Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={VIX}/>
                            <Typography sx={chartTitleStyles} noWrap>VIX - S&P500 Volatility Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJU}/>
                            <Typography sx={chartTitleStyles} noWrap>DJU - Dow Jones Utilities Index</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Paper elevation="4">
                            <Line options={options} data={DJT}/>
                            <Typography sx={chartTitleStyles} noWrap>DJT - Dow Jones Transports Index</Typography>
                        </Paper>
                    </Grid>
                
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;