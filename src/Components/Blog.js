import React from 'react'
import "./Blog.css"
import logo_upper from "./media/blog-heading.jpg"
// import logo from "./media/blog-topic.png"
import Blog_Card from "./BlogCard"
import Data from "./Data"
import { Helmet } from 'react-helmet'

export const Blog = () => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Blog</title>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
                <meta name="description" content="Hey, It's Karan Dhingra and its my Blog Page where all of my Blogs are written." />
                <meta name="keywords" content="blog, blogs, karan-dhingra, kd, karan, karandhingra, call, phone, message, android, webdevelopment, development, roadmap, strategy, linkedin, github, karan-dhingra.github.io, lct" />
                <meta name="author" content="Karan Dhingra" />
                <meta name="copyright" content="Karan Dhingra" />
            </Helmet>
            <div className="container-blog">
                <div className="upper-blog-heading">
                    <h2 className="heading-blog">BLOG</h2>
                    <img className="image-blog" img src={logo_upper} height="15%" width="100%" alt="" />
                </div>
                <div className="blog-content-blog">
                    {Data.map((data) => {
                        return <Blog_Card data={data} />
                    })}
                </div>
            </div>
        </>
    )
}
