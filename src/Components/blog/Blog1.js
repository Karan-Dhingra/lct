import React from 'react'
import './Blog4.css'
import img1 from '../media/Blog/1_1.png'
import img2 from '../media/Blog/1_2.png'
import img3 from '../media/Blog/1_3.png'
import img4 from '../media/Blog/1_4.png'
import img5 from '../media/Blog/1_5.png'

export const Blog1 = () => {
    return (
        <div className="container-blogs">
            <h1 className="title-top">No Module named PyAudio</h1>
            <div className="body">
                <p>You tried <b>pip install PyAudio</b> it doesn’t works Follow these steps to <b>handle</b> this Error.</p>
                <div className="li-image">
                    <img src={img1} alt="" className="li-image" />
                </div>
                <p><b>PyAudio</b> is a set of Python bindings for PortAudio, a cross-platform C++ library interfacing with audio drivers.</p>
                <p>I faced issue while installing it and I have followed these steps and this works for me. I try to explain you simply. You can use this method for any Library not Just PyAudio step will be same.</p>
                <br />
                <h3>While installing <b>PyAudio</b> we face <b>error</b>. It shows like above image. To solve this you have to Follow these Steps: –</h3>
                <ol>
                    <li>
                        <p className="li-para">Go on google and search for <b>PyAudio Unofficial</b> and click on first Link.</p>
                        <div className="li-image">
                            <img src={img2} alt="" className="li-image" />
                        </div>
                    </li>

                    <li>
                        <p className="li-para">Now search for <b>PyAudio</b> using <b>(ctrl + F)</b> to Find the PyAudio, then click over it. It seems to be like</p>
                        <div className="li-image">
                            <img src={img3} alt="" className="li-image" />
                        </div>
                    </li>

                    <li>
                        <p className="li-para"> Click on it then choose .whl file as per you installed <b>Python version</b> make sure you have downloaded Correct one (Here, -cp39 means Python <b>version 3.9</b>).</p>
                        <div className="li-image">
                            <img src={img4} alt="" className="li-image" />
                        </div>
                    </li>

                    <li>
                        <p className="li-para">After installing it you have to add file location (i.e., add to path) via System Variables.</p>
                    </li>

                    <li>
                        <p className="li-para"> On <b>Windows</b> select file using <b>shift and right Click</b>. (Shift + Right Click) then open with <b>PowerShell</b>. And write name of the <b>.whl file</b>. then Press Enter.</p>
                        <div className="li-image">
                            <img src={img5} alt="" className="li-image" />
                        </div>
                    </li>

                    <li>
                        <p className="li-para"> Then it will start Downloading and that’s it. Your PyAudio is know Installed you can use it. you may need to restart.</p>
                    </li>

                </ol>
                <p>If you faces any type of issue make sure to inform me via Comments. As, this issue was faced by me many times and I resolved it as I told and this works for me.</p>
                <p className=" ending-page ">Don’t Forget to comment as it will <b>motivate us too</b>. Follow our Blogs to get Updated.</p>
            </div>
        </div>
    )
}

export default Blog1
