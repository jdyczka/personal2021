import React, {useEffect, useState} from 'react'
import './HoliAnimation.scss'

function HoliAnimation() {
    
    let [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldAnimate(!shouldAnimate);
        }, 3000)
        return () => {
            clearInterval(interval)
        };
    });
    return (
        <div className='holi-animation'>
            <svg viewBox="0 0 79.57 80.55" className={shouldAnimate ? 'animate' : ''}>
                <g className="logo">
                    <g className="flower">
                        <path className="petal" opacity="0.6" fill="#B2768D"
                            d="M39.783,1c-16.02,16.021-16.02,41.998,0,58.018 C55.806,42.996,55.806,17.021,39.783,1z" />
                        <path className="petal" opacity="0.6" fill="#B2768D"
                            d="M3.275,22.507L3.275,22.507 c0,20.165,16.346,36.51,36.508,36.51C39.783,38.853,23.437,22.507,3.275,22.507z" />
                        <path className="petal" opacity="0.6" fill="#B2768D"
                            d="M39.783,59.017h0.002c20.162,0,36.508-16.346,36.508-36.51l0,0 C56.129,22.507,39.783,38.853,39.783,59.017z" />
                    </g>
                    <g className="letters">
                        <polyline
                            points="3.275,77.271 39.784,77.271 76.293,77.271 39.784,77.271 39.784,59.018 3.273,59.016 76.293,59.018 		" />
                        <path d="M76.296,22.507c0,20.165-16.347,36.511-36.511,36.511 c-20.165,0-36.511-16.347-36.511-36.511" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default HoliAnimation;