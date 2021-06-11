import React from 'react'
import "./Contact.css"
import Logo from '../contact.jpg';

export const Contact = () => {
    return (
        <div>
            <div className="container-new-contact">
                <h1 className="heading">Contact Me</h1>
                <p className="sub-heading">Don’t hesitate to reach out with the contact information below, or send a message using the form.</p>
                <div className="block-1">
                    <div className="image-contact" id="image-div">
                        <h4>Get in Touch</h4>
                        <img src={Logo} height="90%" width="100%" alt="contact" />
                    </div>
                    <div className="contact-form">
                        <h4>Message Us</h4>
                        <form>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
