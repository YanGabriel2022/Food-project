import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";



    function MainPage(){
        return(
            <>
              <Header/>
                <Card route="page1" />
           </>
        )
    }
export default MainPage;