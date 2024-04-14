// import React from "react";
// import { Box } from "@mui/material";

// const pages = ['Home','About', 'Contact Us']

// export default function Footer(){
//     return (
//         <>
//             <Box
//                 sx= {{
                    
//                 }}
//             >
//                 <Box>

//                 </Box>

//                 <Box>

//                 </Box>
            
//             </Box>  
//         </>
//     );
// }
import React from 'react';
import { Container, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box display="flex" justifyContent="space-between" pt={4} pb={2}>
          <Typography variant="body2">
            Copyright © {new Date().getFullYear()} Dancer's Lament
          </Typography>
          <Box display="flex">
            <Link href="#" underline="none" color="text.primary" mr={2}>
              Terms
            </Link>
            <Link href="#" underline="none" color="text.primary">
              Privacy
            </Link>
          </Box>
          <Box ml={2} display="flex">
            <IconButton color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;