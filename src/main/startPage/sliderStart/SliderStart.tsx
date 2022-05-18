import * as React from "react";
import {Fragment, useEffect, useState} from "react";
import './SliderStart.css'
import {Button, ISliderStartButton, sliderItemsArray, SliderRange} from "../../commonElements";
import {SliderButtons} from "./SliderButtons";
import {SliderItem} from "./SliderItem";
import {SliderLine} from "./SliderLine";
import {StartSliderWrapper} from "./StartSliderWrapper";


export const SliderStart = (props: { drawPage: (page: string) => void }) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [translate, setTranslate] = useState(0)

    function handle(value: number) {
        click(value - 1)
    }

    const changPage = (page: string) => {
        props.drawPage(page)
    }
    const rangeProps = {
        containerClass: 'range__container start__range',
        numberClass: 'number-light',
        rangeWrapperClass: 'range__light range__wrapper',
        startNumber: activeSlide + 1 + '',
        totalNumber: '08',
        currentNumber: translate,
        handleChange: handle
    }
    const sliderContainerClass = "start-page-slider-slides"

    const itemWidth = 180

    function click(index: number) {
        setTranslate(translate + activeSlide - index)
        setActiveSlide(index)
    }

    return (
        <Fragment>
            <div className="start-page-slider">
                <div className="slider-content_hide" style={{left: itemWidth / 2 + 'px'}}>
                    <SliderLine translate={translate * itemWidth / 2}/>
                   <StartSliderWrapper
                       translate={translate}
                       width={itemWidth}
                       changePage={changPage}
                       activeSlide={activeSlide}
                       click={click}
                   />
                </div>
            </div>

            <SliderRange {...rangeProps}/>
        </Fragment>

    )
}
