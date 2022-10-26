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
                sx={{
                  height: {
                    md: '100vh',
                    xs: 'auto'
                  },
                  width: {
                    md: 'auto',
                    xs: '100vw'
                  },
                  margin: {
                    md: '0 auto',
                    xs: '0 0 0 -2.2rem'
                  }
                }}
            />
        </Slide>
    </Container>
  )
}

export default Welcome