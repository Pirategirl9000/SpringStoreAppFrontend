import Home from "./Home.jsx";
import Browse from "./Browse.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import "/src/StyleSheets/NavBar.css"

export default function App() {
    return (
        <>
            <BrowserRouter>
                {/* Header Pane */}
                <nav id="navBar">
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/browse">Browse</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link>
                </nav>


                {/* Content Pane */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}