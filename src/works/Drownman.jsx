import React from 'react'
import WorksItem from '../WorksItem'

export default function Drownman() {
    return (
        <WorksItem
            title="Hangman-style game with a banner"
            href='http://jdyczka.vipserv.org/drownman'
            description=''
        >
            <img src='/assets/drownman.png' alt='' />
            <video src="/assets/drownman.webm" autoPlay loop muted></video>
            {/* <DrownBanner/> */}
            <iframe title='Drownman Banner' src="http://jdyczka.vipserv.org/baner" frameBorder="0" width="750" height="100"></iframe>
        </WorksItem>
    )
}