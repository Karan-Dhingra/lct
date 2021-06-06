import React from 'react'
import { Header } from "./Header";
import "./Home_First_Box.css"

export const Home_First_Box = () => {
    return (
        <div class="first-box">
            <Header/>
            <div class="top-title">
                <div class="line-upper"></div>
                <div class="top-text">
                    <p>"All our dreams can come true, if we have the courage to pursue them."</p>
                </div>
                <div class="line-bottom"></div>
            </div>
        </div>
    )
}
