import React from 'react';
import {
    Container,
    Paper,
    Box,
    Typography,
    Link
} from '@mui/material';
import { Slide, Fade } from "react-awesome-reveal";
import {faker} from '@faker-js/faker';
import { tickers } from '../data/Charts';

const newsItemStyles = {
    // zIndex: 0,
    padding: 2, 
    margin: '1rem 0',
    opacity: '.92',
    '&:hover': {
        opacity: '1',
        // animationName: 'zoom',
        // animationDuration: '.20s',
        // animationFillMode: 'forwards',
        // '@keyframes zoom' : {
        //     '0%': { transform: 'scale(1.0)'},
        //     '100%' : { transform: 'scale(1.006)'}
        // }
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    }
}


const News = ({BannerTop}) => {

    // let randomTickers = tickers.sort(() => Math.random() - 0.5);
    //this makes elements appear random instead of cascade; unintended effect

  return (
    <Container maxWidth={false}>

        <BannerTop />

        <Slide direction="down" delay="1" cascade triggerOnce>
            <Fade cascade duration={500} triggerOnce>
                {/* {randomTickers.map((news) => ( */}
                {tickers.map((news) => (
                    <Paper key={news} sx={newsItemStyles}>
                        <Link href="#news" sx={{textDecoration: 'none', color: '#3e3e3e'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                {/* <Typography variant="subtitle2">
                                  {faker.date.recent()}
                                </Typography> */}
                                <Typography sx={{fontSize: {md: '19px', xs: '17px'}, m: '1rem', fontWeight: '600'}}>
                                    {faker.lorem.lines(1)}
                                </Typography>
                                <Typography sx={{color: 'success.main',}}>
                                    ${[news]}
                                </Typography>
                            </Box>
                            <Typography variant="body2">
                                {faker.lorem.paragraph(3)}
                            </Typography>
                        </Link>
                    </Paper>
                ))}
            </Fade>
        </Slide>
        {/* <Typography>{faker.date.recent()}</Typography> */}
    </Container>
  )
}

export default News