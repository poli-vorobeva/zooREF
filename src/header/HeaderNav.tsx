import * as React from "react";

export type linksObj = { [key: string]: string }

export const HeaderNav = (props: { [key: string]: linksObj }) => {

    return (
        <nav className="header-nav nav">
            <ul>
                {
                    Object.entries(props.links).map((el, ind) => {
                        return <li
                            className="nav-item"
                            key={ind}>
                            <a href={el[1]}>
                                {el[0]}
                            </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
