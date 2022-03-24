import * as React from "react";
import './ourMission.css'

export const OurMission=()=>{
    const elements=[
        {
            imgSrc:"./public/assets/svg/lamp.svg",
            header:"What inspiring us?",
            text:'As a voice for wildlife, we are devastated by the impact of the\n' +
                '2020 Australian bushfires on precious species and their habitat, and we are\n' +
                'determined to assist in all aspects.'
        },
        {
            imgSrc:"./public/assets/svg/achievement.svg",
            header:"Our mission",
            text:'Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives.'
        },
        {
            imgSrc:"./public/assets/svg/love.svg",
            header:"What we believe in?",
            text:'Animals have the right to a pain-free and happy life. They have equal claim to \n'
                +'the resources of this planet, and deserve a life of dignity and compassion.'
        },
    ]
    return (
        <div className="our-mission__wrapper">
            {/*<div className="our-mission">*/}
                <div className="our-mission__content">
                    {
                        elements.map(el=>{
                            return(
                                <div className="our-mission__item">
                                    <img src={el.imgSrc}/>
                                    <h4>{el.header}</h4>
                                    <p>{el.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            {/*</div>*/}
        </div>
    )
}
