import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper,
    Button,
    Dialog
} from '@mui/material';
import { Fade } from "react-awesome-reveal";
import {faker} from '@faker-js/faker';
import DehazeIcon from '@mui/icons-material/Dehaze';
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

const indexes = [ SPX, NDX, DJX, RUT, VIX, DJU, DJT ];

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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const [ value, setValue ] = useState('');

    const selectValue = (str) => {
        setValue(str);
    }

  return (
    <Box>
        <Fade cascade damping={0.15}>
            <Grid container sx={gridStyle}>
                {indexes.map((index) => (
                    <Grid item xs={8} md={3} key={index} sx={{maxWidth: '90%', flexGrow: 1}}>
                        <Paper elevation="4" sx={{textAlign: 'center'}}>
                            <Line options={options} data={index}/>
                            <Typography sx={chartTitleStyles} noWrap>
                                {index.datasets[0].label}    
                            </Typography>
                            <Button onClick={()=> {
                                handleClickOpen(); 
                                selectValue(`${index.datasets[0].label}`) //chart js access label styles
                            }}>
                                <DehazeIcon fontSize="small" sx={{margin: '.35rem 0'}} />
                            </Button>
                        </Paper>
                    </Grid>
                ))}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    sx={{marginTop: '2.5rem'}}
                >
                    <Box>
                        {value === 'SPX - S&P500 Index' ? 
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={SPX} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'NDX - Nasdaq Index' ? 
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={NDX} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'DJX - Dow Jones Index' ?
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={DJX} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box> 
                        
                        : undefined}
                        {value === 'RUT - Russell 2000 Index' ?
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={RUT} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'VIX - S&P500 Volatility Index' ?
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={VIX} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'DJU - Dow Jones Utilities Index' ?
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={DJU} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'DJT - Dow Jones Transports Index' ?
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={DJT} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                    </Box>
                </Dialog>
            </Grid>
        </Fade>
    </Box>
  )
}

export default IndexCharts;