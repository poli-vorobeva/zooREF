import * as React from "react";

export const SliderLine = (props: Record<string, number>) => {
    return (
        <div className="slider__line" style={{transform: `translate(${props.translate}px)`}}>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot dot-second"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot_hide"></span>
                <span className="dot dot-last"></span>
                <span className="dot dot-last"></span>
                <span className="dot"></span>
            </div>

        </div>
    )
}
