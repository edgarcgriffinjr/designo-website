import React from 'react'
import { Link } from 'react-router-dom'

const Design = () => {
    return (
        <section className='design-grid'>
                <div className='small-card design-web'>
                    <h2> Web Design </h2>
                    <Link to = '/web'> View projects </Link>
                </div>
                <div className='small-card design-graphic'>
                    <h2> App Design </h2>
                    <Link to = '/app'> View projects </Link>
                </div>
        </section>
    );
}

export default Design;