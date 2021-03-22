import React from 'react'
import { Link } from 'react-router-dom'

const Design = () => {
    return (
        <section className='card-grid'>
            <div className='bottom-container'>
                <div className='large-card web'>
                    <h2> Web Design </h2>
                    <Link to = '/web'> View projects </Link>
                </div>
                <div className='small-card app'>
                    <h2> App Design </h2>
                    <Link to = '/app'> View projects </Link>
                </div>
                <div className='small-card graphic'>
                    <h2> Graphic Design </h2>
                    <Link to = '/graphic'> View projects </Link>
                </div>
            </div>
        </section>
    );
}

export default Design;