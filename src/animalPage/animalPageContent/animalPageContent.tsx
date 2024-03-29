import * as React from "react";
import {AnimalPageDescription} from "./animalPageDescription/AnimalPageDescription";
import './animalPageContent.css'
import {AnimalPageVideo} from "./animalPageVideo/animalPageVideo";
import {animalDataType} from "../animalPage";
export const AnimalPageContent=(props:{animal:animalDataType, currentActiveAnimal:string,screenWidth:number})=>{
    return(
        <div className="animalPage_content">
            <AnimalPageVideo activeAnimal={props.currentActiveAnimal} screenWidth={props.screenWidth}/>
            <AnimalPageDescription animal={props.animal}/>
        </div>
    )
}