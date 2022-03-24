import React from "react";
const TestimonialsItem=(props:{ width: number; item: { name: string; src: string; content: string; }; })=>{
  return(
    <div className="testimonials-slider__item" style={{ width: props.width + "px" }}>
    <div className="ts-el-content">
      <img src={props.item.src} alt="test" />
      <h5>{props.item.name}</h5>
      <p>{props.item.content}</p>
    </div>
  </div>
  )
}
export default TestimonialsItem