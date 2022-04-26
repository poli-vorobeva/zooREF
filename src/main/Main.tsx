import * as React from "react";
import {Aside} from "./startPage/Aside";
import {SliderStart} from "./startPage/SliderStart";
import {StartPage} from "./startPage/StartPage";
import {HowWork} from "./howWork/howWork";
import {PetsInZoo} from "./petsInZoo/PetsInZoo";
import {PayAndFeed} from "./payAndFeed/PayAndFeed";
import {Testimonials} from "./testimonials/Testimonials";
import {Map} from "./map/Map";

export const Main = () => {
    return (
        <main className="landing__main" data-testid={'main'}>
            <StartPage/>
            <HowWork/>
            <PetsInZoo/>
            <PayAndFeed/>
            <Testimonials/>
            <Map/>
        </main>
    )
}
