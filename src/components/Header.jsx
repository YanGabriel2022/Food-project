import "./Header.css"
import React from "react"
import Lupa from "../assets/Vector.svg"
import Vec from "../assets/Vec.svg"
import photo from "../assets/img.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from "@mui/material"
import { InputAdornment } from "@mui/material"
import { Favorite, Search } from "@mui/icons-material"
import Pasta from "../assets/lasanha-icon.png"
import Vegan from "../assets/ratatouile-icon.png"
import Meat from "../assets/carne-icon.png"



function Header() {
    return (
        <div className="Main-Header">
            <div className="">
                <div className="">
                    <div>
                        <header className="top1 d-flex justify-content-center"></header>

                    </div>
                </div>
                <div>
                </div>
                <div className="input1  d-flex justify-content-center">
                    <div className="label-header col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12">
                        <TextField
                            className="search"
                            placeholder="Find a recipe"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>

                                        <Search />

                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
            <div>
                <header className="header2">
                    <div><img className="icon-image" src={Pasta} />
                        <h5>Pasta</h5></div>
                    <div><img className="icon-image" src={Meat} />
                        <h5>Meat</h5></div>
                    <div><img className="icon-image" src={Vegan} />
                        <h5>Vegan</h5></div>
                    <div><img className="icon-image" src={Pasta} />
                        <h5>Snacks</h5></div>
                </header>
            </div>
        </div>
    )
}
export default Header;