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
// import DehazeIcon from '@mui/icons-material/Dehaze';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CloseIcon from '@mui/icons-material/Close';
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
import { 
    options, 
    gridStyle, 
    chartTitleStyles, 
    chartButtonStyles,
    dialogButtonStyles,
    dialogInfoStyles, 
    chartItemStyles,
    FuturesData     //FUTURES DATA
} from '../data/Charts';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const FutureCharts = ({BannerTop}) => {

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

    <BannerTop />

    <Fade cascade damping={0.15}>
        <Grid container sx={gridStyle}>
            {FuturesData.map((index) => (
                <Grid item xs={8} md={3} key={index} sx={{maxWidth: '90%', flexGrow: 1}}>
                    <Paper 
                        elevation="4" 
                        sx={chartItemStyles} 
                    >
                        <Line options={options} data={index.data}/>
                        <Typography sx={chartTitleStyles} noWrap>
                            {index.name}
                        </Typography>
                        <Button 
                            onClick={()=> {
                            handleClickOpen(); 
                            selectValue(`${index.name}`) //chart js access label styles
                        }}>
                            <ShowChartIcon fontSize="small" sx={chartButtonStyles} />
                        </Button>
                    </Paper>
                </Grid>
            ))}

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{marginTop: '2.5rem'}}
            >
                <Box sx={{padding: '1rem'}}>
                    <div style={{textAlign: 'right'}}>
                        <Button
                            onClick={handleClose}
                            sx={{color: 'error.main'}}
                        >
                            <CloseIcon />
                        </Button>
                    </div>
                    {FuturesData.map((index) => (
                        value === index.name ? 
                            <Box sx={{height: 'contain', width: 'auto', textAlign: 'center'}}>
                                <Line options={options} data={index.data} />
                                <Box sx={{padding: '.5rem 1rem'}}>
                                    <Typography sx={{margin: '1rem 0'}}>{value}</Typography>
                                    <Paper sx={dialogInfoStyles}>
                                        <Typography>52-week high: {index.high}</Typography>
                                        <Typography>52-week low: {index.low}</Typography>
                                        <Typography>Implied Volatility: {index.iv}%</Typography>
                                    </Paper>
                                    <Typography sx={{textAlign: 'left'}}>{faker.lorem.paragraph(5)}</Typography>
                                    <Button sx={dialogButtonStyles}>more info</Button>
                                </Box>
                            </Box>
                        : undefined
                    ))}
                </Box>
            </Dialog>
        </Grid>
    </Fade>
    </Box>
  )
}

export default FutureCharts;