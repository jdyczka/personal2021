import React from 'react'
import WorksItem from '../WorksItem'

export default function Juggler() {

    const desc = (<>
        <p>description</p>
    </>)

    return (
        
        <WorksItem
                title='Custom slider with unusual animation'
                href='http://jdyczka.vipserv.org/juggler'
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