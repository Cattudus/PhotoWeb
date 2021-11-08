import React from 'react';
import './App.css';
import useWindowDimensions from "./utils/layout/layout";
import {Header} from "./components/header/header";
import { Gallery } from './components/Gallery/gallery';


function App() {

    const {width} = useWindowDimensions();
    let vh = '75vh';

    function bodyPadding(width: any) {
        if (width <= 1400) {
            vh = '85vh';
            return 'mobile'
        } else {
            vh = '75vh';
            return 'body'
        }
    }

    return (
        <div className="App">
            <Header/>
            <img style={{height: vh, width: '100vw', objectFit: 'cover'}}
                 src="https://www.eachotherweddingsandevents.com/test/wp-content/uploads/2020/04/slide_home.jpg"/>
            <div className={bodyPadding(width)}>
                <div id="AboutMe" className="about-me">
                    <div style={{
                        paddingTop: '1rem',
                        paddingBottom: '1rem'
                    }}>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="about-me-header">
                        About me
                    </div>
                    <div className="about-me-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec vitae arcu. Curabitur vitae diam
                        non enim
                        vestibulum interdum. Aliquam ornare wisi eu metus. Aenean placerat. Aliquam erat volutpat. Et
                        harum quidem
                        rerum
                        facilis est et expedita distinctio. Aliquam erat volutpat. Phasellus et lorem id felis nonummy
                        placerat.
                        Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Donec quis
                        nibh at
                        felis congue commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                        fugiat nulla
                        pariatur. Nunc tincidunt ante vitae massa. Class aptent taciti sociosqu ad litora torquent per
                        conubia
                        nostra, per
                        inceptos hymenaeos. Praesent in mauris eu tortor porttitor accumsan. Fusce consectetuer risus a
                        nunc.
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '2rem',
                        paddingBottom: '1.5rem'
                    }}>
                        <div className="half-vertical-line">
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img style={{height: '20rem', width: '20rem', objectFit: 'cover'}}
                         src="https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/241123596_5148662648483345_2756332344172430026_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rLS1JWxM5JQAX9WAVK_&_nc_ht=scontent-prg1-1.xx&oh=477be9ad1e536fdc7cfd30c7e54defb3&oe=61AFA961"/>
                </div>

                <div id="myWork">
                    <div className="about-me-header">
                        My Work
                    </div>
                    <Gallery/>
                </div>
            </div>


            <div className="footer">
                <div>
                    Created by Petr Procházka :)
                </div>
            </div>

        </div>
    );
}

export default App;
