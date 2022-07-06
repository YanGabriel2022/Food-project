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
        <div className="descrip">
          <footer className="footer-descript">
            <div className="mt-2">

            <span>Pasta</span>
            <h5 className="name">Lasanha Bolonhesa</h5>
            <p className="p-description">Calories:584   Carbs:84g   Fat:20g   Protein:19g</p>
            </div>
          </footer>
        </div>


      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={ratotouile} />
       
          <img className="icon" src={fav}></img>
 
        </div>
        <div className="descrip">
          <footer className="footer-descript">
            <div className="mt-2">
            <span>Vegan</span>
            <h5 className="name">Ratatoille</h5>
            <p className="p-description">Calories:584   Carbs:84g   Fat:20g   Protein:19g</p>
            </div>
          </footer>
        </div>
      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={carne} />
          <img className="icon" src={fav}></img>
        </div>
        <div className="descrip">
          <footer className="footer-descript">
            <div className="mt-2">
            <span>Meat</span>
            <h5 className="name">Carne alemã na panela de pressão</h5>
            <p className="p-description">Calories:584   Carbs:84g   Fat:20g   Protein:19g</p>
            </div>
          </footer>
        </div>
      </div>

      <div className="card-image">
        <div className="image1 mt-5">
          <img className="image" src={image} />
          <img className="icon" src={fav}></img>
        </div>
        <div className="descrip">
          <footer className="footer-descript">
            <div className="mt-2">
            <span>Pasta</span>
            <h5 className="name">Lasanha Bolonhesa</h5>
            <p className="p-description">Calories:584   Carbs:84g   Fat:20g   Protein:19g</p>
            </div>
          </footer>
        </div>
      </div>
      </div>
    </div>
    </>


  )
}
export default Card;