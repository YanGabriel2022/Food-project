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
import { Grid } from "@mui/material"



function Header() {
    return (
        <div className="Main-Header">
            <div className="">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div>
                        <Grid xs={12} sm={12} md={12} lg={4} xl={4}>
                        <header className="top1 d-flex justify-content-center"></header>
                        </Grid>
                    </div>
                </div>
                <div>
                </div>
<<<<<<< HEAD
                <Grid
                display="flex"
                justifyContent="center"
                >

                <div className="input1">
                    <div className="label-header">
                        

=======
                <div className="input1  d-flex justify-content-center">
                    <div className="label-header col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12">
>>>>>>> 5a4bd3385359915ab817a4e0c597bb0f0f866c52
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
<<<<<<< HEAD
                            />
                        


=======
                        />
>>>>>>> 5a4bd3385359915ab817a4e0c597bb0f0f866c52
                    </div>
                </div>
                            </Grid>
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