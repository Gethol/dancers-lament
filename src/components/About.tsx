import Container from "@mui/material/Container";
import React from "react";
import { Typography, Box, Button, CardContent, CardActions, Card } from "@mui/material";

export default function About(){
    return (
        <Container sx={{
            height: '100vh',

            

        }}>
            <Typography variant='h4' textAlign='center'>
                You can
            </Typography>
            <Box sx ={{
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '2rem',
                pt:'2rem'
            }}     >
                <Card
                    sx={{
                        height:'50vh',
                        width: '250px'
                    }}
                >
                    <CardContent>
                        <Typography variant="h5">Track your listening habits</Typography>
                        <Typography variant="body2"> See insights on your most listened to songs, genres, artists, and albums for various timeframes</Typography>
                    </CardContent>
                </Card>
                <Card
                                    sx={{
                                        height:'50vh',
                                        width: '250px'
                                    }}
                >
                    <CardContent>
                    <Typography variant="h5">Connect with Friends</Typography>
                    <Typography variant="body2"></Typography>
                    </CardContent>
                </Card>
               
            </Box>
            
        </Container>
    );
}