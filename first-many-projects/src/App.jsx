import React from "react";

import {CTA, Navbar, Brand} from "./Components/index.js";
import {Header, Blog, Features,WhatGPT3, Footer, Possibility} from "./containers/index.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Library} from "./misc/index.js";



const App = () => {
    return (
        <Router>
            <div className={'App'}>
                <div className="gradient__bg">
                    <Navbar/>
                    <Header/>
                </div>
                <Brand/>
                <Routes>
                    <Route path={"/"} element={<WhatGPT3 />} />
                    <Route path={"/library"} element={<Library />} />
                </Routes>

                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>
            </div>
        </Router>

    )
}

export default App
