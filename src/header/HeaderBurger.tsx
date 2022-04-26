import * as React from "react";
import {linksObj} from "./HeaderNav";
import './Burger.css'

export const HeaderBurger = (props: { [key: string]: linksObj }) => {
    return (
        <div className="">
            <div className="header__burger-menu">
                <input id="header__burger-menu__toggle" type="checkbox"/>
                <label className="header__burger-menu__btn menu__btn" htmlFor="header__burger-menu__toggle">
                    <span></span>
                </label>
                <ul className="header__burger-menu-nav">
                    {
                        Object.entries(props.links).map((el,ind) => <li key={ind}><a className="header__burger-menu__item"
                                                                        href={el[1]}>{el[0]}</a></li>)
                    }
                </ul>
            </div>
        </div>
    )
}
