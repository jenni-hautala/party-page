import React from "react";
import '../../main.scss'

const Hero = () => {
    // const i1: any = {'--i:1'};
    // const i2: any = '--i:2';
    // const i3: any = '--i:3';
    return (
        <section className="hero w-100 bg-black d-flex flex-column align-items-center justify-content-center">
            {/* <div className="glowing">
                <span style={i1}></span>
                <span style={i2}></span>
                <span style={i3}></span>
            </div><div className="glowing">
                <span style={i1}></span>
                <span style={i2}></span>
                <span style={i3}></span>
            </div> */}
            <h1 className="text-center">
                <span>Tervetuloa</span>
                <span>Jennin</span>
                <span>Halloweensynttäreille</span>
            </h1>
        </section>
    )
};

export default Hero;
