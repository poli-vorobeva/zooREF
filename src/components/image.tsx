import React from "react";

export const Image=(props:{src:string,alt:string,clickHandler?:()=>void})=>{
    return <img
        src="./public/assets/svg/arrowSlider.svg"
        alt=""
        onClick={() => props.clickHandler()}/>
}