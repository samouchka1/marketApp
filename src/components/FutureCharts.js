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
import { ES, NQ, GC, SI, CL, ZC, ZW } from '../data/Charts';

const futures = [ES, NQ, GC, SI, CL, ZC, ZW ];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const FutureCharts = () => {

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
                {futures.map((future) => (
                    <Grid item xs={8} md={3} key={future}>
                        <Paper elevation="4" sx={{textAlign: 'center'}}>
                            <Line options={options} data={future}/>
                            <Typography sx={chartTitleStyles} noWrap>
                                {future.datasets[0].label}    
                            </Typography>
                            <Button onClick={()=> {
                                handleClickOpen(); 
                                selectValue(`${future.datasets[0].label}`)
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
                        {value === 'ES - S&P500 Futures' ? 
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={ES} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'NQ - Nasdaq Futures' ? 
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={NQ} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'GC - Gold Futures' ?
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={GC} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box> 
                        
                        : undefined}
                        {value === 'SI - Silver Futures' ?
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={SI} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'CL - Crude Oil Futures' ?
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={CL} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'ZC - Corn Futures' ?
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={ZC} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                    <Button sx={{margin: '.5rem 0'}}>more info</Button>
                                </Box>
                            </Box>
                        : undefined}
                        {value === 'ZW - Wheat Futures' ?
                            <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={ZW} />
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

export default FutureCharts;