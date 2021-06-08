import React from 'react'
import "./Blog.css"
import logo_upper from "./media/blog-heading.jpg"
// import logo from "./media/blog-topic.png"
import Blog_Card from "./Blog_Card"
import Data from "./Data"
import {
    Link
} from "react-router-dom";

export const Blog = () => {
    return (
        <div className="container-blog">
            <div className="upper-blog-heading">
                <h2 className="heading-blog">BLOG</h2>
                <img className="image-blog" img src={logo_upper} height="600px" width="100%" alt="" />
            </div>
            <div className="blog-content-blog">
                {Data.map((data) => {
                    return <Blog_Card data={data} />
                })}
            </div>
        </div>
    )
}
