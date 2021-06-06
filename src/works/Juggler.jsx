import React from 'react'
import WorksItem from '../WorksItem'

export default function Juggler() {

    const desc = (<>
        <p>For this project I both designed and implemented a website for a fictional dance studio. It is mostly a static website, but it also includes a filterable table.</p>
        <p>The website is implemented using React.js and utilizes styled-components for css-in-js. It also features a few slick-slider carousels. </p>
    </>)

    return (
        
        <WorksItem
                title='Website for a dance studio'
                href='http://piruet.vipserv.org/'
                description={desc}
                used={['react', 'router', 'styled']}
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2.28fr 1fr',
                    gridGap: 20,
                }}>
                    <img src='/assets/piruet-1.png' alt='' />
                    <img src='/assets/piruet-m-1.png' alt='' />
                </div>
            </WorksItem>
    )
}