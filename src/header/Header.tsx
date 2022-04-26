import * as React from "react";
import './Header.css'
import {HeaderNav, linksObj} from "./HeaderNav";
import {HeaderBurger} from "./HeaderBurger";
import {Switcher} from "./Switcher";
import {useState} from "react";
export const Header=()=>{
    const navLinks:linksObj={
        about:"./index.html",
        zoos:"pages/zoos/panda.html",
        map:"pages/intermediatePage/intermediatePage.html",
        contacts:"#form-contact"
    }
    const [color,setColor]=useState('light')
    const changeColor=()=>{
        setColor(color === 'light' ? 'dark' : 'light')
        console.log(color)
    }
    return(
        <header data-testid='header'>
            <div className="header-wrapper">
                <h1>Online Zoo</h1>
                <div className="header-logo" >
                    <a href="./index.html">
                        <span className='header-icon' style={{
                            backgroundImage:'url(./public/assets/svg/logoLight.svg)'}}></span>
                    </a>
                </div>
                <HeaderNav links={navLinks}/>
                <HeaderBurger links={navLinks}/>
                <Switcher color={color} eventHandler={changeColor}/>
            </div>
        </header>
    )
}
