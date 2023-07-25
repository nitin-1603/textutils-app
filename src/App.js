
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massege) => {
    setAlert({
      massege: massege,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const ChangeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('the dark mode is on');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('the dark mode is off');
    }
  }

  return (
    <>
      <Router>

        <Navbar mode={mode} ChangeMode={ChangeMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} ></Route>

          <Route path="/" element={<TextForm mode={mode} />}> </Route>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
// install npm package for router (npm install react-router-dom)