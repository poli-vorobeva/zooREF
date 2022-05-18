import * as React from "react";
import {Aside} from "./startPage/asideStart/Aside";
import {SliderStart} from "./startPage/sliderStart/SliderStart";
import {StartPage} from "./startPage/StartPage";
import {HowWork} from "./howWork/howWork";
import {PetsInZoo} from "./petsInZoo/PetsInZoo";
import {PayAndFeed} from "./payAndFeed/PayAndFeed";
import {Testimonials} from "./testimonials/Testimonials";
import {Map} from "./map/Map";
import {Header} from "../header/Header";

export const Main = (props:{ drawPage:(page:string)=>void, screenWidth:number}) => {
    return (
        <main className="landing__main" data-testid={'main'}>
            <StartPage drawPage={props.drawPage}/>
            <HowWork drawPage={props.drawPage}/>
            <PetsInZoo drawPage={props.drawPage} screenWidth={props.screenWidth}/>
            <PayAndFeed/>
            <Testimonials screenWidth={props.screenWidth}/>
            <Map drawPage={props.drawPage}/>
        </main>
    )
}
