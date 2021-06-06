import React from 'react'
import { Carousel_Custom } from "./Carousel_Custom";
import "./Home_Content.css"
import logo1 from "./media/Languages/1.png"
import logo2 from "./media/Languages/2.png"
import logo3 from "./media/Languages/3.png"
import logo4 from "./media/Languages/4.png"
import logo5 from "./media/Languages/5.png"
import logo6 from "./media/Languages/6.png"

import tech1 from "./media/Tech/1.png"
import tech2 from "./media/Tech/2.png"
import tech3 from "./media/Tech/3.png"
import tech4 from "./media/Tech/4.png"  
// import tech5 from "./media/Tech/5.png"

import logo from "./media/Blog.png"

export const Home_Content = () => {
    return (
        <div className="container-new">
            <Carousel_Custom/>
            {/* <!-- CARDSSSS --> */}
            <div className="box2 block-cards-lang">
                {/* <!-- Card 1 to 3 --> */}
                <h1>Programming Language 2021</h1>
                <div className="six-cards">
                    <div className="card-group-three">
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo1} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Java</h5>
                                    <p className="card-text">Java can be used to create complete applications that may run on a single computer or be distributed among servers and clients in a network</p>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </div> --> */}
                        </div>
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo2} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Python</h5>
                                    <p className="card-text">Python is a general-purpose language used for programming and software development, web development, Data Science and many more.</p>
                                </div>

                            </div>
                            {/* <!-- <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div> --> */}
                        </div>
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo3} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">C++</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer">
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                    </div> --> */}
                        </div>
                    </div>
                    {/* <!-- Card 4 to 6 --> */}
                    <div className="card-group-three">
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo4} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Kotlin</h5>
                                    <p className="card-text">Kotlin is a general purpose, free, open source programming language and used for Android development .</p>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer">
                                                            <small className="text-muted">Last updated 3 mins ago</small>
                                                        </div> --> */}
                        </div>
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo5} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Swift</h5>
                                    <p className="card-text">SWIFT is a vast messaging network used by banks and other financial institution quickly, used for IOS development.</p>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div> --> */}
                        </div>
                        <div className="cards">
                            <div className="sub-card">
                                <img className="img" src={logo6} height="300px" width="300px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Node.Js</h5>
                                    <p className="card-text">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
                            </p>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer">
                                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                                </div> --> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="box1 tech-company">
                {/* <!-- Tech Company --> */}
                <div className="circle">
                    <img className="img" src={tech1} height="250px" width="250px" className="card-img-top" alt="..." />
                </div>

                <div className="circle">
                    <img className="img" src={tech2} height="250px" width="250px" className="card-img-top" alt="..." />
                </div>

                <div className="circle">
                    <img className="img" src={tech3} height="250px" width="250px" className="card-img-top" alt="..." />
                </div>

                <div className="circle">
                    <img className="img" src={tech4} height="250px" width="250px" className="card-img-top" alt="..." />
                </div>

            </div>

            <div className="box2 blog-home-container">
                {/* <!-- Image and Link to Blogs --> */}
                <div className="blog-home">
                    <div className="image blog-cont">
                        <img src={logo} height="300px" width="500px" alt="BLOG" />
                    </div>

                    <div className="text-blog-home blog-cont">
                        <h1>ABOUT THE BLOG</h1>
                        <p>The LetCodeTogether is created by Karan Dhingra, CSE student and the owner of YouTube Channel. Subscribe us to stay Updated with Latest Tips See my Blogs and this is <b>FREE</b></p>
                        <button className="btn-blog" href="#">BLOG</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
