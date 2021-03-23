import React from 'react'

const Form = () => {
    return ( 
        <section className="contact-hero">
            <div className="form-grid">
                <div className="contact-left">
                    <h1> Contact Us </h1>
                    <p>
                        Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                    </p>
                </div>

                <form className="contact-form">
                    <input type="text" id="name" required="required" 
                    dataerror= "This cannot be blank"placeholder="Name" />
                    <input type="email" id="email" required="required" placeholder="Email Address"/>
                    <input type="text" id="number" required="required" placeholder="Phone Number" />
                    <textarea id="message" required="required" placeholder="Your Message" cols="20" rows="5" />
                    <button className="button-light" type="submit"> Submit </button>
                </form>
            </div> 
        </section>
    );
}
 
export default Form;