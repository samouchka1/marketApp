import React from 'react'
import { 
    Container,
    Box,
    Paper,
    Typography,
    Divider,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow
} from '@mui/material';
import { Slide } from "react-awesome-reveal";
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import '../App.css';
import { redColor, greenColor } from '../App';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title, 
  Tooltip, 
  Legend,
);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'YTD Realized Gains/Losses',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const lineData = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 1500 })),
      borderColor: '#299526',
      backgroundColor: '#00000000',
      pointBorderWidth: 0,
      pointBorderColor: '#00000000',
    }
  ],
};

export const pieData = {
  labels: ['Stocks', 'Indexes', 'Futures', 'Bonds', 'Mutual Funds'],
  datasets: [
    {
      label: 'Portfolio',
      data: [10, 10, 10, 20, 20],
      backgroundColor: [
        '#22811f', '#392a86', '#969130', '#891d1d', '#2d848e'
      ],
      borderColor: [
        '#fff', '#fff', '#fff', '#fff', '#fff',
      ],
      borderWidth: 1,
    },
  ],
};

const watchListItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  p: '.55rem',
  gap: '1rem',
  '&:hover': {
    opacity: '1',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
  }
}

const eventsAreaStyles = {
  p: '.25rem 1rem',
  m: '.35rem 1rem'
}

const economicEvents = [

  {
    event: 'FOMC Meeting',
    date: '2/1/2023',
  },
  {
    event: 'AMZN Earnings',
    date: '2/3/2023',
  },
  {
    event: 'CPI Report',
    date: '2/14/2023',
  },
  {
    event: 'Employment Data',
    date: '3/2/2023',
  },
]

function createData(ticker, type, amount, date) {
  return { ticker, type, amount, date };
}

const rows = [
  createData('SPX', 'BTO', '+200', '1/20/2023'),
  createData('AMZN', 'BTO', '+100', '12/7/2022'),
  createData('GC', 'BTO', '+200', '11/20/2022'),
  createData('TSLA', 'STC', '-100', '9/14/2022'),
];

const Welcome = () => {
  return (
    <Container maxWidth={false} sx={{mb: '10%'}}>
      <Slide direction="down">
        <Box>
          <Paper
            sx={{
              margin: {md: '1rem auto', xs: '0'},
              padding: { md: '3rem', xs: '1rem'},
              background: '#ffffffb0'
            }}
            elevation={5}
          >
            <Typography variant="h3" sx={{textAlign: 'center', fontFamily: 'Teko', caretColor: 'transparent'}}>
              Dashboard
            </Typography>

            <Box 
              sx={{
                display: 'flex', 
                flexDirection: {md: 'row', xs: 'column'}, 
                justifyContent: 'space-evenly', 
                alignItems: { md: 'start', xs: 'center'},
                gap: '1rem'
              }}
            >

               {/*PIE CHART */}
              <Box sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{m: '.8rem 0'}}>Portfolio Allocation</Typography>
                <Paper 
                  sx={{
                    width: {md: '20rem', xs: '14rem'}, 
                    p: '.5rem', 
                    m:'auto',
                    '&:hover': {
                      opacity: '1',
                      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <Pie data={pieData} />
                </Paper>
              </Box>

              <Box sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{m: '.8rem 0'}}>YTD Realized Gains/Losses</Typography>
                <Paper 
                  sx={{
                    width: {md: '20rem', xs: '14rem'}, 
                    p: '.5rem', 
                    m:'auto',
                    '&:hover': {
                      opacity: '1',
                      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
                    }
                  }}
                >

                  <Line options={options} data={lineData} />

                  {/*TRADE LOG */}
                  <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', m: 'auto'}}>
                    <Typography sx={{mt:'1rem'}}>Trade Log</Typography>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow sx={{fontWeight: '600'}}>
                            <TableCell align="left">Ticker</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Date</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row}>
                              <TableCell align="left">{row.ticker}</TableCell>
                              <TableCell align="left">{row.type}</TableCell>
                              <TableCell align="right">{row.amount}</TableCell>
                              <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Paper>
              </Box>

              <Divider sx={{ display: {md: 'none', xs: 'block'}}} />
                
              <Box> {/*ECONOMIC EVENTS */}
                <Typography variant="h6" sx={{textAlign: 'center', m: '.8rem 0'}}>Upcoming Events</Typography>
                <Paper 
                  sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '.5rem',
                    '&:hover': {
                      opacity: '1',
                      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
                    }
                  }}>

                    {economicEvents.map((day)=> (
                      <Box key={day} sx={eventsAreaStyles}>
                        <Typography>{day.event}</Typography>
                        <Typography variant="subtitle" sx={{fontSize: '.9rem'}}>{day.date}</Typography>
                      </Box>
                    ))}
                  
                </Paper>
              </Box>

              <Divider sx={{ display: {md: 'none', xs: 'block'}}} />

              <Box> {/*WATCHLIST */}
                <Typography variant="h6" sx={{textAlign: 'center', m: '.8rem 0'}}>Watch List</Typography>
                <Box 
                  sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '.25rem'
                  }}
                >
                  {['SPX', 'VIX', 'AMZN', 'GC', 'CL', 'ZW', 'TNX'].map((item) => {

                    const randomColor = Math.random() < 0.5 ? greenColor : redColor;

                    return (
                      <Paper key={item} sx={watchListItemStyles}>
                        <Typography>{item}</Typography>
                        <Typography sx={{color: randomColor}}>
                            <span>{randomColor === greenColor ? `+` : `-`}</span> 
                            {faker.datatype.float({ min: 0.5, max: 4, precision: 0.01 })}%
                        </Typography>
                      </Paper>

                  )})}
                </Box>
              </Box>

            </Box>
          </Paper>
        </Box>
      </Slide> 

    </Container>
  )
}

export default Welcome