import './App.css';


import React, {useEffect} from "react";
import { init } from "./socketApi.js";
import {ThemeProvider} from './context/ThemeContext';
import Container from './components/Container';


function App() {

  useEffect(() => {
      init();
  }, [])

  return (
    <div className="App">
      <ThemeProvider>
        <Container/>
      </ThemeProvider>
    </div>
  );
}

export default App;
