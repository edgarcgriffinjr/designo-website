import React from 'react'

import Layout from '../components/layout'
import Top from '../components/app/topCard'
import Content from '../components/app/content'
import Contact from '../components/shared/contact'
import Design from '../components/app/design'

const AppPage = () => {
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
 
export default AppPage;