import React, {useState} from "react";
import {videoDataType} from "../../../../animalsData";
import {videoFrame} from "../animalPageVideo";

export const AnimalPageVideoSlider = (props: { videoData: videoDataType }) => {
    const itemWidth = 180
    const itemHeight=100
    const itemMargin = 10
    const [displayArrows, setDisplayArrows] = useState(false)
    const [currentPosition, setCurrentPosition] = useState(0)
    const differentWidht = ((itemWidth + itemMargin) * props.videoData.videos.length) - (itemWidth + itemMargin) * 3
    const [loadVideo,setLoadVideo]=useState(null)
    const [clickedVideo,setClickedVideo]=useState(null)
    const loadedVideos=new Set()
    const iframeLoadHandler=()=>{
        setLoadVideo(clickedVideo)
        loadedVideos.add(clickedVideo)
    }
    const scroll = (direction: string) => {
        const item = itemWidth + itemMargin
        if (direction === 'left') {
            if (Math.abs(currentPosition + item) < differentWidht && (currentPosition + item) <= 0) {
                setCurrentPosition(currentPosition + item)
            }
        } else {
            if (Math.abs(currentPosition - item*2) <= differentWidht) {
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
                    return (
                        <div className="animalPageVideo_sliderItem"
                             style={{
                                 backgroundImage: (loadVideo!==ind)
                                     ?`url(${vid.videoScreen})`
                                     :(loadVideo && clickedVideo===ind)&&'',
                                 width: `${itemWidth}px`,
                                 height:`${itemHeight}px`,
                                 marginRight: `${itemMargin}px`
                             }}>
                            {clickedVideo===ind && videoFrame({width:itemWidth,height:itemHeight,
                                url:vid.videoLink,iframeLoadHandler})}

                            {clickedVideo!==ind && <button
                                className="animalPage_videoSliderItemButton"
                                onClick={() => {
                                    setClickedVideo(ind)
                                }}></button>}
                        </div>
                    )

                })}

            </div>
            <div className="animalPageVideo_sliderLeft"
                 onMouseEnter={() => setDisplayArrows(true)}
                 onMouseLeave={() => setDisplayArrows(false)}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                        onClick={() => scroll('left')}/>
                }
            </div>
            <div className="animalPageVideo_sliderRight"
                 onMouseEnter={() => setDisplayArrows(true)}
                 onMouseLeave={() => setDisplayArrows(false)}
            >
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                        onClick={() => scroll('right')}/>
                }
            </div>
        </div>
    )
}