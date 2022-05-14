import React, {useState} from "react";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";
import {AnimalPage} from "./animalPage/animalPage";
import {Content} from "./Content";

export const App = () => {

    return (
        <div className="container" data-testid={'app'}>
         <Content/>
        </div>
    )
}
