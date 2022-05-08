import React, {useState} from "react";
import {videoDataType} from "../../../../animalsData";

export const AnimalPageVideoSlider = (props: { videoData: videoDataType }) => {
    const itemWidth = 180
    const itemMargin = 10
    const [displayArrows,setDisplayArrows]=useState(false)
    const [currentPosition, setCurrentPosition] = useState(0)
    const differentWidht=((itemWidth + itemMargin) * props.videoData.videos.length)-(itemWidth + itemMargin) * 3
    const scroll = (direction: string) => {
        const item = itemWidth+itemMargin
        if (direction === 'left') {
           if(Math.abs(currentPosition + item)<differentWidht && (currentPosition + item)<=0){
                setCurrentPosition(currentPosition + item)
            }
        } else {
            if(Math.abs(currentPosition - item)<=differentWidht){
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

                    return (
                        <div className="animalPageVideo_sliderItem"
                             style={{
                                 backgroundImage: `url(${vid.videoScreen})`,
                                 width: `${itemWidth}px`,
                                 marginRight: `${itemMargin}px`
                             }}></div>
                    )

                })}

            </div>
            <div className="animalPageVideo_sliderLeft"
                 onMouseEnter={() => setDisplayArrows(true)}
                 onMouseLeave={()=> setDisplayArrows(false)}>
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                        onClick={()=>scroll('left')}/>
                }
            </div>
            <div className="animalPageVideo_sliderRight"
                 onMouseEnter={() => setDisplayArrows(true)}
           onMouseLeave={()=> setDisplayArrows(false)}
                >
                {
                    displayArrows && <img
                        src="./public/assets/svg/arrowSlider.svg"
                        alt=""
                    onClick={()=>scroll('right')}/>
                }
            </div>
        </div>
    )
}