import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects"; // Import the Projects page
import Contact from "./Components/Contact/Contact";
import Achievements from "./Components/Achievements/Achievements";

const App = () =>
{
    return (
        <Router>
            <BackgroundAnimation />
            <Navbar />
            <Routes>
                <Route path="/" element={ <>
                    <AboutMe />
                    <Skills />
                    <Achievements />
                    <Contact />
                </> } />
                <Route path="/projects" element={ <Projects /> } /> {/* Projects Page */ }
            </Routes>
        </Router>
    );
};

export default App;
