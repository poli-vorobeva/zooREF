import React from "react"
import PinItem from './PinItem'

const MapPins = () => {
    const animalsArray = [
        {
            id: 1,
            name: 'eagle',
            imgUrl: "./public/assets/map-slider/7.png",
            region: 'on an island near Los Angeles',
            population: 'more than 270 pairs in 2013'

        }, {
            id: 2,
            name: 'aligator',
            imgUrl: "./public/assets/map-slider/5.png",
            region: 'on an island near Los Angeles',
            population: 'more than 270 pairs in 2013'
        }, {
            id: 3,
            name: 'panda',
            imgUrl: "./public/assets/map-slider/1.png",
            region: 'on an island near Los Angeles',
            population: 'more than 270 pairs in 2013'
        }, {
            id: 4,
            name: 'monkey',
            imgUrl: "./public/assets/map-slider/2.png",
            region: 'on an island near Los Angeles',
            population: 'more than 270 pairs in 2013'
        }]
    return (
        <div className="map__pin-wrapper">
            {
                animalsArray.map((item) => {
                    return <PinItem item={item}/>
                })
            }
        </div>
    )
}
export default MapPins