import React from 'react'
import "./Footer.css"
import {
    Link
} from "react-router-dom";
import insta from "./media/svg/instagram.svg"
import fb from "./media/svg/facebook.svg"
import git from "./media/svg/github.svg"
import li from "./media/svg/linkedin.svg"
import twitter from "./media/svg/twitter.svg"
import yt from "./media/svg/youtube.svg"


export const Footer = () => {
    return (
        <footer className="footer-design">
            <div className="heading">
                <h1>Let's Get in Touch</h1>
                <div className="line-footer"></div>
            </div>

            <div className="footer-form">
                <h1>Subscribe Us
                    <h4>(For latest updates)</h4>
                </h1>
                <form className="form-footer">
                    <div className="form-row">
                        <div className="form-group col-md-6 name">
                            <input type="text" className="form-control" id="inputText" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6 name">
                            <input type="text" className="form-control" id="inputText" placeholder="Second Name" />
                        </div>
                    </div>
                    <div className="form-group e-mail">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" width="100%" />
                    </div>
                    <button type="submit" className="subscribe-footer" width="100%">SUBSCRIBE</button>
                </form>
            </div>

            <div className="footer-part">
                <div className="content-footer">
                    <h1>Content</h1>
                    <p><Link to="/">Home</Link>| <Link to="/blog">Blog</Link>| <Link to="/about">About</Link>| <Link to="/contact">Contact</Link>| <Link to="/">Signup</Link>| <Link to="/">Login</Link></p>
                </div>

                <div className="about-me">
                    <h1>About Me</h1>
                    <p>Computer science student of Batch 2020-2024 passionate about developing user-friendly software applications.</p>
                </div>
            </div>

            <div className="social-copy">
                <div className="copy">
                    &copy; Copyright 2021| LCT| Karan Dhingra 
            </div>

                <div className="social-icons">
                    <div className="social-media-icons">
                        <a href="https://www.instagram.com/karan__dhingra__/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} height="30px" width="30px" alt="" />
                        </a>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/karan.dhingra.1297/" target="_blank" rel="noopener noreferrer">
                            <img src={fb} height="30px" width="30px" alt="" />
                        </a>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/in/karan-dhingra-4bb854143/" target="_blank" rel="noopener noreferrer">
                            <img src={li} height="30px" width="30px" alt="" />
                        </a>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://www.youtube.com/c/KaranDhingra" target="_blank" rel="noopener noreferrer">
                            <img src={yt} height="30px" width="35px" alt="" />
                        </a>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://twitter.com/KaranDh25556071" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} height="30px" width="30px" alt="" />
                        </a>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://github.com/Karan-Dhingra" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon-hover" src={git} height="30px" width="30px" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
