import React from 'react'

export default function WorksItem({ title, href, children, description }) {
    return (
        <div className="works_item">
            <div className="works_item_info">
            <h2>{title}</h2>
            <p>{description}</p>
            { href ? <a className='button' href={href} target='_blank' rel="noreferrer">Check it out</a> : ''}
            </div>
            <div className="works_item_children">
                {children}
            </div>
        </div>
    )
}