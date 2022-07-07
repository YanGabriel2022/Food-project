import React from 'react';
import Header from "../components/Header"
import Card from "../components/Card"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./NewPage.css"
import image from "../assets/image.png"

function New() {
  return (
   <>
   <div className='New'>
    <div className='corpo d-flex justify-content-center'>
      <div className='descript-body'>
      <div className='content-image'>
        <img src={image}></img>
      </div>

      </div>

    </div>

   </div>
   </>
 

  );
}

export default New;
