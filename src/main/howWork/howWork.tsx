import * as React from "react";
import './howWork.css'
import {OurMission} from "./ourMission";
import {ButtonPrimary, SliderRange} from "../commonElements";
import {HowWorkSlider} from "./HowWorkSlider";
import {useState} from "react";
import {HowWrkText} from "./HowWorkText";

export const HowWork = (props:{ drawPage:(page:string)=>void}) => {
    const [currentRangeValue, setCurrentRangeValue] = useState('01')
    const rangeProps = {
        containerClass: 'range__container how-work__range-container',
        numberClass: 'slider__number',
        rangeWrapperClass: 'range__dark range__wrapper',
        startNumber: currentRangeValue,
        totalNumber: '08'
    }
    const buttonProps = {
        buttonClass: 'start-page__button btnPrimary',
        imgSrc: './public/assets/svg/playCircle.svg',
        text: 'Watch online',
        href: '#',
        clickHandler:(page:string)=>props.drawPage(page)
    }
    const onClicked = (indx: number) => {
        setCurrentRangeValue(`0${indx}`)
    }
    return (
        <article className="how-work">
            <div className="how-work__wrapper">
                <div className="how-work__content">
                    <HowWrkText/>
                    <HowWorkSlider click={(indx) => onClicked(indx)}/>
                    <SliderRange {...rangeProps}/>
                    <ButtonPrimary {...buttonProps}/>
                </div>
            </div>
            <OurMission/>
        </article>
    )
}
