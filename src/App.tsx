import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Typewriter from 'typewriter-effect';
// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbaar from './component/Navbaar';
import Navbaarsmall from './component/Navbaarsmall';


function App() {
  const [isSmallerThan800] = useMediaQuery('(min-width: 800px)')
  return (

    <div className="App" id="home">
 
 {
 isSmallerThan800? <Navbaar/>:<Navbaarsmall/>
 }
  <Home/>

    </div>
  );
}

export default App;
