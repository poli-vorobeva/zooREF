import React from "react";

export const Button=(props:{class:string,clickHandler:()=>void})=>{
    return <button
        className="animalPage_videoSliderItemButton"
        onClick={() => {
           props.clickHandler()
        }}></button>
}