import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/menu/menu";
import Hero from "./components/hero";
import Galerie from "./components/gallery/fullGalery";
import Newsletter from "./components/newsletter/newsletter";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function App() {
    const [menuWidth, setMenuWidth] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        console.log(menuRef.current.clientWidth);

        // RESIZE
        function handleResize() {
            setMenuWidth(menuRef.current.clientWidth + "px");
        }

        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="grid lg:grid-cols-5 w-100">
                    {/* <div className="md:col-span-1"> */}
                    <div className="md:col-span-1" ref={menuRef}>
                        <Menu klasse="md:fixed" style={{ width: menuWidth }}></Menu>
                    </div>
                    <div className="md:col-span-4">
                        <Routes>
                            {/* <Hero></Hero> */}
                            {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                            <Route path="/" element={<Galerie />}></Route>
                            <Route path="/about" element={<Hero />}></Route>

                            {/* </AnimationOnScroll> */}
                        </Routes>

                        <Newsletter></Newsletter>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
