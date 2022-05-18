import * as React from "react";
export const sliderItemsArray = [
    {
        animal:'panda',
        text: '1Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.',
        src: "./public/assets/sliderStart/1.png"
    },
    {
        animal:'eagle',
        text: '2Eagle in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/2.png"
    },
    {
        animal:'alligator',
        text: '3alligator in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/4.png"
    },
    {
        animal:'gorilla',
        text: '4gorilla in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/3.png"
    },
    {
        animal:'panda',
        text: '5panda in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/1.png"
    },
    {
        animal:'eagle',
        text: '6Eagle in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/2.png"
    },
    {
        animal:'alligator',
        text: '7alligator in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/4.png"
    },
    {
        animal:'gorilla',
        text: '8gorilla in Callifornia  He is 2 years old. Bei Bei is from China. He loves bamboos. ',
        src: "./public/assets/sliderStart/3.png"
    }
]
export interface ISliderStartButton {
    cls: string,
    text: string,
    link: string,
    svgPath: string,
    clickHandler?:(data?:string)=>void
    width?:number,
    height?:number
}
export interface IRange {
    containerClass: string,
    numberClass: string,
    rangeWrapperClass: string,
    startNumber: string,
    totalNumber: string,
    currentNumber?: number,
    handleChange?: (value: number) => void
}
export interface IButtonPrimary {
    buttonClass: string,
    imgSrc?: string,
    text: string,
    href?: string,
    clickHandler?: (zoos: string)=>void
}
export const SliderRange = (props: IRange) => {
    return (
        <div className={props.containerClass}>
            <p className={props.numberClass}><b>{props.startNumber}/</b>{props.totalNumber}</p>
            <div className={props.rangeWrapperClass}>
                <input type="range" min="1" max={props.totalNumber}
                    value={+props.startNumber}
                    step="1"
                    onChange={(e) => {
                        props.handleChange(+e.target.value)
                    }
                    } />
            </div>
        </div>
    )
}
export const Button = (props: ISliderStartButton) => {
    return (
        <div className="start-slider-buttonWrapper">
            <button className={props.cls} onClick={()=>props.clickHandler()} style={{
               backgroundImage: props.svgPath
            }}>
                <a href={props.link}>
                    {/*<span className="start-page-slider-watch" style={{ backgroundImage: props.svgPath }}></span>*/}
                </a>
            </button>
            <span>
                {props.text}
            </span>
        </div>

    )
}
export const ButtonPrimary = (props: IButtonPrimary) => {
    return (
        <button className={props.buttonClass}
        onClick={()=>props.clickHandler('zoos')}>
            {props.imgSrc && <img src={props.imgSrc} />}
            <span>{props.text}</span>
            {props.href && <a href={props.href}></a>}
        </button>
    )
}
export const slideClick = (dirrectionSetState: React.Dispatch<React.SetStateAction<string>>,
    slidesSetState: React.Dispatch<React.SetStateAction<number[]>>,
    countSetState: React.Dispatch<React.SetStateAction<string>>,
    transformSetState: React.Dispatch<React.SetStateAction<string>>,
    transitionSetState: React.Dispatch<React.SetStateAction<string>>,
    directionValue: string, slidesCount: number, transformValue: string, transitionValue: string
) => {
    dirrectionSetState(directionValue)
    slidesSetState((prev) => {
        console.log('prev', prev)
        const addEl = prev[prev.length - 1] === 0 ? slidesCount : 0
        if (directionValue === 'left') {
            return [...prev, addEl]
        } else {
            return [addEl, ...prev]
        }
    })
    countSetState((prev) => {
        const newCount = (directionValue === 'left') ? +prev + 1 > 8 ? '01' : '0' + (+prev + 1) : +prev - 1 < 1 ? '08' : '0' + (+prev - 1)
        return newCount
    })
    transformSetState(`translate(${transformValue})`)
    transitionSetState(transitionValue)
}