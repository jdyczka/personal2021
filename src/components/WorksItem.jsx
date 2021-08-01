import React from 'react'

export default function WorksItem({ title, href, children, description, used }) {

    const icons = {
        js: {
            file: 'javascript-js-seeklogo.com.svg',
            text: 'JavaScript'
        },
        ts: {
            file: 'typescript-seeklogo.com.svg',
            text: 'TypeScript'
        },
        css: {
            file: 'css-3-seeklogo.com.svg',
            text: 'CSS3'
        },
        styled: {
            file: 'styled-components.png',
            text: 'styled-components'
        },
        sass: {
            file: 'sass-seeklogo.com.svg',
            text: 'Sass'
        },
        react: {
            file: 'react-seeklogo.com.svg',
            text: 'React'
        },
        router: {
            file: 'react-router-seeklogo.com.svg',
            text: 'React Router'
        },
        redux: {
            file: 'redux-seeklogo.com.svg',
            text: 'Redux'
        },
        ai: {
            file: 'adobe-illustrator-cc-seeklogo.com.svg',
            text: 'Adobe Illustrator'
        },
        gulp: {
            file: 'gulp2-seeklogo.com.svg',
            text: 'Gulp'
        },
        jquery: {
            file: 'jquery-seeklogo.com.svg',
            text: 'jQuery'
        },
        mustache: {
            file: 'mustache-logo.png',
            text: 'Mustache.js'
        },
    }

    return (
        <div className="works_item">
            <div className="works_item_content">
                <div className="works_item_info">
                    <h3>{title}</h3>
                    <div>{description}</div>
                    <div className="works_item_used">
                        {used?.map((icon, id) =>
                            <div data-text={icons[icon]?.text} key={id}>
                                <img key={id} src={'/assets/icons/' + icons[icon]?.file} alt={icons[icon]?.text} />
                            </div>
                        )}
                    </div>
                    {href ? <a className='button' href={href} target='_blank' rel="noreferrer">Check it out</a> : ''}
                </div>
                <div className="works_item_children">
                    {children}
                </div>
            </div>
        </div>
    )
}