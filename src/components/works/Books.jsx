import React from 'react'
import WorksItem from '../WorksItem'

export default function Books() {

    const desc = (<>
        <p>This React.js app allows the user to browse Google Books. It supports search by title, author or genre.</p>
        <p>The user can also add books to favourites, which are then stored in local storage.</p>
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