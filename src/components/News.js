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

const News = () => {
  return (
    <Container maxWidth={false}>

        <Slide direction="down" cascade>
            <Fade cascade duration={500} triggerOnce>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((news) => (
                    <Paper key={news} sx={{p: 2, m: '1rem 0'}}>
                        <Link href="#news" sx={{textDecoration: 'none', color: '#3e3e3e'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant="subtitle2">
                                    {/* {faker.date.past(1)} */}
                                </Typography>
                                <Typography sx={{fontSize: {md: '19px', xs: '17px'}, m: '1rem', fontWeight: '600'}}>
                                    {faker.lorem.lines(1)}
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