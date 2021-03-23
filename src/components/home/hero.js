import React from 'react'

import phone from '../../assets/home/desktop/image-hero-phone.png'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-container">
                <div className='hero-left'>
                    <h1>
                        Award-winning custom designs and digital branding solutions
                    </h1>

                    <p>
                        With over 10 years in the industry, we are eexperiend inc reating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>

                    <a href="/about"><button className='button-light'> Learn More </button></a>
                </div>
                <div className='hero-right'>
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </section>
    );
}

export default Hero;