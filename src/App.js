import './App.scss';
import Video from "./Video";
import {useEffect, useRef, useState} from "react";
import React from "react";
import {animated, useSpring} from '@react-spring/web'
import {useDrag} from "@use-gesture/react";

function App() {
    const [isPos1, setIsPos1] = useState(false);
    const [videoCounter, setVideoCounter] = useState(0)
    const [subClassName, setSubClassName] = useState("sub-video")
    const [videoList, setVideoList] = useState([])
    const [isOnePart, setIsOnePart] = useState(false)
    const compConst = 7;
    const [{x, y, width, height}, api] = useSpring(() => ({
        x: 0, y: 0, width: 234,
        height: 132
    }))
    const mainVideoRef = useRef(null)
    const dragEl = useRef(null)
    const bind = useDrag((state) => {
            const isResizing = (state?.event.target === dragEl.current)
            if (isResizing) {
                api.set({
                    width: state.offset[0],
                    height: state.offset[1],
                })
            } else {
                api.set({
                    x: state.offset[0],
                    y: state.offset[1],
                })
            }

        }, {
            from: (event) => {
                const isResizing = (event.target === dragEl.current);
                if (isResizing) {
                    return [width.get(), height.get()];
                } else {
                    return [x.get(), y.get()]
                }
            },
            bounds: (state) => {
                const isResizing = (state?.event.target === dragEl.current)
                const mainBodyHeight = mainVideoRef.current?.clientHeight ?? 0;
                const mainBodyWidth = mainVideoRef.current?.clientWidth ?? 0;
                if (isResizing) {
                    return {

                        top: 0,
                        left: 0,
                        right: mainBodyWidth - x.get(),
                        bottom: mainBodyHeight - y.get(),
                    }
                } else {
                    return {
                        top: 0,
                        left: 0,
                        right: mainBodyWidth - width.get(),
                        bottom: mainBodyHeight - height.get(),
                    }
                }
            }
        }
    )

    useEffect(() => {
        if (videoList.length == 1) {
            setIsOnePart(true)
        } else {
            setIsOnePart(false)
        }
    }, [videoList.length]);

    const subVideos = (vName, key) => {
        if (videoCounter < compConst)
            return (
                <>
                    <div className={vName}>
                        <video key={key} controls autoPlay name="media">
                            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </>
            )
    }

    const addVideo = () => {
        setSubClassName(`sub-video-${videoCounter}`)
        setVideoList([...videoList, subClassName])
        setVideoCounter(videoCounter + 1)
        setIsPos1(true)
    }

    const removeVideo = () => {
        videoList.pop()
        console.log(videoList)
        if (videoCounter === 1) {
            setIsPos1(false)
        }
        if (videoCounter > 0) {
            setVideoCounter(videoCounter - 1)
            setSubClassName(`sub-video-${videoCounter}`)
        } else {
            alert("Could not removed!!!")
        }
    }
    return (
        <div className="App">
            <div className="body">
                <div className="main-body">
                    <div className="main-video" ref={mainVideoRef}>
                        <animated.div style={{x, y, width, height}}
                                      className={`inLinePart ${isOnePart ? '' : 'inLinePart-hidden'}`}{...bind()}>
                            <video style={{
                                width: "100%",
                                height: "100%",
                            }} autoPlay name="media">
                                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>
                            </video>
                            <div className="resizerInLinePart" ref={dragEl}>
                            </div>
                        </animated.div>
                        {/*<Video/>*/}
                        <video  controls autoPlay name="media">
                            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>
                        </video>
                        {/*<video  controls autoPlay name="media">*/}
                        {/*    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>*/}
                        {/*</video>*/}
                        {/*<video  controls autoPlay name="media">*/}
                        {/*    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>*/}
                        {/*</video>*/}
                        {/*<video  controls autoPlay name="media">*/}
                        {/*    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"/>*/}
                        {/*</video>*/}
                        <div className="participantTitle">Orhan</div>
                    </div>
                    {isPos1 ? (
                        <div className="sub-videos">
                            {videoList.map((v, i) => subVideos(v, i))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <button id="addButton" onClick={() => {
                addVideo()
            }}>Add
            </button>

            <button id="removeButton" onClick={() => {
                removeVideo()
            }}>Remove
            </button>
            {/*{videoCounter}*/}
        </div>
    );
}


export default App;
