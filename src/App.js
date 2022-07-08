import React from 'react';
import Header from "./components/Header"
import Card from "./components/Card"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


// import Page1 from './Page1';

import MainRoutes from './routes';
import New from './views/NewPage';




function App() {
  return (
    
    <BrowserRouter>

    <div className="App">
      <MainRoutes/>
      {/* <Header/> */}
      <div className='d-flex justify-content-center '>
        <div>
          {/* <h1 className='mt-4'>Recipe of the day</h1> */}
        </div>
      </div>

    </div>

    </BrowserRouter>
  );
}

export default App;
