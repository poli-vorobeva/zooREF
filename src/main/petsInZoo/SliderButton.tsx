import * as React from "react";

export const SliderButton=(props:{class:string,direction:string,buttonClick:(dir:string)=>void})=>{
    return  <div className={props.class}>
        <button onClick={() => props.buttonClick(props.direction)}>
            <img src="./public/assets/svg/arrowSlider.svg" alt=""/>
        </button>
    </div>
}