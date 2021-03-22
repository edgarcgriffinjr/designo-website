import React from 'react'
import { Link } from 'react-router-dom'

const Design = () => {
    return (
        <section className='design-grid'>
                <div className='small-card design-app'>
                    <h2> App Design </h2>
                    <Link to = '/app'> View projects </Link>
                </div>
                <div className='small-card design-graphic'>
                    <h2> Graphic Design </h2>
                    <Link to = '/graphic'> View projects </Link>
                </div>
        </section>
    );
}

export default Design;