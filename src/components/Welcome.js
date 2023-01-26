import React from 'react'
import { 
    Container,
    Box,
    Paper,
    Typography,
    Divider
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


ChartJS.register(
  ArcElement,
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
      backgroundColor: '#20761d',
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

const watchListPercentChangeStyles = {
  color: 'success.main'
}

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
  m: '.25rem 1rem'
}

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
            elevation="5"
          >
            <Typography variant="h3" sx={{textAlign: 'center', fontFamily: 'Teko'}}>
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
                </Paper>
              </Box>

              <Divider sx={{ display: {md: 'none', xs: 'block'}}} />
                
              <Box>
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
                  <Box sx={eventsAreaStyles}>
                    <Typography>AMZN Earnings Report</Typography>
                  </Box>
                  <Box sx={eventsAreaStyles}>
                    <Typography>FOMC Meeting</Typography>
                  </Box>
                  <Box sx={eventsAreaStyles}>
                    <Typography>CPI Report</Typography>
                  </Box>
                  <Box sx={eventsAreaStyles}>
                    <Typography>Employment Data</Typography>
                  </Box>
                </Paper>
              </Box>
              <Divider sx={{ display: {md: 'none', xs: 'block'}}} />

              <Box>
                <Typography variant="h6" sx={{textAlign: 'center', m: '.8rem 0'}}>Watch List</Typography>
                <Box 
                  sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '.25rem'
                  }}
                >
                  {['SPX', 'VIX', 'AMZN', 'GC', 'TNX'].map((item) => (
                  <Paper key={item} sx={watchListItemStyles}>
                    <Typography>{item}</Typography>
                    <Typography sx={watchListPercentChangeStyles}>
                      +{faker.datatype.float({ min: 0.5, max: 4, precision: 0.01 })}%
                    </Typography>
                  </Paper>

                  ))}
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