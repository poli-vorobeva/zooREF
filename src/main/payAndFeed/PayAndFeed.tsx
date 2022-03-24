import * as React from "react";
import './PayAndFeed.css'
import {ButtonPrimary} from "../commonElements";

export const PayAndFeed = () => {
    const payAndFeedItems = [
        {
            src: './public/assets/svg/cards.svg',
            text: 'You pay with a VISA card'
        },
        {src: './public/assets/svg/arrow.svg'},
        {
            src: './public/assets/svg/zoo.svg',
            text: 'Payment goes to the Zoo'
        },
        {src: './public/assets/svg/arrow.svg'},
        {
            src: './public/assets/svg/panda.svg',
            text: 'Panda gets the bamboo'
        }
    ]
    return (
        <article className="pay-and-feed">
            <div className="pay-and-feed__wrapper">
                <h2 className="title pay-and-feed__title">Pay and feed</h2>
                <p className="pay-and-feed__text">
                    The opportunity to easily and naturally (but as often as possible) donate to the needs of
                    animals that you like.
                </p>
                <div className="pay-and-feed__circles">
                    {
                        payAndFeedItems.map(el => {
                            const className=el.text?'payAndFeed-item item-circle':'payAndFeed-item item-arrow'
                            return (
                                <div className={className}>
                                    <img src={el.src} alt=""/>
                                   { el.text &&  <p>{el.text}</p>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

                <ButtonPrimary buttonClass={'btnPrimary'} text={'donate'}/>

        </article>
    )
}
