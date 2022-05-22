import * as React from "react";
import './Testimonials.css'
import { ButtonPrimary, slideClick, SliderRange } from "../commonElements";
import { useState } from "react";
import TestimonialsSlider from "./TestimonialsSlider";
export const Testimonials = (props:{screenWidth:number}) => {
const itemsLength=2
  const itemWidth = props.screenWidth<=640?props.screenWidth*0.75:700
  return (
    <article className="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="title">Testimonials</h2>
       <TestimonialsSlider itemWidth={itemWidth}/>
        <SliderRange containerClass={'range__container testimonials__range'}
          numberClass={'number-toggle-light'}
          rangeWrapperClass={'range__dark range__wrapper'}
          startNumber={'' + 1} totalNumber={'' + itemsLength} />
        <ButtonPrimary buttonClass={'btnPrimary'} text={'LEAVE FEEDBACK'} />
      </div>
    </article>
  )
}
