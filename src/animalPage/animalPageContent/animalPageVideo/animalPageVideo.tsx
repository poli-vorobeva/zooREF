import React, {useState} from "react";
import {AnimalPageVideoSlider} from "./animalPageVideoSlider/animalPageVideoSlider";
import {videoAnimalsData} from "../../../animalsData";
import './animalPageVideo.css'
import {Button} from "../../../components/button";

export const videoFrame=(props:{width:number,height:number,url:string,iframeLoadHandler:()=>void})=>{
    return(
        <iframe width={''+props.width} height={''+props.height} src={props.url} title="YouTube video player"
                onLoad={()=>{
                    props.iframeLoadHandler()
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

        </iframe>
    )
}

export const AnimalPageVideo=(props:{activeAnimal:string})=>{
const videoData = videoAnimalsData.find(el=>el.animal===props.activeAnimal)
    const [playVideo,setPlayVideo]=useState(false)
    const [loadVideo,setLoadVideo]=useState(false)
    const width= 560
    const height= 315
    const iframeLoadHandler=()=>{
    setLoadVideo(true)
    }
    //todo if video loaded do not redraw it
    return(
        <div className="animalPage-video" style={{}}>
            <div className="animalPage_videoActive"
                 style={{
                     width:width+'px',height:height+'px',
                     backgroundImage:!loadVideo?`url(${videoData.videos[0].videoScreen})`:''}}>
                {playVideo && videoFrame({width,height,url:videoData.videos[0].videoLink,iframeLoadHandler})}
                {!loadVideo &&
                    <Button class="animalPage_videoActiveButton_active" clickHandler={() => setPlayVideo(true)}/>
                }
            </div>

            <AnimalPageVideoSlider videoData={videoData}/>
        </div>

    )
}