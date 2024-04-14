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
            }}>Dive deeper into your music taste with Dancer's Lament! This companion app for Spotify unlocks insights on your listening habits. See your top artists, songs, and genres across any timeframe, and discover hidden trends in your music library.
            </Typography>
            <Box>
                {/* <Button variant =""></Button> */}
            </Box>
        </Container>
    );
}