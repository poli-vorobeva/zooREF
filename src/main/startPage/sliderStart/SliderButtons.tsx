import {Button} from "../../commonElements";
import * as React from "react";

export const SliderButtons = (props:{onDrawPage:()=>void}) => {
    return (
        <div className="slider-figcaption__buttons">
            <Button
                cls="slider__button-watch"/*"slider-figcaption__button slider-figcaption__button-watch"*/
                text="Watch online"
                link="#"
                svgPath="url(./public/assets/svg/sliderPlayButton.svg)"
                clickHandler={props.onDrawPage}
            />
            <Button
                cls="slider__button-watch" /*"slider-figcaption__button slider-figcaption__button-donate"*/
                text="Donate"
                link="#"
                svgPath="url(./public/assets/svg/sliderDonateButton.svg)"
            />
        </div>
    )
}