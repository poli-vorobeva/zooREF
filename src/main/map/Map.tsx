import * as React from "react";
import "./Map.css"
import {ButtonPrimary} from "../commonElements";
import MapPins from './MapPins'
export const Map = (props:{drawPage:(page:string)=>void}) => {
    return (
        <article className="map">
            <div className="map__content">
                <h2 className="title">Map</h2>
                <div className="map-wrapper">
                    <div className="map-svg">
                        <img src="./public/assets/svg/map.svg" alt=""/>
                    </div>
                    <MapPins drawPage={props.drawPage}/>
                </div>
                <ButtonPrimary buttonClass='btnPrimary' text='Watch online' clickHandler={props.drawPage}/>

                    {/*//    <a href="pages/zoos/panda.html"></a>*/}


            </div>
        </article>
    )
}
