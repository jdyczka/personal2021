import React from 'react'
import WorksItem from '../WorksItem'

export default function Juggler() {

    const desc = (<>
        <p>It's a custom slider written in jQuery. Not really responsive, because it was mainly experimental. My goal was to test how much you can do with CSS animations.</p>
    </>)

    return (
        
        <WorksItem
                title='Custom slider with unusual animation'
                href='http://jdyczka.vipserv.org/juggler'
                description={desc}
                used={['gulp', 'jquery', 'sass', 'mustache']}
            >
                <div>
                    <img src='/assets/juggler.png' alt='' />
                </div>
            </WorksItem>
    )
}