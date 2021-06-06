import React from 'react'
import "./Blog.css"
import logo_upper from "./media/blog-heading.jpg"
import logo from "./media/blog-topic.png"

export const Blog = () => {
    return (
        <div className="container-blog">
            <div className="upper-blog-heading">
                <h2 className="heading-blog">BLOG</h2>
                <img className="image-blog" img src={logo_upper} height="600px" width="100%" alt="" />
            </div>
            <div className="blog-content-blog">
                <div className="blog-blog blog-1">
                    <img src={logo} alt="" height="500px" width="600px" />
                    <h4 className="blog-title" >Best DSA Course</h4>
                    <p className="blog-metadata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio officiis, accusantium molestias architecto, doloribus deserunt modi recusandae eius assumenda sint culpa nam eligendi atque quo doloremque soluta ullam, tenetur
                    nesciunt ex? Repellat, quam!</p>
                </div>
                <div className="blog-blog blog-2">
                    <img src={logo} alt="" height="500px" width="600px" />
                    <h4 className="blog-title" >Best DSA Course</h4>
                <p className="blog-metadata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio officiis, accusantium molestias architecto, doloribus deserunt modi recusandae eius assumenda sint culpa nam eligendi atque quo doloremque soluta ullam, tenetur
                    nesciunt ex? Repellat, quam!</p>
                </div>
                <div className="blog-blog blog-3">
                    <img src={logo} alt="" height="500px" width="600px" />
                    <h4 className="blog-title" >Best DSA Course</h4>
                <p className="blog-metadata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio officiis, accusantium molestias architecto, doloribus deserunt modi recusandae eius assumenda sint culpa nam eligendi atque quo doloremque soluta ullam, tenetur
                    nesciunt ex? Repellat, quam!</p>
                </div>
                <div className="blog-blog blog-4">
                    <img src={logo} alt="" height="500px" width="600px" />
                    <h4 className="blog-title" >Best DSA Course</h4>
                <p className="blog-metadata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio officiis, accusantium molestias architecto, doloribus deserunt modi recusandae eius assumenda sint culpa nam eligendi atque quo doloremque soluta ullam, tenetur
                    nesciunt ex? Repellat, quam!</p>
                </div>
                <div className="blog-blog blog-5">
                    <img src={logo} alt="" height="500px" width="600px" />
                    <h4 className="blog-title" >Best DSA Course</h4>
                    <p className="blog-metadata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio officiis, accusantium molestias architecto, doloribus deserunt modi recusandae eius assumenda sint culpa nam eligendi atque quo doloremque soluta ullam, tenetur
                    nesciunt ex? Repellat, quam!</p>
                </div>
            </div>
        </div>
    )
}
