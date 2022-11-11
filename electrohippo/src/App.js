import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box>
    {/* <h1>hello</h1> */}
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Box>
  );
}

export default App;
