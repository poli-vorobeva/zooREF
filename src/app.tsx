import React from "react";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";

export const App = () => {


    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )

}
