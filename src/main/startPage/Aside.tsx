import * as React from "react";
import './Aside.css'
export const Aside=()=>{
    return (
        <aside className="start-page__aside">
            <ul>
                <li><a href="https://www.instagram.com/">
                    <img src="./public/assets/social-icons/insta-icon.png"/></a></li>
                <li><a href="https://www.facebook.com/"> <img src="./public/assets/social-icons/facebook-icon.png"/></a>
                </li>
                <li><a href="https://www.youtube.com/">
                    <img src="./public/assets/social-icons/youtube-icon.png"/></a></li>
                <li><a href="https://vk.com/"> <img src="./public/assets/social-icons/vk-icon.png"/></a></li>
            </ul>
        </aside>
    )
}
