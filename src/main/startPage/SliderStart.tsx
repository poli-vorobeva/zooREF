import * as React from "react";
import {Fragment, useEffect, useState} from "react";
import './SliderStart.css'
import {Button, ISliderStartButton, sliderItemsArray, SliderRange} from "../commonElements";


interface ISliderStartItem {
    index: number,
    imgSrc: string,
    text: string,
    onClickHandler: (index: number) => void,
    isActive: boolean,
    width: number
}


const SliderButtons = () => {
    return (
        <div className="slider-figcaption__buttons">
            <Button
                cls="slider-figcaption__button pets-in-zoo__slider-button slider-figcaption__button-watch"
                text="Watch online"
                link="#"
                svgPath="url(./public/assets/svg/sliderPlayButton.svg)"
            />
            <Button
                cls="slider-figcaption__button pets-in-zoo__slider-button slider-figcaption__button-donate"
                text="Donate"
                link="#"
                svgPath="url(./public/assets/svg/sliderDonateButton.svg)"
            />
        </div>
    )
}
const SliderItem = (props: ISliderStartItem) => {
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
                    <SliderButtons/>
                </figcaption>
            </div>
        </figure>

    )
}
const SliderLine = (props: Record<string, number>) => {
    return (
        <div className="slider__line" style={{transform: `translate(${props.translate}px)`}}>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot dot-second"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot-last"></span>
                <span className="dot dot-last"></span>
                <span className="dot"></span>
            </div>

        </div>
    )
}

export const SliderStart = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [translate, setTranslate] = useState(0)

    function handle(value: number) {
        click(value - 1)
    }

    const rangeProps = {
        containerClass: 'range__container start__range',
        numberClass: 'slider__number start__number',
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
            <div className="start-page-slider slider">
                <div className="slider-content_hide" style={{left: itemWidth / 2 + 'px'}}>
                    <SliderLine translate={translate * itemWidth / 2}/>
                    <div className="start-page-slider-slides" style={
                        {
                            transform: `translate(${translate * (itemWidth)}px)`,
                            width: itemWidth * 8 + 50 + 'px'
                        }}>
                        {
                            sliderItemsArray.map((it, ind) => {
                                return <SliderItem index={ind} imgSrc={it.src} text={it.text}
                                                   onClickHandler={click.bind(this)}
                                                   isActive={ind === activeSlide}
                                                   width={itemWidth}/>
                            })
                        }
                    </div>
                </div>
            </div>

            <SliderRange {...rangeProps}/>
        </Fragment>

    )
}
