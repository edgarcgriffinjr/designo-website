import React from 'react'

import Layout from '../components/layout'
import Form from '../components/contact/form'
import LocaButtons from '../components/shared/locationButton'

const Contact = () => {
    return ( 
        <Layout>
            <main className="interior contact">
                <Form />
                <LocaButtons />
            </main>
        </Layout>
    );
}
 
export default Contact;