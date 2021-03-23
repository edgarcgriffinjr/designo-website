import React from 'react'

import Layout from '../components/layout'
import Locations from '../components/location/locations'
import Contact from '../components/shared/contact'

const Location = () => {
    return ( 
        <Layout>
            <main className="interior">
                <Locations />
                <Contact />
            </main>
        </Layout>
    );
}
 
export default Location;