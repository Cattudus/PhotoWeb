import React from "react";
import useWindowDimensions from "../../utils/layout/layout";
import "./header.css"
import {InstagramOutlined, MailOutlined, MenuOutlined} from "@ant-design/icons";
import {Button, Dropdown, Menu} from "antd";

function showPopUp(){
        var x = document.getElementById("myLinks");
       if(x){
           if (x.style.display === "block") {
               x.style.display = "none";
           } else {
               x.style.display = "block";
           }
       }
}

export const Header = () => {
    const {width} = useWindowDimensions();
    if (width >= 900) {
        return (<div style={{height: '25vh'}}>
            <div className="header">
                <div className="header-text">
                    Geli Knaeble Prochazková <span style={{fontSize: '60px'}}>|</span> Wedding photographer
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem',paddingLeft: '2rem'}}>
                <a href="https://www.instagram.com/mariquita_photography/">
                <InstagramOutlined style={{paddingRight: '2rem', fontSize: '23px'}} />
                </a>
                <MailOutlined style={{paddingLeft: '2rem', fontSize: '23px'}}/>
            </div>
            <div className="navigation">
                <div className="nav-item">
                    <a href="#AboutMe">About Me</a>
                </div>
                <div className="nav-item">
                    <a href="#myWork">My Work</a>
                </div>
                <div className="nav-item">
                    <a href="">Prices</a>
                </div>
            </div>
        </div>)
    } else {
        return (<div className="small-header">
            <div className="header-button">
                <button className="nav-button" onClick={showPopUp}><MenuOutlined style={{fontSize: '18px'}}/></button>
            </div>
            <div id="myLinks" className="navigation-popup">
                <div className="nav-item" style={{paddingBottom: '10px', paddingTop: '10px'}}>
                    <a>Home</a>
                </div>
                <div className="nav-item" style={{paddingBottom: '10px'}}>
                    <a href="#AboutMe">About Me</a>
                </div>
                <div className="nav-item" style={{paddingBottom: '10px'}}>
                    <a href="#myWork">My Work</a>
                </div>
            </div>
            <div className="header-text-small">
                <div className="small-text"> Geli Knaeble Prochazková
                    <div className="vl">
                        <div className="small-vl"/>
                    </div>
                    <div>Wedding photographer</div>
                </div>
            </div>
            <div className="header-socials">
                <div style={{paddingRight: '0.5rem'}}>
                    <a href="https://www.instagram.com/mariquita_photography/">
                    <InstagramOutlined style={{fontSize: '21px'}} />
                    </a>
                </div>
                <div>
                    <MailOutlined style={{fontSize: '21px'}} />
                </div>
            </div>
        </div>)
    }
}
export const HeaderGallery = () => {
    const {width} = useWindowDimensions();
    if (width >= 900) {
        return (<div style={{height: '25vh'}}>
            <div className="header">
                <div className="header-text">
                    Geli Knaeble Prochazková <span style={{fontSize: '60px'}}>|</span> Wedding photographer
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem',paddingLeft: '2rem'}}>
                <a href="https://www.instagram.com/mariquita_photography/">
                    <InstagramOutlined style={{paddingRight: '2rem', fontSize: '23px'}} />
                </a>
                <MailOutlined style={{paddingLeft: '2rem', fontSize: '23px'}}/>
            </div>
            <div className="navigation">
                <div className="nav-item">
                    <a href="PhotoWeb">Home</a>
                </div>
            </div>
        </div>)
    } else {
        return (<div className="small-header">
            <div className="header-button">
                <button className="nav-button" onClick={showPopUp}><MenuOutlined style={{fontSize: '18px'}}/></button>
            </div>
            <div id="myLinks" className="navigation-popup">
                <div className="nav-item" style={{paddingBottom: '10px', paddingTop:'10px'}}>
                    <a href="PhotoWeb">Home</a>
                </div>
            </div>
            <div className="header-text-small">
                <div className="small-text"> Geli Knaeble Prochazková
                    <div className="vl">
                        <div className="small-vl"/>
                    </div>
                    <div>Wedding photographer</div>
                </div>
            </div>
            <div className="header-socials">
                <div style={{paddingRight: '0.5rem'}}>
                    <a href="https://www.instagram.com/mariquita_photography/">
                        <InstagramOutlined style={{fontSize: '21px'}} />
                    </a>
                </div>
                <div>
                    <MailOutlined style={{fontSize: '21px'}} />
                </div>
            </div>
        </div>)
    }
}
