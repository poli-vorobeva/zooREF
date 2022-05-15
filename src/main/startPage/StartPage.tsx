import {Aside} from "./asideStart/Aside";
import {SliderStart} from "./SliderStart";
import * as React from "react";
import './StartPage.css'

export const StartPage=(props:{ drawPage:(page:string)=>void})=>{
    return(
        <article className="start-page" style={{backgroundImage:"url(./public/assets/bg-main.png)"}}>
            <div className="start-page__wrapper">
                <Aside/>
                <div className="start-page__content">
                    <div className="start-page__title">
                        <p>Watch your favorite animal online</p>
                        <button className="start-page__button animateButton">
                            <div className="buttonContent"
                            onClick={()=>props.drawPage('zoos')}>
                                <img src="./public/assets/svg/playCircle.svg"/>
                                <span>Watch online</span>
                                <a href="pages/zoos/panda.html"></a>
                            </div>
                            <div className="button__horizontal"></div>
                            <div className="button__vertical"></div>
                        </button>
                    </div>
                    <SliderStart drawPage={props.drawPage}/>
                </div>
            </div>
        </article>
    )
}
