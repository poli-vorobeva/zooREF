import * as React from "react";
import "./Map.css"
import {ButtonPrimary} from "../commonElements";
import MapPins from './MapPins'
export const Map = () => {
    return (
        <article className="map">
            <div className="map__content">
                <h2 className="title">Map</h2>
                <div className="map-wrapper">
                    <div className="map-svg">
                        <img src="./public/assets/svg/map.svg" alt=""/>

                    </div>
                    <MapPins/>
                </div>
                <ButtonPrimary buttonClass='btnPrimary' text='Watch online'/>

                    //    <a href="pages/zoos/panda.html"></a>


            </div>
        </article>
    )
}
