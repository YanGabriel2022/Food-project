import React from 'react';
import Header from "../components/Header"
import Card from "../components/Card"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./NewPage.css"
import image from "../assets/image.png"
import Button from '../components/Button.jsx';
import Ingredients from '../components/Ingredients';
import {ingredients} from "../mock/ingredients"
import imageHeader from "../assets/img-lasanha-large.png"
function New() {
  return (
   <>
<div className='New'>
  <div className='corpo d-flex justify-content-center'>
    <div className='descript-body d-flex justify-content-center' >
      <div className='image-window' style={{
        backgroundImage: `url( ${imageHeader})`
      }}></div>
    </div>    
  </div>
<<<<<<< HEAD
  <div className='safdna'>
  <div className="descrip-image ">
=======
  <div className="row justify-content-md-center">
>>>>>>> 5a4bd3385359915ab817a4e0c597bb0f0f866c52
          
      <div className="content-descrip mt-2">
       <div className='.justify-content-md-center'>
          <span className='title'>Pasta</span>
          <h5 className="title-image">Lasanha Bolonhesa</h5>
          <div className=' d-flex justify-content-evenly'>
           <div><h4 className="p-description">Calories:584</h4></div>
           <div><h4 className="p-description">Carbs:84g</h4></div>
           <div><h4 className="p-description">Fat:20g</h4></div>
           <div><h4 className="p-description">Protein:19g</h4></div>
            </div>
       </div>
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
