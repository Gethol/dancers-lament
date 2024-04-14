import Container from "@mui/material/Container";
import React from "react";
import { Typography, Box, Button } from "@mui/material";

export default function Hero(){
    return (
        <Container sx={{
            height: '100vh',
            background:'#ccc',
            display: 'flex',
        }}>
            <Typography variant= 'h1'>Dancers Lament</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita cum beatae assumenda corporis aliquid architecto est! Eligendi, vero! Sunt repudiandae voluptates saepe ea ut doloribus ullam nemo mollitia velit.</Typography>
            <Box>
                <Button variant></Button>
            </Box>
        </Container>
    );
}