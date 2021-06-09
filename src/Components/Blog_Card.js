import React from 'react'
import "./Blog.css"
// import logo4 from "./media/blog-topic.png"
import {
    Link
} from "react-router-dom";
var blog = '/blog'

const Blog_Card = ({ data }) => {
    return (
        <Link to={blog + data.index}>
            <div className="blog-blog blog-1">
                <img src={data.img} alt="Logo" height="500px" width="600px" />
                <h4 className="blog-title" >{data.title}</h4>
                <p className="blog-metadata">{data.para}</p>
            </div>
        </Link>
    )
}

export default Blog_Card
