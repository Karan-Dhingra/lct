import React from 'react'
import "./About.css"
import insta from "./media/svg/instagram.svg"
import fb from "./media/svg/facebook.svg"
import git from "./media/svg/github.svg"
import li from "./media/svg/linkedin.svg"
import twitter from "./media/svg/twitter.svg"
import yt from "./media/svg/youtube.svg"
import me from "./media/me.jpg"

export const About = () => {
    return (
        <div className="body-about">
            <h1 className="heading-about-me">About Me</h1>
            <div className="block-about">
                <div className="my-image">
                    <img src={me} alt="me" className="me-image" width="100%" height="100%"/>
                </div>
                <div className="content-about">
                    <div className="contact-about-body">
                        <div className="content-part-1">
                            <h2>Karan Dhingra</h2>
                            <p className="student">Student</p>
                            <button className="contact-me">Contact Me</button>
                            <p className="contact-body">Computer science student of Badge 2020-2024 passionate about developing user-friendly software applications. We will share all Study Material and all the Error and their Solutions. Follow Us on Social Media to get Latest Updates.</p>
                        </div>

                        <div className="content-part-2">
                            <h4><b>Skills</b></h4>
                            <ul>
                                <li>
                                    CPP-Programming Language
                                </li>
                                <li>
                                    Java-Programming Language
                                </li>
                                <li>
                                    Python-Programming Language
                                </li>
                                <li>
                                    C-Programming Language
                                </li>
                                <li>
                                    Android Development
                                </li>
                                <li>
                                    Web Development
                                </li>
                                <li>
                                    Video Editing
                                </li>
                            </ul>

                            <h4><b>Past Experience</b></h4>
                            <ul>
                                <li>
                                    Mozilla Chandigarh - Volunteer
                                </li>
                                <li>
                                    Dexignare - Volunteer
                                </li>
                                <li>
                                    NEO - Campus Ambassador
                                </li>
                            </ul>
                        </div>

                        <div className="content-part-3">
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" src={insta} height="30px" width="30px" alt="" />
                            </div>
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" src={fb} height="30px" width="30px" alt="" />
                            </div>
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" src={li} height="30px" width="30px" alt="" />
                            </div>
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" src={yt} height="30px" width="35px" alt="" />
                            </div>
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" src={twitter} height="30px" width="30px" alt="" />
                            </div>
                            <div className="social-media-icons-contact-">
                                <img className = "contact-social" className="social-icon-hover" src={git} height="30px" width="30px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
