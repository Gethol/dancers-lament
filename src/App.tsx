import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import ButtonComponent from './components/ButtonComponent';
import Theme from './theme/Theme';
import { Centered } from './components/Centered';
import Form from './components/Form';
import Navbar from './components/Navbar';


function App() {
  return (
    <Theme>
{/*       
    <Centered>
      <ButtonComponent value = {"Hello World"}/>
      <Form/>
    </Centered> 
     */}
        
    <Navbar/>
    </Theme>
  
  );
}

export default App;
