import React from "react";

import {Article, CTA, Navbar, Feature, Brand} from "./Components";
import {Header, Blog, Features, WhatGPT3, Footer, Possibility} from "./containers";


const App = () => {
    return (
        <div className={'App'}>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Feature />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
