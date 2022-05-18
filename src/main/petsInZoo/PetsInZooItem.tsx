import {Button} from "../commonElements";
import * as React from "react";
interface ISliderItem {
    animal:string,
    index: number,
    imgSrc: string,
    text: string,
    width: number,
    margin: number,
    handleChangePage:(page:string)=>void,
    screenWidth:number
}

export const PetsInZooSliderItem = (props: ISliderItem) => {
    const changePage=()=>{
        props.handleChangePage(props.animal)
    }
    return (
        <figure className={'petsInZoo-figcaption'}
                data-index={props.index}
                style={{width: props.width + "px", margin: props.margin + "px",
                height:props.screenWidth<=320?props.width*4+'px':'unset'}}>
            <div className="petsInZoo-itemContent">
                <img src={props.imgSrc} style={{width: props.width + "px",
                    height:props.screenWidth<=320?props.width*4+'px':'unset'}}/>
                <figcaption className="">
                <span>
                    {props.text}
                </span>
                    <div className={'petsInZoo-sliderButtons'}>
                        <Button cls={'petsInZoo-itemButton-watch'}
                                text="Watch online"
                                link="#"
                                svgPath="url(./public/assets/svg/sliderPlayButton.svg)"
                                clickHandler={changePage}/>
                        <Button
                            cls="petsInZoo-itemButton-donate"
                            text="Donate"
                            link="#"
                            svgPath="url(./public/assets/svg/sliderDonateButton.svg)"
                        />
                    </div>
                </figcaption>
            </div>
        </figure>

    )
}