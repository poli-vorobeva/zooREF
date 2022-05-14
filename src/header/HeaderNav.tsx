import * as React from "react";

export type linksObj = { [key: string]: string }

export const HeaderNav = (props: { links: linksObj, drawPage: (page: string) => void }) => {
    console.log(props.links)
    return (
        <nav className="header-nav nav">
            <ul>
                {
                    Object.entries(props.links).map((el, ind) => {
                        return <li
                            className="nav-item"
                            key={ind} onClick={() => {
                            props.drawPage(el[0])
                        }}>
                            {el[0]}
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
