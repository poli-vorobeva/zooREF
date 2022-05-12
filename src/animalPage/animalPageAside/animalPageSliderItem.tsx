import {videoFrame} from "../animalPageContent/animalPageVideo/animalPageVideo";
import {Button} from "../../components/button";
import React from "react";

// export const AnimalPageSliderItem=(props:{width:number,height:number, margin:number,index:number,loadVideo:number,
//     clickedVideo:number,screen:string})=>{
//     return(
//         <div className="animalPageVideo_sliderItem"
//              style={{
//                  backgroundImage: (props.loadVideo !== props.index)
//                      ? `url(${props.screen})`
//                      : (props.loadVideo && props.clickedVideo === props.index) && '',
//                  width: `${props.width}px`,
//                  height: `${props.height}px`,
//                  marginRight: `${props.margin}px`
//              }}>
//             {
//                 props.clickedVideo === props.index && videoFrame({
//                     width: props.width, height: props.height, url: vid.videoLink, iframeLoadHandler
//                 })
//             }
//
//             {
//                 props.clickedVideo !== props.index && <Button class={"animalPage_videoSliderItemButton"}
//                                                 clickHandler={() => setClickedVideo(props.index)}/>
//             }
//         </div>
//     )
// }