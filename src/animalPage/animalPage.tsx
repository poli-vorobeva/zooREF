import React from "react";
import './animalPage.css'
import {AnimalPageAside} from "./animalPageAside/animalPageAside";
import {AnimalPageContent} from "./animalPageContent/animalPageContent";
import {animalsData} from "../animalsData";

export type animalDataType={
    animal: string,
    link: string,
    imgSrc: string,
    population:string,
    habitat:string,
    diet:string}

export const AnimalPage = (props?: { animal:string ,drawPage:(page:string)=>void,screenWidth:number}) => {
    const currentAnimal=props.animal||'panda'
    return (
        <main className="animalPage_wrapper">
             <AnimalPageAside animals={animalsData.map(el=>{
                 return{
                     animal:el.animal,
                     link:el.link,
                     imgSrc:el.imgSrc
                 }
             })} currentActiveAnimal={currentAnimal} drawPage={props.drawPage}/>
            <AnimalPageContent animal={animalsData.find(el=>el.animal===currentAnimal)}
                               currentActiveAnimal={currentAnimal}
                               screenWidth={props.screenWidth}/>
        </main>
    )
}