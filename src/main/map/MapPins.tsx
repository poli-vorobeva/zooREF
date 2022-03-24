import React from "react"
import PinItem from './PinItem'
const MapPins = () => {
  const animalsArray=[
    {
name:'eagle',
imgUrl:"./public/assets/map-slider/7.png",
region:'on an island near Los Angeles',
population:'more than 270 pairs in 2013'

  },{
    name:'aligator',
imgUrl:"./public/assets/map-slider/5.png",
region:'on an island near Los Angeles',
population:'more than 270 pairs in 2013'
  },{
    name:'panda',
    imgUrl:"./public/assets/map-slider/1.png",
    region:'on an island near Los Angeles',
    population:'more than 270 pairs in 2013'
  },{
    name:'monkey',
    imgUrl:"./public/assets/map-slider/2.png",
    region:'on an island near Los Angeles',
    population:'more than 270 pairs in 2013'
  }]
  return (
    <div className="map__pin-wrapper">
      {
        animalsArray.map(item=>{
          return <PinItem item={item}/>
        })
      } 
    </div>
  )
}
export default MapPins