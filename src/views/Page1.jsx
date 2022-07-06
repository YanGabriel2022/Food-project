import { Link } from "react-router-dom";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import Card from "../components/Card";
import MainRoutes from "../../src/routes";

    function Page1(){
        return(
            <>
            <Link to="/" title="Voltar">
                <h1>Voltar</h1>
            </Link>
            <Link to="lasanha" title="Lasanha">
                <h1>Lasanha</h1>
            </Link>
            
            <MainRoutes />
                <h1>Page1</h1>
                <h1>Landau aqui</h1>
                {/* <Card /> */}
           </>
        )
    }
export default Page1;