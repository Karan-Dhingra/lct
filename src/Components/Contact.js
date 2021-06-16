import React from 'react'
import { Helmet } from 'react-helmet'
import { ReactSEOMetaTags } from 'react-seo-meta-tags'
import "./Contact.css"
import Logo from '../contact.jpg';

export const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
                <title>Contact</title>
                <meta name="description" content="I am Karan Dhingra founder of LetCodeTogether you can contact me through here." />
                <meta name="keywords" content="contact, contact-me, karan-dhingra, kd, karan, karandhingra, call, phone, message" />
                <meta name="author" content="Karan Dhingra" />
            </Helmet>
            <div className="container-new-contact">
                <h1 className="heading">Contact Me</h1>
                <p className="sub-heading">Don’t hesitate to reach out with the contact information below, or send a message using the form.</p>
                <div className="block-1">
                    <div className="image-contact" id="image-div">
                        <h4>Get in Touch</h4>
                        <img src={Logo} height="800" width="640" alt="contact" />
                    </div>
                    <div className="contact-form">
                        <h4>Message Us</h4>
                        <iframe className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSejn-zuRLcWLTmrp3s3C1vZZKP-CgU-ckSVXpmoBWgf5jgDvw/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        {/* <form>
                            <div className="form-group-new">
                                <label className="label-name" for="">Name</label>
                                <input type="text" className="form-control" placeholder="aditya raj" />
                            </div>
                            <div className="form-group-new add-margin">
                                <label className="label-name" for="">Email address</label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                            <div className="form-group-new add-margin">
                                <label className="label-name" for="">Subject</label>
                                <input type="text" className="form-control" placeholder="subject" />
                            </div>
                            <div className="form-group-new add-margin">
                                <label className="label-name" for="">Message</label>
                                <textarea className="form-control" rows="6"></textarea>
                            </div>
                            <button className="submit-contact">SUBMIT</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
