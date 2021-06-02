import React from 'react'
import WorksItem from '../WorksItem'

export default function Holi() {
    return (
        <WorksItem
            title="Logo and Animation for a medical centre"
            description='desc'
        >
            <img src='/assets/holi-logo.svg' alt='' />
            {/* <HoliAnimation /> */}
            <iframe src="http://jdyczka.vipserv.org/hc/logo.html" frameBorder="0"></iframe>
        </WorksItem>
    )
}