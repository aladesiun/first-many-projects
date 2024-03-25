import React from "react";
import './whatGPT3.css';
import Feature from "../../Components/feature/Feature.jsx";

const whatGPT3 = () => {
    return (
        <div className={'gpt3__whatgpt3 section__padding'} id={'wgpt3'}>
            <div className="gpt3__whatgpt3-feature">
                <Feature />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className={'gradient__text'}>
                    The possibilities are beyond your imagination
                </h1>
            </div>
        </div>
    )
}

export default whatGPT3
