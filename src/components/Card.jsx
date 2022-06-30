import "./Card.css"
import React from "react"
import image from "../assets/lasanha.png"
import ratotouile from "../assets/ratatouile.png"
import carne from "../assets/carne.png"
import { BrowserRouter, Route, Router, Routes,useNavigate }
from "react-router-dom"
import Page1 from "../Page1"
import fav from "../assets/favorite.svg"
function Card() {
  
  
  
  // const navegate = useNavigate();
  // const handleClick = () =>{
  //   navegate('/Card', {replace:true})
  // }
  return (



    <div className="Card">
      
      {/* <button onClick={handleClick}>page</button> */}
      <div className="image1 mt-5">
        <img src={image} />
     <div>
       
     </div>
       <img className="icon" src={fav}></img>

      </div>
      <div className="descrip">
        <footer>
          <span>Pasta</span>
          <h5 className="name">Lasanha Bolonhesa</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={ratotouile} />
        <img className="icon" src={fav}></img>
      </div>
      <div className="descrip">
        <footer>
          <span>Vegan</span>
          <h5 className="name">Ratatoille</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={carne} />
        <img className="icon" src={fav}></img>
      </div>
      <div className="descrip">
        <footer>
          <span>Meat</span>
          <h5 className="name">Carne alemã na panela de pressão</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={image} />
        <img className="icon" src={fav}></img>
      </div>
      <div className="descrip">
        <footer>
          <span>Pasta</span>
          <h5 className="name">Lasanha Bolonhesa</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>
        
    </div>
    

  )
}
export default Card;