import "./Header.css"
import React from "react"
import Lupa from "../assets/Vector.svg"
import photo from "../assets/img.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="Main-Header">
            <div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                </div><header className="top1 d-flex justify-content-center"></header><div>
                </div>
                <div className="input1  d-flex justify-content-center">
                    <label className="label-header">
                        <input className="input-header" type="text" placeholder="Find a recipe" />
                        <div>
                        </div>
                    </label>
                </div>
            </div>
            <div>
                <header className="header2">
                    <div><img src={photo} />
                        <p>Pasta</p></div>
                    <div><img src={photo} />
                        <p>Meat</p></div>
                    <div><img src={photo} />
                        <p>Vegan</p></div>
                    <div><img src={photo} />
                        <p>Snacks</p></div>
                </header>
            </div>
        </div>
    )
}
export default Header;