import React, {useState, useRef} from 'react';
import "./Footer.css"
import {Button} from "primereact/button";
import {Menu} from 'primereact/menu';
import {Toast} from 'primereact/toast';
import {
    MicrophoneOnIcon,
    MicrophoneOffIcon,
    CameraOnIcon,
    CameraOffIcon,
    SpeakerOnIcon,
    SpeakerOffIcon,
    ShareScreenIcon,
    LogoutIcon,
    SelectAll, Copy, InfoIcon, MembersIcon, ChatTextIcon,
} from "./Icons";
import {ConfirmDialog} from 'primereact/confirmdialog';


const Footer = () => {
    const menu = useRef(null);
    const toast = useRef(null);
    const [isMicOpen, setIsMicOpen] = useState(true);
    const [isSpeakerOpen, setIsSpeakerOpen] = useState(true);
    const [isCameraOpen, setIsCameraOpen] = useState(true);
    const [isShare, setIsShare] = useState(true);
    const [isMenuListVisible, setIsMenuListVisible] = useState(true)
    const [visible, setVisible] = useState(false)
    const items = [
        {
            label: 'Mikrofonlar',
            items: [
                {
                    label: 'Mikrofon-1',
                    icon: 'pi pi-check',
                    command: () => {
                        toast.current.show({
                            severity: 'success',
                            summary: 'Updated',
                            detail: 'Data Updated',
                            life: 3000
                        });
                    }
                },
                {
                    label: 'Mikrofon-2',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
                }
            ]
        },

    ];

    const accept = () => {
        toast.current.show({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
    }

    const reject = () => {
        toast.current.show({severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000});
    }
    const MicSwitch = () => {
        setIsMicOpen(!isMicOpen);
        console.log(isMicOpen)
    }
    const SpeakerSwitch = () => {
        setIsSpeakerOpen(!isSpeakerOpen);
    }
    const CameraSwitch = () => {
        setIsCameraOpen(!isCameraOpen);
    }
    const ScreenShare = () => {
        setIsShare(!isShare);
        console.log(isShare)
    }
    const OpenMenuList = () => {
        setIsMenuListVisible(!isMenuListVisible);
        console.log(isMenuListVisible)
    }
    return (
        <div className="footer">
            <Toast ref={toast}/>
            <div className="left-buttons">
                <div className="container">
                    <div className="button-container">
                        <Button id="left-button" className="p-button-rounded p-button-info p-button-text"
                                aria-label="User">
                            <div className="menuList-container">
                                <div className={`menuList ${isMenuListVisible ? '' : 'openMenuList'}`}
                                     onClick={() => OpenMenuList()}>
                                    <div>
                                        <span className="line-1"></span>
                                        <span className="line-2"></span>
                                        <span className="line-3"></span>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    {!isMenuListVisible && <>
                        <div className="button-container">
                            <Button id="left-button" className="p-button-rounded p-button-info p-button-text"
                                    aria-label="User"><InfoIcon/>
                            </Button>
                        </div>
                        <div className="button-container">
                            <Button id="left-button" className="p-button-rounded p-button-info p-button-text"
                                    aria-label="User"><MembersIcon/>
                            </Button>
                        </div>
                        <div className="button-container">
                            <Button id="left-button" className="p-button-rounded p-button-info p-button-text"
                                    aria-label="User"><ChatTextIcon/>
                            </Button>
                        </div>
                    </>}
                </div>
            </div>
            <div className="middle-buttons">
                <div className="container">
                    <div className="button-container">
                        <Button id="button" className="p-button-rounded p-button-info p-button-text"
                                aria-label="User" onClick={() => MicSwitch()}>{isMicOpen ? <MicrophoneOnIcon/> :
                            <MicrophoneOffIcon/>}
                        </Button>
                        <div className="upperButton">
                            <Toast ref={toast}></Toast>
                            <Menu model={items} popup ref={menu} id="popup_menu"/>
                            <Button id="rightUpper" icon="pi pi-chevron-up"
                                    className="p-button-rounded p-button-info p-button-text" aria-label="User"
                                    onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu"
                                    aria-haspopup aria-label="User"/>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button id="button" className="p-button-rounded p-button-info p-button-text"
                                aria-label="User" onClick={() => SpeakerSwitch()}>{isSpeakerOpen ?
                            <SpeakerOnIcon/> : <SpeakerOffIcon/>}
                        </Button>
                        <div className="upperButton">
                            <Toast ref={toast}></Toast>
                            <Menu model={items} popup ref={menu} id="popup_menu"/>
                            <Button id="rightUpper" icon="pi pi-chevron-up"
                                    className="p-button-rounded p-button-info p-button-text" aria-label="User"
                                    onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu"
                                    aria-haspopup aria-label="User"/>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button id="button" className="p-button-rounded p-button-info p-button-text"
                                aria-label="User" onClick={() => CameraSwitch()}>{isCameraOpen ? <CameraOnIcon/> :
                            <CameraOffIcon/>}</Button>
                        <div className="upperButton">
                            <Toast ref={toast}></Toast>
                            <Menu model={items} popup ref={menu} id="popup_menu"/>
                            <Button id="rightUpper" icon="pi pi-chevron-up"
                                    className="p-button-rounded p-button-info p-button-text" aria-label="User"
                                    onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu"
                                    aria-haspopup aria-label="User"/>
                        </div>
                    </div>
                    <Button id="button" className="p-button-rounded p-button-info p-button-text"
                            aria-label="User" onClick={() => ScreenShare()}>{isShare ?
                        <ShareScreenIcon color="white"/> :
                        <ShareScreenIcon color="#598EFF"/>}</Button>
                    <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message={<SelectAll/>}
                                   header="Confirmation" accept={accept} reject={reject}></ConfirmDialog>
                    <Button onClick={() => {
                        setVisible(!visible)
                    }} id="button" className="p-button-rounded p-button-info p-button-text"
                            aria-label="User"><SelectAll/></Button>
                    <Button id="button" className="p-button-rounded p-button-danger "><LogoutIcon/></Button>
                </div>
            </div>
            <div className="right">
                <Button className="p-button-info" aria-label="User"><Copy size="23"/></Button>
            </div>
        </div>
    );
}
export default Footer;



