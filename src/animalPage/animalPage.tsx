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

export const AnimalPage = (props?: { animal:string }) => {
    const currentAnimal=props.animal||'panda'
    return (
        <main className="animalPage_wrapper">
             <AnimalPageAside animals={animalsData.map(el=>{
                 return{
                     animal:el.animal,
                     link:el.link,
                     imgSrc:el.imgSrc
                 }
             })} currentActiveAnimal={currentAnimal}/>
            <AnimalPageContent animal={animalsData.find(el=>el.animal===currentAnimal)} currentActiveAnimal={currentAnimal}/>
        </main>
    )
}