import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/menu/menu";
import Hero from "./components/hero";
import Galerie from "./components/gallery/fullGalery";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="grid lg:grid-cols-4 w-100">
                    <div className="md:col-span-1">
                        <Menu klasse="md:fixed md:w-1/4"></Menu>
                    </div>
                    <div className="md:col-span-3">
                        {/* <Hero></Hero> */}
                        <Galerie></Galerie>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
