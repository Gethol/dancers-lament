import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import ButtonComponent from './components/ButtonComponent';
import Theme from './theme/Theme';
import { Centered } from './components/Centered';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <Theme>
{/*       
    <Centered>
      <ButtonComponent value = {"Hello World"}/>
      <Form/>
    </Centered> 
     */}
    <Container>
      <Navbar/>
      <Hero />
      <About/>
      <Footer/>

    </Container>

    </Theme>
  
  );
}

export default App;
