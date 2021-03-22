import React from 'react'

import Layout from '../components/layout'
import Top from '../components/graphic/topCard'
import Content from '../components/graphic/content'
import Contact from '../components/shared/contact'
import Design from '../components/graphic/design'

const Graphic = () => {
    return ( 
        <Layout>
            <main className="interior">
                <Top />
                <Content />
                <Design />
                <Contact />
            </main>
        </Layout>
    );
}
 
export default Graphic;