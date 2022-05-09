import React, {useState} from "react";
import './animalPageAside.css'
import {animalDataType} from "../animalPage";
type asideAnimal={
    animal:string,
    link:string,
    imgSrc:string
}
export const AnimalPageAside = (props:{animals:asideAnimal[],currentActiveAnimal:string}) => {
    const elementWidth = 80
    const elementHeight = 80
    const elementPadding=20
    const [currentPosition,setCurrentPosition]=useState(0)
    const different=(elementHeight+elementPadding)*props.animals.length-(elementHeight+elementPadding)*3
    console.log(different)
const [displayArrows,setDisplayArrows]=useState(false)

    const scroll = (direction: string) => {
        const item = elementWidth+elementPadding
        console.log(direction)
        if (direction === 'up') {
            if (Math.abs(currentPosition + item) < different && (currentPosition + item) <= 0) {
                setCurrentPosition(currentPosition + item)
            }
        } else {
            if (Math.abs(currentPosition - item*2) <= different) {
                setCurrentPosition(currentPosition - item)
            }
        }

    }
    return (
        <aside className="animalPage_aside"
               onMouseEnter={()=>setDisplayArrows(true)}
               onMouseLeave={()=>setDisplayArrows(false)}
        >
            <div className="animalPage_slideUp"
            onClick={()=>scroll('up')}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                    />
                }
            </div>
            <div className="animalPage_asideContainer"
                 style={{height:(elementHeight+elementPadding)*3+10}}>
                <div className='animalPage_asideSliderWrapper'
                     style={{
                         transform:`translateY(${currentPosition}px)`,
                         height:(elementHeight+elementPadding*2)*props.animals.length}}>

                    {props.animals.map((el, ind) => {
                        return <div key={ind} style={{width:elementWidth+'px',height:elementHeight+'px',margin:elementPadding+'px'}}>
                            <img alt={el.animal} src={el.imgSrc} style={{width:elementWidth+'px'}}/>
                        </div>
                    })}
                </div>
            </div>
            <div className="animalPage_slideDown"
            onClick={()=>scroll('down')}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                    />
                }
            </div>
            {/*<div className="video-page__slider">*/}
            {/*    <div className="slider__arrow video-slider__left-arrow">*/}
            {/*        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path*/}
            {/*                d="M6.6663 16.1706L20.0167 29.5207C20.3255 29.8298 20.7376 30 21.1772 30C21.6167 30 22.0289 29.8298 22.3376 29.5207L23.3208 28.5378C23.9605 27.8973 23.9605 26.8564 23.3208 26.2169L12.1102 15.0062L23.3332 3.78314C23.642 3.47412 23.8125 3.06217 23.8125 2.6229C23.8125 2.18315 23.642 1.7712 23.3332 1.46194L22.3501 0.479263C22.0411 0.17024 21.6291 0 21.1896 0C20.7501 0 20.3379 0.17024 20.0291 0.479263L6.6663 13.8416C6.35679 14.1516 6.18679 14.5655 6.18777 15.0055C6.18679 15.4472 6.35679 15.8608 6.6663 16.1706Z"*/}
            {/*                fill="#828282"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    <div className="video-slider__images">*/}
            {/*        <div className="slider__item-border map-slider__item-default-active">*/}
            {/*            <div className="map-slider__item-content">*/}
            {/*                <div className="map-slider__item">*/}
            {/*                    <img className="img_active" title='Aligator' src="../../assets/map-slider/7.png">*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="">*/}
            {/*            <div className="map-slider__item-content">*/}
            {/*                <div className="map-slider__item">*/}
            {/*                    <a href="./gorilla.html"><img title='Girilla'*/}
            {/*                                                  src="../../assets/map-slider/2.png"></a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="">*/}
            {/*            <div className="map-slider__item-content">*/}
            {/*                <div className="map-slider__item">*/}
            {/*                    <a href="./panda.html"><img title='Panda' src="../../assets/map-slider/1.png"></a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="">*/}
            {/*            <div className="map-slider__item-content">*/}
            {/*                <div className="map-slider__item">*/}
            {/*                    <a href="./eagle.html"><img title='Eagle' src="../../assets/map-slider/4.png"></a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="slider__arrow video-slider__right-arrow">*/}
            {/*        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path*/}
            {/*                d="M23.3337 13.8294L9.98332 0.479264C9.67454 0.170243 9.26235 0 8.82284 0C8.38334 0 7.97114 0.170243 7.66237 0.479264L6.6792 1.46218C6.03945 2.10267 6.03945 3.14363 6.6792 3.78314L17.8898 14.9938L6.66676 26.2169C6.35799 26.5259 6.1875 26.9378 6.1875 27.3771C6.1875 27.8168 6.35799 28.2288 6.66676 28.5381L7.64993 29.5207C7.95895 29.8298 8.3709 30 8.81041 30C9.24991 30 9.66211 29.8298 9.97088 29.5207L23.3337 16.1584C23.6432 15.8484 23.8132 15.4345 23.8122 14.9945C23.8132 14.5528 23.6432 14.1392 23.3337 13.8294Z"*/}
            {/*                fill="#333333"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </aside>
    )
}