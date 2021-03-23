import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/about/hero'
import Talent from '../components/about/talent'
import LocaButtons from '../components/shared/locationButton'
import Deal from '../components/about/deal'
import Contact  from '../components/shared/contact'
const About = () => {
    return (
        <Layout>
            <main className="interior">
                <Hero />
                <Talent />
                <LocaButtons />
                <Deal />
                <Contact />
            </main>
        </Layout>        
    );
}

export default About;