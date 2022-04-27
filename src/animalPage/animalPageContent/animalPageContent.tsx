import * as React from "react";
import {AnimalPageDescription} from "./animalPageDescription/AnimalPageDescription";
import './animalPageContent.css'
import {AnimalPageVideo} from "./animalPageVideo/animalPageVideo";
import {animalDataType} from "../animalPage";
export const AnimalPageContent=(props:{animal:animalDataType, currentActiveAnimal:string})=>{
    return(
        <div className="animalPage_content">
            <AnimalPageVideo activeAnimal={props.currentActiveAnimal}/>
            <AnimalPageDescription animal={props.animal}/>
        </div>
    )
}