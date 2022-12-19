import React from 'react'

import select_all from '../images/select_all.png'
import click_select from '../images/click_select.png'
import speaker_only from '../images/speaker_only.png'
import limited from '../images/limited.png'
import videos_off from '../images/videos_off.png'



export const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="white"
         className="bi bi-info-circle"
         viewBox="0 0 18 18">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
)
export const MembersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="white" className="bi bi-people"
         viewBox="0 0 18 18">
        <path
            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>
)
export const ChatTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="white" className="bi bi-chat-text"
         viewBox="0 0 18 18">
        <path
            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
        <path
            d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
    </svg>
)
export const ShareScreenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}} viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path fill="white"
              d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"/>
    </svg>
);

export const ToggleCameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16">
        <path fill="white"
            d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
        <path fill="white"
            d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
    </svg>
)

export const MicOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 24 24">
        <path fill="white"
              d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
)
export const MicrophoneOnIcon = (props) => (
    <svg focusable="false" width={props.size} height={props.size} viewBox="0 0 24 24" fill="white"
         className="Hdh4hc cIGbvc NMm5M">
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
        <path
            d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
    </svg>
)

export const MicrophoneOffIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="red"
         className="Hdh4hc cIGbvc">
        <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
        <path
            d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
    </svg>
)
export const Copy = () => (
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path />
        <path fill="white" d="M9 3.25C5.82436 3.25 3.25 5.82436 3.25 9V16.1069C3.25 16.5211 3.58579 16.8569 4 16.8569C4.41421 16.8569 4.75 16.5211 4.75 16.1069V9C4.75 6.65279 6.65279 4.75 9 4.75H16.0129C16.4271 4.75 16.7629 4.41421 16.7629 4C16.7629 3.58579 16.4271 3.25 16.0129 3.25H9Z"/>
        <path fill="white" d="M18.4026 6.79326C15.1616 6.43104 11.8384 6.43104 8.59748 6.79326C7.6742 6.89645 6.93227 7.62304 6.82344 8.55348C6.43906 11.84 6.43906 15.16 6.82344 18.4465C6.93227 19.377 7.6742 20.1035 8.59748 20.2067C11.8384 20.569 15.1616 20.569 18.4026 20.2067C19.3258 20.1035 20.0678 19.377 20.1766 18.4465C20.561 15.16 20.561 11.84 20.1766 8.55348C20.0678 7.62304 19.3258 6.89645 18.4026 6.79326ZM8.76409 8.28398C11.8943 7.93413 15.1057 7.93413 18.2359 8.28398C18.4733 8.3105 18.6599 8.49821 18.6867 8.72773C19.0576 11.8984 19.0576 15.1016 18.6867 18.2723C18.6599 18.5018 18.4733 18.6895 18.2359 18.716C15.1057 19.0659 11.8943 19.0659 8.76409 18.716C8.52674 18.6895 8.34013 18.5018 8.31329 18.2723C7.94245 15.1016 7.94245 11.8984 8.31329 8.72773C8.34013 8.49821 8.52674 8.3105 8.76409 8.28398Z" />
    </svg>

)

export const MicOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 24 24">
        <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
        <path fill="white"
              d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
    </svg>
)

export const CamOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="white"
              d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
    </svg>
)

export const CamOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 24 24">
        <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
        <path fill="white"
              d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/>
    </svg>
)

export const SpeakerOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  fill="white" className="bi bi-volume-up"
         viewBox="0 0 16 16">
        <path
            d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path
            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path
            d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
    </svg>
)

export const SpeakerOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}  fill="white" className="bi bi-volume-mute"
         viewBox="0 0 16 16">
        <path
            d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
    </svg>
)

export const SelectAll = () => (
    <img src={select_all} width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16"/>
)

export const ClickSelect = () => (
    <img src={click_select} width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16"/>
)

export const SpeakerOnly = () => (
    <img src={speaker_only} width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16"/>
)

export const Limited = () => (
    <img src={limited} width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16"/>
)

export const VideosOff = () => (
    <img src={videos_off} width="22" height="22" style={{verticalAlign: 'middle'}}  viewBox="0 0 16 16"/>
)

export const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="35 -25 235 245">
        <rect width="200" height="200" fill="none"/>
        <path
            d="M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z"
            fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
    </svg>
)
