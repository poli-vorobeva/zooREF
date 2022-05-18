import * as React from "react";
import './Switcher.css'
import PropTypes from "prop-types";

interface ISwitcherProps{
    color:string,
    eventHandler:()=>void
}
export const Switcher:React.FC<ISwitcherProps>=(props)=>{
    return (
        <div className='switcher'>
            <input id="switcher" type="checkbox" onChange={props.eventHandler} className={props.color==='light'?"switch-input-light":"switch-input-dark"}/>
            <label htmlFor="switcher" className="switch-label">Switch</label>
        </div>

    )
}
// Switcher.propTypes = {
//     color: PropTypes.string.isRequired,
//     eventHandler: PropTypes.func.isRequired
// };
