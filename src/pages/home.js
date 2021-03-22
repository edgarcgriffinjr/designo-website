import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Design from '../components/home/design'
import Desc from '../components/home/desc'
import Contact from '../components/shared/contact'

const Home = () => {
    return ( 
        <Layout>
            <main className='interior'>
                <Hero />
                <Design />
                <Desc />
                <Contact />
            </main>
        </Layout>
    );
}
 
export default Home;