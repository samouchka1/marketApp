import React from 'react'
import { 
    Container,
    Box
} from '@mui/material';
import { Slide } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <Container maxWidth={false}>
        <Slide direction="down">
            <Box
                component="img"
                alt="Welcome Image"
                src={process.env.PUBLIC_URL + '/images/bullmarket.jpg'}
                height="100vh"
                width="auto"
            />
        </Slide>
    </Container>
  )
}

export default Welcome