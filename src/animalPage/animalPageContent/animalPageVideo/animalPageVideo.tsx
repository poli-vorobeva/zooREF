import React from "react";
import {AnimalPageVideoSlider} from "./animalPageVideoSlider/animalPageVideoSlider";
import {videoAnimalsData} from "../../../animalsData";
import './animalPageVideo.css'
export const AnimalPageVideo=(props:{activeAnimal:string})=>{
const videoData = videoAnimalsData.find(el=>el.animal===props.activeAnimal)
    console.log('VideoData',videoData)
    return(
        <div className="animalPage-video">
            <div className="animalPage_videoActive"
                 style={{
                     backgroundImage:`url(${videoData.activeVideo.videoScreen})`}}>
                <button className="animalPage_videoActiveButton"></button>
                {/*<img src={videoData.activeVideo.videoScreen} alt=""/>*/}
                {/*<iframe width="560" height="315" src={videoData.activeVideo.videoLink}*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen>*/}

                {/*</iframe>*/}
            </div>

            <AnimalPageVideoSlider videoData={videoData}/>
        </div>

    )
}