import * as React from "react";
import './PetsInZoo.css'
import {Button, ButtonPrimary, slideClick, sliderItemsArray, SliderRange} from "../commonElements";
import {useEffect, useState} from "react";

interface ISliderItem {
    index: number,
    imgSrc: string,
    text: string,
    width: number,
    margin: number
}

const SliderItem = (props: ISliderItem) => {
    return (
        <figure className={'petsInZoo-figcaption'}
                data-index={props.index}
                style={{width: props.width + "px", margin: props.margin + "px"}}>
            <div className="petsInZoo-itemContent">
                <img src={props.imgSrc} style={{width: props.width + "px"}}/>
                <figcaption className="">
                <span>
                    {props.text}
                </span>
                    <div className={'petsInZoo-sliderButtons'}>
                        <Button cls={'petsInZoo-itemButton-watch'}
                                text="Watch online"
                                link="#"
                                svgPath="url(./public/assets/svg/sliderPlayButton.svg)"/>
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
const PetsInZooSliderBlock = (props: {
    start: number, width: number, margin: number
}) => {

    return (
        <div className="pets-in-zoo-slider__block">
            {
                sliderItemsArray.map((e, i) => {
                    if (i >= props.start && i <= props.start + 3) {
                        return (
                            <SliderItem
                                index={i}
                                imgSrc={e.src}
                                text={e.text}
                                width={props.width}
                                margin={props.margin}
                            />
                        )
                    }
                })
            }
        </div>
    )
}
export const PetsInZoo = () => {
    const itemWidth = 270
    const margin = 15
    const [countNumber,setCountNumber]=useState('02')
    const [slides, setSlides] = useState([0])
    const [direction, setDirection] = useState('')
    const [transition, setTransition] = useState('none')
    const [transform, setTransform] = useState('')
    const rangeProps = {
        containerClass: 'range__container pets-in-zoo__range',
        numberClass: 'pets-in-zoo__number counts',
        rangeWrapperClass: 'range__dark range__wrapper',
        startNumber: countNumber,
        totalNumber: '08',
        handleChange:(val:number)=>{
            const currentRangeNumber = +countNumber
            const diff= val-+countNumber
            if(diff<0){
                for(let i=1;i<Math.abs(diff);i++){
               //    const isF = new Promise.resolve().then(())
                    buttonClick('left')
                }
            }else if(diff>0){
                for(let i=1;i<diff;i++){
                    console.log(i)
                    buttonClick('right')
                }
            }
            setCountNumber(`0${val}`)
        }
    }
    const deleteElement = () => {
        if(direction){
        setTransition('none')
        setTransform('translate(0)')
                setSlides((prev) => {
                    const newAr = prev.slice()
                    if(newAr.length>1){
                        direction === 'left'? newAr.shift() : newAr.pop()
                    }
                    return newAr
            })
      }
    }
    const buttonClick = (direction: string) => {
       if (direction === 'left') {
        slideClick(setDirection, setSlides, setCountNumber,
             setTransform, setTransition, 
             'left', 4, '-100%', 'all ease 500ms')
        }
        else if (direction === 'right') {
            slideClick(setDirection, setSlides, setCountNumber,
                setTransform, setTransition, 
                'right', 4, '-100%', 'all ease 0ms')
            setTimeout(() => {
                setTransform('translate(0)')
                setTransition('all ease 500ms')
            }, 0)
        }
    }
    return (
        <article className="pets-in-zoo">
            <div className="pets-in-zoo__wrapper">
                <h2 className="pets-in-zoo__title title">Pets in Zoo</h2>
                <div className="pets-in-zoo__slider-wrapper" style={{width: (itemWidth + margin) * 8 + "px"}}>
                  <div className="pets-in-zoo__slider-hide__wrapper" style={{width: (itemWidth + margin) * 4 + "px"}}>
                    <div className="pets-in-zoo__slider-hide" style={{
                      width: (itemWidth + margin * 2) * 4 + "px",
                      transition: transition,
                      transform: transform
                    }}
                         onTransitionEnd={() => {
                             console.log('onTransitionEnd')
                           setTransition('none')
                           deleteElement()
                         }}>

                      {
                        slides.map((s, index) => {
                          return <PetsInZooSliderBlock start={s} width={itemWidth} margin={margin}
                          />
                        })
                      }
                    </div>
                  </div>
                </div>
                <SliderRange {...rangeProps}/>
                <ButtonPrimary buttonClass={'btnPrimary'} text={'choose your favorite'} href={'#'}/>
              <div className="pets-in-zoo-slider__left">
                <button onClick={() => buttonClick('left')}>
                  <img src="./public/assets/svg/arrowSlider.svg" alt=""/>
                </button>
              </div>
              <div className="pets-in-zoo-slider__right">
                <button onClick={() => buttonClick('right')}>
                  <img src="./public/assets/svg/arrowSlider.svg" alt=""/>
                </button>
              </div>
            </div>
        </article>
    )
}