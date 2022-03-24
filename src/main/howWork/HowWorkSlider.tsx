import React, {useState} from "react";

export const HowWorkSlider = (props:{click:(ind:number)=>void}) => {
    let [images,setImages]=useState([1,2,3,4,5,6,7,8])

    function handleClick(e:any,el: number) {
            const copyState=images.slice()
            const copyFirst=copyState.shift()
        props.click(+copyFirst+1<=8?+copyFirst+1:1)
            const newState=[...copyState,copyFirst]
            setImages(newState)
    }

    return (
        <div className="howWorksSlider">
            {
                images.map(el=>{
                    return(
                        <img src={`./public/assets/sliderHowWork/${el}.jpg`} className="how-work__image"
                             alt="howWork"
                        onClick={(e)=>handleClick(e,el)}/>
                    )
                })
            }
        </div>
    )
}