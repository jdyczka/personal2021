import React from 'react'
import WorksItem from '../WorksItem'

export default function Paint() {

    const desc = (<p>It enables the user to change color and stroke-width, clear board and erase. It's written in VanillaJS and uses Canvas API for drawing.</p>)

    return (
        
        <WorksItem
        title='Web-based Paint'
        href='http://jdyczka.vipserv.org/whiteboard'
        description={desc}
        used={['js']}
    >
        <img src='/assets/whiteboard.png' alt='' />
    </WorksItem>
    )
}