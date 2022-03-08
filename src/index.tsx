import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WeddingCeremony} from "./components/GalleryViews/WeddingCeremony";
import {WeddingPreparations} from "./components/GalleryViews/WeddingPreparations";
import {YouTwo} from "./components/GalleryViews/YouTwo";
import {WeddingEmotions} from "./components/GalleryViews/WeddingEmotions";
import {WeddingCelebration} from "./components/GalleryViews/WeddingCelebration";
import {YoungOnes} from "./components/GalleryViews/YoungOnes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/WeddingCeremony" element={<WeddingCeremony/>} />
                <Route path="/WeddingPreparation" element={<WeddingPreparations/>} />
                <Route path="/YouTwo" element={<YouTwo/>} />
                <Route path="/WeddingEmotions" element={<WeddingEmotions/>} />
                <Route path="/WeddingCelebration" element={<WeddingCelebration/>} />
                <Route path="/YoungOnes" element={<YoungOnes/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
