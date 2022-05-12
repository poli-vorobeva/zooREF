import React, {useEffect, useMemo, useState} from "react";
import {videoDataType} from "../../../../animalsData";
import {videoFrame} from "../animalPageVideo";
import {Button} from "../../../../components/button";
import {Image} from "../../../../components/image";

export const AnimalPageVideoSlider = (props: { videoData: videoDataType }) => {
    const itemWidth = 180
    const itemHeight = 100
    const itemMargin = 10
    const [displayArrows, setDisplayArrows] = useState(false)
    const [currentPosition, setCurrentPosition] = useState(0)
    const differentWidht = ((itemWidth + itemMargin) * props.videoData.videos.length) - (itemWidth + itemMargin) * 3
    const [loadVideo, setLoadVideo] = useState<number>(null)
    const [clickedVideo, setClickedVideo] = useState<number>(null)

    const [loadedVideos, addLoaderVideos]= useState<number[]>([])

    const iframeLoadHandler = () => {
        setLoadVideo(clickedVideo)
        addLoaderVideos((prev) => {
            if(!prev.find((el)=>el===clickedVideo)){
                return [...prev,clickedVideo]
            }
            return prev
        })
     }
    const scroll = (direction: string) => {
        const item = itemWidth + itemMargin
        if (direction === 'left') {
            if (Math.abs(currentPosition + item) < differentWidht && (currentPosition + item) <= 0) {
                setCurrentPosition(currentPosition + item)
            }
        } else {
            if (Math.abs(currentPosition - item * 2) <= differentWidht) {
                setCurrentPosition(currentPosition - item)
            }
        }

    }
    return (
        <div className="animalPageVideo_sliderWrapper"
             style={{
                 width: `${(itemWidth + itemMargin) * 3}px`
             }}>
            <div className="animalPageVideo_slider"
                 style={{
                     transform: `translate(${currentPosition}px)`,
                     width: `${(itemWidth + itemMargin) * props.videoData.videos.length}px`
                 }}
            >
                {props.videoData.videos.map((vid, ind) => {
                    if (ind === 0) return

                    if(loadedVideos.includes(ind)){
                        console.log("YET")
                    }
                    return (
                        <div className="animalPageVideo_sliderItem"
                             style={{
                                 backgroundImage: (loadVideo !== ind)
                                     ? `url(${vid.videoScreen})`
                                     : (loadVideo && clickedVideo === ind)|| loadedVideos.includes(ind) && '',
                                 width: `${itemWidth}px`,
                                 height: `${itemHeight}px`,
                                 marginRight: `${itemMargin}px`
                             }}>
                            {
                                (clickedVideo === ind || loadedVideos.includes(ind)) && videoFrame({
                                    width: itemWidth, height: itemHeight, url: vid.videoLink, iframeLoadHandler
                                })
                            }

                            {
                                !loadedVideos.includes(ind) && <Button class={"animalPage_videoSliderItemButton"}
                                                                clickHandler={() => setClickedVideo(ind)}/>
                            }
                        </div>
                    )

                })}

            </div>
            <div className="animalPageVideo_sliderLeft"
                 onMouseEnter={() => setDisplayArrows(true)}
                 onMouseLeave={() => setDisplayArrows(false)}>
                {
                    displayArrows &&
                    <Image src="./public/assets/svg/arrowSlider.svg" alt="" clickHandler={() => scroll('left')}/>

                }
            </div>
            <div className="animalPageVideo_sliderRight"
                 onMouseEnter={() => setDisplayArrows(true)}
                 onMouseLeave={() => setDisplayArrows(false)}
            >
                {
                    displayArrows &&
                    <Image src="./public/assets/svg/arrowSlider.svg" alt="" clickHandler={() => scroll('right')}/>
                }
            </div>
        </div>
    )
}