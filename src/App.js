import React from 'react';
import Header from "./components/Header"
import Card from "./components/Card"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';


function App() {
  return (
  

    <div className="App">
      <Header />
      <div className='d-flex justify-content-center '>
        <div>
          <h1 className='mt-2'>Recipe of the day</h1>
        </div>
<Card/>
      </div>


    </div>
   
  );
}

export default App;
