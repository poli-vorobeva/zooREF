import React, { useState } from "react"
import { slideClick } from "../commonElements"
import TestimonialsItem from './TestimonialsItem'
const TestimonialsButton=(props:{direction:string,clickHandler:(direction:string)=>void})=>{
  return (
    <div className={`slider__arrow testimonials-slider__${props.direction}`}>
    <img src="./public/assets/svg/arrowSlider.svg" alt=""
      onClick={() => props.clickHandler(props.direction)} />
  </div>
  )
}
const TestimonialsSlider = (props:{itemWidth:number}) => {
  const [slides, setSlides] = useState([0])
  const [countNumber, setCountNumber] = useState('02')
  const [transform, setTransform] = useState('')
  const [transition, setTransition] = useState('none')
  const [direction, setDirection] = useState('')
  const deleteElement = () => {
    if (direction) {
      setTransition('none')
      setTransform('translate(0)')
      setSlides((prev) => {
        console.log(direction)
        const newAr = prev.slice()
        console.log(newAr, 'newAr')
        if (newAr.length > 1) {
          direction === 'left' ? newAr.shift() : newAr.pop()
        }
        return newAr
      })
    }
  }
  const buttonClick = (direction: string) => {
   if (direction === 'left') {
      slideClick(setDirection, setSlides, setCountNumber, setTransform, setTransition, 'left', 1, `-${props.itemWidth}px`, 'all ease 500ms')
    }
    else if (direction === 'right') {
      slideClick(setDirection, setSlides, setCountNumber, setTransform, setTransition, 'right', 1,
        `-${props.itemWidth}px`, 'all ease 0ms')
      setTimeout(() => {
        setTransform('translate(0)')
        setTransition('all ease 500ms')
      }, 0)
    }
  }
  const listItems = [
    {
      name: 'Nastya Sidorova',
      src: './public/assets/test1.png',
      content: 'As a voice for wildlife, we are devastated by the\n' +
        'impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
      name: 'Vlad Kim',
      src: './public/assets/test2.png',
      content: 'As a voice for wildlife, we are devastated by the impact of the 2020 ' +
        'Australian bushfires on preciou species and their habitat.'
    },
  ]
  return (
    <div className="testimonials-slider">
     <TestimonialsButton direction='left' clickHandler={()=>buttonClick('left')}/>
      <div className='testimonials-slider__hide_wrapper' style={{ width: props.itemWidth + 'px' }}>
        <div className="testimonials-slider__hide" style={{
          width: props.itemWidth * 2 + "px",
          transition: transition,
          transform: transform
        }}
          onTransitionEnd={() => {
            setTransition('none')
            deleteElement()
          }}>
          {
            slides.map(sl => {
              return (
                <TestimonialsItem width={props.itemWidth} item={listItems[sl]} />
              )
            })
          }
        </div>
      </div>
      <TestimonialsButton direction="right" clickHandler={()=>buttonClick('right')}/>
    </div>
  )
}
export default TestimonialsSlider