import React, {useState} from "react";
import './animalPageAside.css'
import {animalDataType} from "../animalPage";

type asideAnimal = {
    animal: string,
    link: string,
    imgSrc: string
}
export const AnimalPageAside = (props: { animals: asideAnimal[], currentActiveAnimal: string }) => {
    const elementWidth = 80
    const elementHeight = 80
    const elementPadding = 20
    const [currentPosition, setCurrentPosition] = useState(0)
    const different = (elementHeight + elementPadding) * props.animals.length - (elementHeight + elementPadding) * 3
    console.log(different)
    const [displayArrows, setDisplayArrows] = useState(false)

    const scroll = (direction: string) => {
        const item = elementWidth + elementPadding
        console.log(direction)
        if (direction === 'up') {
            if (Math.abs(currentPosition + item) < different && (currentPosition + item) <= 0) {
                setCurrentPosition(currentPosition + item)
            }
        } else {
            if (Math.abs(currentPosition - item * 2) <= different) {
                setCurrentPosition(currentPosition - item)
            }
        }

    }
    return (
        <aside className="animalPage_aside"
               onMouseEnter={() => setDisplayArrows(true)}
               onMouseLeave={() => setDisplayArrows(false)}
        >
            <div className="animalPage_slideUp"
                 onClick={() => scroll('up')}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                    />
                }
            </div>
            <div className="animalPage_asideContainer"
                 style={{height: (elementHeight + elementPadding) * 3 + 10}}>
                <div className='animalPage_asideSliderWrapper'
                     style={{
                         transform: `translateY(${currentPosition}px)`,
                         height: (elementHeight + elementPadding * 2) * props.animals.length
                     }}>

                    {props.animals.map((el, ind) => {
                        return <div className="asideSliderItem" key={ind} style={{
                            width: elementWidth + 'px',
                            height: elementHeight + 'px',
                            margin: elementPadding + 'px'
                        }}>
                            <div>

                            </div>
                            <img alt={el.animal} src={el.imgSrc}/>

                        </div>
                    })}
                </div>
            </div>
            <div className="animalPage_slideDown"
                 onClick={() => scroll('down')}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                    />
                }
            </div>
        </aside>
    )
}