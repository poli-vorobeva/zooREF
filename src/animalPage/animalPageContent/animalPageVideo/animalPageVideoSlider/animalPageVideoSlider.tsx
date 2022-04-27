import React from "react";
import {videoDataType} from "../../../../animalsData";

export const AnimalPageVideoSlider = (props: { videoData: videoDataType }) => {
    return (
        <div className="animalPageVideo_slider">
            {props.videoData.videos.map(vid=>{
                return(
                    <div className="animalPageVideo_sliderItem" style={{backgroundImage:`url(${vid.videoScreen})`}}></div>
                )
            })}
        </div>)
}