import React from 'react'

import Layout from '../components/layout'
import Top from '../components/web/topCard'
import Content from '../components/web/content'
import Contact from '../components/shared/contact'
import Design from '../components/web/design'

const Web = () => {
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
 
export default Web;