import React from 'react'
import './Works.scss'
import WorksItem from './WorksItem'
import Holi from './works/Holi'
import Drownman from './works/Drownman'
import Paint from './works/Paint'
import Piruet from './works/Piruet'
import Juggler from './works/Juggler'
// import DrownBanner from './DrownBanner'

export default function Works() {

    return (
        <div className="works">
            <Piruet/>
            <Drownman/>
            <Holi/>
            <Paint/>
            <Juggler/>
        </div>
    )
}