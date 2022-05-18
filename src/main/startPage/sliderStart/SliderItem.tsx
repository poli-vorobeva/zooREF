import {SliderButtons} from "./SliderButtons";
import * as React from "react";

interface ISliderStartItem {
    index: number,
    imgSrc: string,
    text: string,
    onClickHandler: (index: number) => void,
    isActive: boolean,
    width: number,
    onDrawPage:()=>void
}
export const SliderItem = (props: ISliderStartItem) => {
    return (
        <figure
            key={props.index}
            className={props.isActive ? "slider-item slider-item-active" : "slider-item"}
            data-index={props.index}
            onClick={() => props.onClickHandler(props.index)}
            style={{width: props.width + 'px'}}>
            <div className="start-slider-figure-content">
                <img src={props.imgSrc}/>
                <figcaption className="slider-figcaption">
                <span>
                    {props.text}
                </span>
                    <SliderButtons onDrawPage={props.onDrawPage}/>
                </figcaption>
            </div>
        </figure>

    )
}