import "./Card.css"
import React from "react"
import image from "../assets/lasanha.png"
import ratotouile from "../assets/ratatouile.png"
import carne from "../assets/carne.png"
import { BrowserRouter, Link, Route, Router, Routes, useNavigate }
  from "react-router-dom"
import Page1 from "../views/Page1"
import fav from "../assets/favorite.svg"
function Card({route}) {



  // const navegate = useNavigate();
  // const handleClick = () =>{
  //   navegate('/Card', {replace:true})
  // }
  return (
    <>

    <div className="Card">
      <div className="card-image">
        <div className="cards">
        <div className="image1 mt-5">
          <Link to={"/New"}>
          <img className="image" src={image} />
          </Link>
          <div>
          </div>
          <img className="icon" src={fav}></img>
        </div>
<<<<<<< HEAD
        <div className="descrip">
=======
        <div className="descrip col-6">
>>>>>>> 5a4bd3385359915ab817a4e0c597bb0f0f866c52
            <div className="mt-2">
            <span className="title-card">Pasta</span>
            <h5 className="name">Lasanha Bolonhesa</h5>
            <div className=' d-flex justify-content-around'>
           <div><span className="recip-description">Calories:584</span></div>
           <div><span className="recip-description">Carbs:84g</span></div>
           <div><span className="recip-description">Fat:20g</span></div>
           <div><span className="recip-description">Protein:19g</span></div>
            </div>
            </div>
        </div>


      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={ratotouile} />
       
          <img className="icon" src={fav}></img>
 
        </div>
        <div className="descrip">
            <div className="mt-2">
            <span className="title-card">Vegan</span>
            <h5 className="name">Ratatoille</h5>
            <div className=' d-flex justify-content-around'>
           <div><span className="recip-description">Calories:584</span></div>
           <div><span className="recip-description">Carbs:84g</span></div>
           <div><span className="recip-description">Fat:20g</span></div>
           <div><span className="recip-description">Protein:19g</span></div>
            </div>
            </div>
        </div>
      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={carne} />
          <img className="icon" src={fav}></img>
        </div>
        <div className="descrip">
            <div className="mt-2">
            <span className="title-card">Meat</span>
            <h5 className="name">Carne alemã na panela de pressão</h5>
            <div className=' d-flex justify-content-around'>
           <div><span className="recip-description">Calories:584</span></div>
           <div><span className="recip-description">Carbs:84g</span></div>
           <div><span className="recip-description">Fat:20g</span></div>
           <div><span className="recip-description">Protein:19g</span></div>
            </div>
            </div>
        </div>
      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={image} />
          <img className="icon" src={fav}></img>
        </div>
        <div className="descrip">
            <div className="mt-2">
            <span className="title-card">Pasta</span>
            <h5 className="name">Lasanha Bolonhesa</h5>
            <div className=' d-flex justify-content-around'>
           <div><span className="recip-description">Calories:584</span></div>
           <div><span className="recip-description">Carbs:84g</span></div>
           <div><span className="recip-description">Fat:20g</span></div>
           <div><span className="recip-description">Protein:19g</span></div>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    </>


  )
}
export default Card;