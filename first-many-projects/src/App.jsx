import React from "react";

import { CTA, Navbar, Brand } from "./Components/index.js";
import { Header, Blog, Features, WhatGPT3, Footer, Possibility } from "./containers/index.js";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { Library } from "./misc/index.js";
import Home from "./Home.tsx";



const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/library"} element={<Library />} />
        </Routes>
    )
}

export default App
