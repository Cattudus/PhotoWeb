import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WeddingCeremony} from "./components/GalleryViews/WeddingCeremony";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/WeddingCeremony" element={<WeddingCeremony/>} />
                <Route path="/WeddingPreparation" element={<div>Works</div>} />
                <Route path="/YouTwo" element={<div>Works</div>} />
                <Route path="/WeddingEmotions" element={<div>Works</div>} />
                <Route path="/WeddingCelebration" element={<div>Works</div>} />
                <Route path="/YoungOnes" element={<div>Works</div>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
