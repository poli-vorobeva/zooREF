import {sliderItemsArray} from "../../commonElements";
import {SliderItem} from "./SliderItem";
import * as React from "react";

type propsStartSliderWrapper={
    translate:number,
    width:number,
    changePage:(page:string)=>void,
    activeSlide: number,
    click:(index:number)=>void
}


export const StartSliderWrapper=(props:propsStartSliderWrapper)=>{
    return(
        <div className="start-page-slider-slides" style={
            {
                transform: `translate(${props.translate * (props.width)}px)`,
                width: props.width * 8 + 50 + 'px'
            }}>
            {
                sliderItemsArray.map((it, ind) => {
                    return <SliderItem index={ind} imgSrc={it.src} text={it.text}
                                       onDrawPage={() => props.changePage(it.animal)}
                                       onClickHandler={props.click.bind(this)}
                                       isActive={ind === props.activeSlide}
                                       width={props.width}/>
                })
            }
        </div>
    )
}