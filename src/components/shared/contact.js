import React from 'react'

const Contact = () => {
    return ( 
        <section className="contact">
            <div className="contact-container">
                <div className="content-left">
                    <h2> Let's talk about your project</h2>
                    <p>
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your 
                        business grow.
                    </p>
                </div>
                <div className='contact-button'>
                    <a href="/contact"><button className="button-light"> Get in touch</button></a>
                </div>
                
            </div>
            
        </section>
    );
}
 
export default Contact;