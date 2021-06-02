import React from 'react'
import WorksItem from './WorksItem'
import Holi from './works/Holi'
import Drownman from './works/Drownman'
import './Works.scss'
// import DrownBanner from './DrownBanner'

export default function Works() {

    const desc = {
        holi: '',
        drownman: '',
        whiteboard: "It enables the user to change color and stroke-width, clear board and erase. It's written in VanillaJS and uses Canvas API for drawing."
    }

    return (
        <div className="works">
            <Holi/>
            <Drownman/>
            <WorksItem
                title='Simple whiteboard'
                href='http://jdyczka.vipserv.org/whiteboard'
                description={desc.whiteboard}
            >
                <img src='/assets/whiteboard.png' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            <WorksItem
                title=''
                href='http://jdyczka.vipserv.org/'
                description={desc.a}
            >
                <img src='' alt='' />
            </WorksItem>
            {/* {
                worksData.map((w, id) =>
                    <WorksItem key={id} {...w}></WorksItem>
                )
            } */}
        </div>
    )
}