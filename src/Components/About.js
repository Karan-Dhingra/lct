import React from 'react'
import "./About.css"
import insta from "./media/svg/instagram.svg"
import fb from "./media/svg/facebook.svg"
import git from "./media/svg/github.svg"
import li from "./media/svg/linkedin.svg"
import twitter from "./media/svg/twitter.svg"
import yt from "./media/svg/youtube.svg"
import me from "./media/me.jpg"
import { Helmet } from 'react-helmet'

import {
    Link
} from "react-router-dom";

export const About = () => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
                <title>About Us</title>
                <meta name="description" content="Computer science student of Badge 2020-2024 passionate about developing user-friendly software applications. We will share all Study Material and all the Error and their Solutions. Follow Us on Social Media to get Latest Updates." />
                <meta name="keywords" content="about, about karan, contact-me, karan-dhingra, kd, karan, karandhingra, call, phone, message, chandigarh university, cu, student, android, webdevelopment, development, roadmap, strategy, linkedin, github, karan-dhingra.github.io, lct" />
                <meta name="author" content="Karan Dhingra" />
                <meta name="copyright" content="Karan Dhingra" />
            </Helmet>
            <div className="body-about">
                <h1 className="heading-about-me">About Me</h1>
                <div className="block-about">
                    <div className="my-image">
                        <img src={me} alt="Karan Dhingra" className="me-image" width="100%" height="100%"/>
                    </div>
                    <div className="content-about">
                        <div className="contact-about-body">
                            <div className="content-part-1">
                                <h2>Karan Dhingra</h2>
                                <p className="student">Student</p>
                                <Link to="/contact" ><button className="contact-me"> ContactMe </button></Link>
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
                                    <a href="https://www.instagram.com/karan__dhingra__/" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" src={insta} height="30px" width="30px" alt="" />
                                    </a>
                                </div>
                                <div className="social-media-icons-contact-">
                                    <a href="https://www.facebook.com/karan.dhingra.1297/" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" src={fb} height="30px" width="30px" alt="" />
                                    </a>
                                </div>
                                <div className="social-media-icons-contact-">
                                    <a href="https://www.linkedin.com/in/karan-dhingra-4bb854143/" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" src={li} height="30px" width="30px" alt="" />
                                    </a>
                                </div>
                                <div className="social-media-icons-contact-">
                                    <a href="https://www.youtube.com/c/KaranDhingra" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" src={yt} height="30px" width="35px" alt="" />
                                    </a>
                                </div>
                                <div className="social-media-icons-contact-">
                                    <a href="https://twitter.com/KaranDh25556071" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" src={twitter} height="30px" width="30px" alt="" />
                                    </a>
                                </div>
                                <div className="social-media-icons-contact-">
                                    <a href="https://github.com/Karan-Dhingra" target="_blank" rel="noopener noreferrer">
                                        <img className = "contact-social" className="social-icon-hover" src={git} height="30px" width="30px" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
