import React, { useState } from "react";
import './CarouselCustom.css'
import { images } from './Carousel'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



export const Carousel_Custom = () => {
    const [currImg, setCurrImg] = useState(0);
    return (
        <div className="box1 block-2">
            <h1>Some Best Clips</h1>

            <div className="carousel">
                {/* <a href="https://youtu.be/BgLyxNohwX4">
                    </a> */}

                <div
                    className="carouselInner"
                    style={{ backgroundImage: `url(${images[currImg].img})` }}
                >
                    <div
                        className="left"
                        onClick={() => {
                            currImg > 0 && setCurrImg(currImg - 1);
                        }}
                    >
                        <ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="center">
                        <a href={images[currImg].link}><h1>CLICK HERE</h1></a>
                            {/* <p>{images[currImg].subtitle}</p> */}
                        </div>
                    <div
                        className="right"
                        onClick={() => {
                            currImg < images.length - 1 && setCurrImg(currImg + 1);
                        }}
                    >
                        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
