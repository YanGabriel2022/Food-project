import React from 'react';
import Header from "../components/Header"
import Card from "../components/Card"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./NewPage.css"
import image from "../assets/image.png"
import Button from '../components/Button.jsx';
import Ingredients from '../components/Ingredients';
import {ingredients} from "../mock/ingredients"
function New() {
  return (
   <>
<div className='New'>
  <div className='corpo d-flex justify-content-center'>
    <div className='descript-body col-12' >
      <div className='content-image'><img src={image} className="header-image"></img></div>
    </div>    
  </div>
  <div className="descrip-image">
          
      <div className="content-descrip mt-2">

          <span className='title'>Pasta</span>
          <h5 className="title-image">Lasanha Bolonhesa</h5>
          <div className=' d-flex justify-content-around'>
           <div><span className="p-description">Calories:584</span></div>
           <div><span className="p-description">Carbs:84g</span></div>
           <div><span className="p-description">Fat:20g</span></div>
           <div><span className="p-description">Protein:19g</span></div>
            </div>
      </div>
        </div>
        <div className='ingredient'>
        </div>
        <Ingredients ingredients={ingredients}/>
</div>
   </>
 

  );
}

export default New;
