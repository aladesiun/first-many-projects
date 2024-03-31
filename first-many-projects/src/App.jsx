import React from "react";

import {CTA, Navbar, Brand} from "./Components/index.js";
import {Header, Blog, Features,WhatGPT3, Footer, Possibility} from "./containers/index.js";



const App = () => {
    return (
        <div className={'App'}>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
