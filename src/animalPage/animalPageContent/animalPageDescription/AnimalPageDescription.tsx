import * as React from "react";
import './animalPageDescription.css'
import {animalDataType} from "../../animalPage";

export const AnimalPageDescription=(props:{animal:animalDataType})=>{

    return(
        <div className="animalPage_description">
            <div className="description__item">
                <h6>Population</h6>
                <p>{props.animal.population}</p>
            </div>
            <div className="description__item">
                <h6>Habitat</h6>
                <p>{props.animal.habitat}</p>
            </div>
            <div className="description__item">
                <h6>Diet</h6>
                <p>{props.animal.diet}</p>
            </div>
            <button className="btnPrimary video-content__button">Feed</button>
        </div>
    )
}