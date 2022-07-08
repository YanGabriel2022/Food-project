import React from "react";
import { BrowserRouter, Route, Router, Routes,useNavigate }
from "react-router-dom"
import Page1 from "./views/Page1";
import MainPage from "./views/MainPage";
import New from "./views/NewPage";
export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/New" element={<New/>}/>

            <Route path="/Page1" element={<Page1/>}>
            </Route>
        </Routes>
    )
}