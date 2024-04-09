import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const pages = ['Home', 'About Us', 'Contact Us'];




export default function Navbar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography>LOGO</Typography>
                <Button color="warning">LOGIN</Button>
            </Toolbar>
        </AppBar>
    );
}