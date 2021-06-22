import React from 'react'
import WorksItem from '../WorksItem'

export default function Weather() {

    const desc = (<>
        <p>It's a responsive user interface for presenting historical weather data in the form of line charts. The charts are implemented using React-Vis.</p>
        <p>The user can define a time range for which the weather is shown using a range slider.</p>
    </>)

    return (

        <WorksItem
            title='React-Vis charts'
            href='http://jdyczka.vipserv.org/weather'
            description={desc}
            used={['react', 'styled']}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2.32fr 1fr 1fr',
                gridGap: 20,
            }}>
                <img src='/assets/weather.png' alt='' />
                <img src='/assets/weather-m-1.png' alt='' />
                <img src='/assets/weather-m-2.png' alt='' />
            </div>
        </WorksItem>
    )
}