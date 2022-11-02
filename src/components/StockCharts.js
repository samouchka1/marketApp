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
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
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
                {stocks.map((stock) => (

                    <Grid item xs={8} md={3} key={stock}>
                        <Paper elevation="4" sx={{textAlign: 'center'}}>
                            <Line options={options} data={stock} />
                            <Typography sx={chartTitleStyles} noWrap>
                                {stock.datasets[0].label}    
                            </Typography>
                            <Button onClick={()=> {
                                handleClickOpen(); 
                                selectValue(`${stock.datasets[0].label}`)
                            }}>
                                <OpenInFullIcon fontSize="small" sx={{margin: '.35rem 0'}} />
                            </Button>
                        </Paper>
                    </Grid>
                ))}

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Box>
                    {value === 'AAPL' ? 
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={AAPL} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'AMZN' ? 
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={AMZN} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'JNJ' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={JNJ} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box> 
                     
                     : undefined}
                    {value === 'T' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={T} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'TSLA' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={TSLA} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'MSFT' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={MSFT} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'ZM' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={ZM} />
                            <Box sx={{padding: '.5rem'}}>
                                <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(6)}</Typography>
                                <Button sx={{margin: '.5rem 0'}}>more info</Button>
                            </Box>
                        </Box>
                    : undefined}
                    {value === 'SHOP' ?
                        <Box sx={{height: '80vh', width: 'auto', textAlign: 'center'}}>
                            <Line options={options} data={SHOP} />
                            <Box sx={{padding: '.5rem'}}>
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

export default StockCharts;