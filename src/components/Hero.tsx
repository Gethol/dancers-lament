import Container from "@mui/material/Container";
import React from "react";
import { Typography, Box, Button } from "@mui/material";

export default function Hero(){
    return (
        <Container sx={{
            height: '100vh',
            // background:'#ccc',
            display: 'flex',
            flexDirection:  'column',
            justifyContent: 'center'
        }}>
            <Typography variant= 'h1' sx ={{
                textAlign: 'center'
            }}>Dancers Lament</Typography>
            <Typography variant="body1"  sx ={{
                textAlign: 'center'
            }}>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Porro expedita cum beatae assumenda corporis aliquid architecto est! Eligendi, vero! Sunt repudiandae voluptates saepe ea ut doloribus ullam nemo mollitia velit.</Typography>
            <Box>
                {/* <Button variant =""></Button> */}
            </Box>
        </Container>
    );
}