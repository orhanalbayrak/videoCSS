import React from 'react';
import './WindowLayouts.scss'
import Video from "./Video";

const WindowLayouts = () => {
    const subVideos = (vName) => {
        return (
            <div className={vName}>

                <video controls autoPlay name="media">
                    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
    return (
        <div className="windowLayouts">

            <div>
                <div className="video-container">
                    <Video/>
                    <Video/>
            {/*    /!*    {subVideos("div1")}*!/*/}
            {/*    /!*    {subVideos("div1")}*!/*/}
            {/*    /!*    {subVideos("div1")}*!/*/}
            {/*        <div className="video-wrapper">*/}
            {/*            {subVideos("div1")}*/}
            {/*        </div>*/}
                </div>
            </div>
        </div>
    )
}

export default WindowLayouts;



