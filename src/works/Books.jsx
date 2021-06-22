import React from 'react'
import WorksItem from '../WorksItem'

export default function Books() {

    const desc = (<>
        <p>For this project I both designed and implemented a website for a fictional dance studio. It is mostly a static website, but it also includes a filterable table.</p>
        <p>The website is implemented using React.js and utilizes styled-components for css-in-js. It also features a few slick-slider carousels. </p>
    </>)

    return (

        <WorksItem
            title='Google library browser'
            href='http://jdyczka.vipserv.org/books'
            description={desc}
            used={['react', 'router', 'redux', 'sass']}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2.74fr 1fr',
                gridGap: 20,
            }}>
                <img src='/assets/books.png' alt='' />
                <img src='/assets/books-m.png' alt='' />
            </div>
        </WorksItem>
    )
}