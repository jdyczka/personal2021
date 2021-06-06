import React from 'react'
import WorksItem from '../WorksItem'

export default function Drownman() {

    const desc = (<>
        <p>The premise of the game is exactly the same as in hangman, except you lose by drowning. You can play a random word or type in you own. It's written in VanillaJS. Letters can be chosen either with mouse or keyboard. All graphic materials were also created by me in Adobe Illustrator.</p>
        <p>The banner animation is fully done using CSS animations.</p>
    </>)

    return (
        <WorksItem
            title="Hangman-style game and a dedicated banner"
            href='http://jdyczka.vipserv.org/drownman'
            description={desc}
            used={['js', 'css', 'ai']}
        >
            <iframe
                title='Drownman Banner'
                src="http://jdyczka.vipserv.org/baner"
                frameBorder="0"
                width="750"
                height="100"
                style={{
                    marginLeft: 'auto',
                    marginBottom: '40px',
                    display: 'block',
                }}></iframe>
            <div className="flex">
                <img 
                    src='/assets/drownman.png' 
                    alt='' 
                    style={{
                        width: '80%'
                    }}/>
                {/* <video src="/assets/drownman.webm" autoPlay loop muted></video> */}

            </div>
            {/* <DrownBanner/> */}
        </WorksItem>
    )
}