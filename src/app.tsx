import React from "react";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";
import {AnimalPage} from "./animalPage/animalPage";

export const App = () => {
    return (
        <div className="container" data-testid={'app'}>

            <Header/>
            <AnimalPage animal={''}/>
            {/*<Main/>*/}
            {/*<Footer/>*/}
        </div>
    )
}
