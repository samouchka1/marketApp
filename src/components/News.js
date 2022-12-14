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

const News = () => {

    // let randomTickers = tickers.sort(() => Math.random() - 0.5);
    //this makes elements appear random instead of cascade; unintended effect

  return (
    <Container maxWidth={false}>

        <Slide direction="down" cascade triggerOnce>
            <Fade cascade duration={500} triggerOnce>
                {/* {randomTickers.map((news) => ( */}
                {tickers.map((news) => (
                    <Paper key={news} sx={{p: 2, m: '1rem 0'}}>
                        <Link href="#news" sx={{textDecoration: 'none', color: '#3e3e3e'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant="subtitle2">
                                    {/* {faker.date.past(1)} */}
                                </Typography>
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
    </Container>
  )
}

export default News