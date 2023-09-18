import React from "react";
import '../../main.scss'

const Info = () => {
    return (
        <section className="container my-8">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-6 text-secondary mb-8">
                    <p className="mb-4">Juhlitaanpas Halloweenia ja vanhenemista! 👻 Partypaikka sijaitsee Oulun keskustassa, sauna lämpennee ja karaoke pauhaa 🎤 </p>
                    <div className="mb-3"><span className="">Mitä: </span><span>Jennin 30v-synttärit Halloween-teemalla!</span></div>
                    <div className="mb-3"><span className="">Milloin: </span><span>Lauvantaina 28.10.</span></div>
                    <div className="mb-3"><span className="">Missä: </span><a href="https://www.saunaonline.fi/saunatilat/saunatilat-oulu-makelininkadun-saunatila" target="_blank" rel="noopener noreferrer">Mäkelininkadun saunatila, Mäkelininkatu 33, 90100 Oulu</a></div>
                </div>
                <div className="col-12 col-lg-6 mb-8">
                    <div className="iframe-container ms-auto">
                        <iframe scrolling="no" id="saunaOnline" className="iframe" src="https://www.saunaonline.fi/saunatilat/saunatilat-oulu-makelininkadun-saunatila#myCarousel" name="carousel"></iframe>
                    </div>
                </div>
                <div className="col-12 mb-8">
                    <div className="map-iframe-container">
                        <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.4944312165744!2d25.47431207827604!3d65.01070527784542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468032ae88ffedd1%3A0x957f83af5804a85!2sM%C3%A4kelininkatu%2033%2C%2090100%20Oulu!5e0!3m2!1sfi!2sfi!4v1695071887074!5m2!1sfi!2sfi" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Info;
