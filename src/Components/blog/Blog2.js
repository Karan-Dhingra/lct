import React from 'react'
import './Blog4.css'
import img1 from '../media/Blog/4_1.png'
import img2 from '../media/Blog/4_2.png'
import img3 from '../media/Blog/4_3.png'
import img4 from '../media/Blog/4_4.png'
import img5 from '../media/Blog/4_5.png'
import img6 from '../media/Blog/4_6.png'
import { Helmet } from 'react-helmet'


export const Blog2 = () => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
                <title>How to download Python3 in 2021??</title>
                <meta name="description" content="Python is an interpreted high-level general-purpose programming language. Python’s design philosophy emphasizes code readability with its notable use of significant indentation. Follow these steps to download and install Python in your PC/Laptop..." />
                <meta name="keywords" content="download, install, python, 2021, python3, how to install, about, about karan, contact-me, karan-dhingra, kd, karan, karandhingra, call, phone, message, chandigarh university, cu, student, android, webdevelopment, development, roadmap, strategy, linkedin, github, karan-dhingra.github.io, lct" />
                <meta name="author" content="Karan Dhingra" />
            </Helmet>
            <div className="container-blogs">
                <h1 className="title-top">How to download Python3 in 2021??</h1>
                <div className="body">
                    <p>Python is an interpreted high-level general-purpose programming language. Python’s design philosophy emphasizes code readability with its notable use of significant indentation.</p>
                    <p><b>OFFICIAL SITE</b>&rarr; <a className="a-link" href="https://www.python.org/">Python.org</a></p>
                    <p>Latest Version is 3.9</p>
                    <h4><b>Follow these steps to download and install Python in your PC/Laptop..</b></h4>
                    <ol>
                        <li>
                            <p className="li-para">Go to <b><i><a className="a-link" href="https://www.python.org/">Website</a></i></b></p>
                        </li>

                        <li>
                            <p className="li-para">Click on <b>Downloads</b> – As shown below click on Downloads tab</p>
                            <div className="li-image">
                                <img src={img1} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">Choose your <b>Operating System</b> (WINDOWS/ LINUX/ MAC) – We are going to download for Windows. You have to follow same for Mac and Linux.</p>
                            <div className="li-image">
                                <img src={img1} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">This window will appear to you.</p>
                            <div className="li-image">
                                <img src={img2} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">Click on the version you want to download. Latest version may not have all the function so I will prefer you to download lower than Latest. In these scenarios I will prefer you to <b>download 3.7 o 3.8 not 3.9</b>.</p>
                        </li>

                        <li>
                            <p className="li-para">You need to click on Windows Installer based on your system is it 32 or 64 Bit. Marked in diagram</p>
                            <div className="li-image">
                                <img src={img3} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">Clicking this link download will start, when download is finished install the setup in your device..</p>
                            <div className="li-image">
                                <img src={img4} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">
                                <span className="alert-text">*IMPORTANT*</span> Make sure you have ticked the <b>Add to path</b> option while installing SETUP.</p>
                            <div className="li-image">
                                <img src={img5} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">You can do any of installation custom or default its your choice. Preferable is Default. Click on Install now to install the python.</p>
                        </li>

                        <li>
                            <p className="li-para">To check is it installed or not you can go to <b>Command Line or Power shell</b> right click and <b>open with Administrator</b>.</p>
                        </li>

                        <li>
                            <p className="li-para">Type command</p>
                            <div className="li-image">
                                <img src={img6} alt="" className="li-image" />
                            </div>
                        </li>

                        <li>
                            <p className="li-para">Below this you will get the version installed on your device. If facing issue you can contact me from comments block below the post or you can <b>DM me</b> on any of <b>social media</b> link available in footer.</p>
                        </li>
                    </ol>

                    <p className=" ending-page ">Please comment us on this post. We are having more resources like this and many are coming. If facing any doubt or query you can contact us from <b>Contact Us</b> block in above navigation or through footers. Thank you for reading our post.</p>
                </div>
            </div>
        </>
    )
}

export default Blog2
