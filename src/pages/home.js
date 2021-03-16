import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/home/hero'

const Home = () => {
    return ( 
        <Layout>
            <main className='interior'>
                <Hero />
            </main>
        </Layout>
    );
}
 
export default Home;