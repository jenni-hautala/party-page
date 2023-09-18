import React from "react";
// components
import Hero from "./components/hero/hero";
import Info from "./components/info/info";
// styles
import "./main.scss"

const App = () => {
    return (
        <section>
            <Hero />
            <Info />
        </section>
    )
};

export default App;
