import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import Card from "../components/Card";

    function MainPage(){
        return(
            <>
                <h1>Mãe, tô na main</h1>
                <Card route="page1" />
           </>
        )
    }
export default MainPage;