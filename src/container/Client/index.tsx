import React from "react";
import './style.css'
import BannerTitle from "../../components/TitleBanner";
import ikkudo from "../../images/clients-logo/ikkudo.jpg";
import angkasap from "../../images/clients-logo/angkasap.png"
import btn from "../../images/clients-logo/btn.png"
import clean_canteen from "../../images/clients-logo/clean_canteen.png"
import dc from "../../images/clients-logo/dc.png"
import fb from "../../images/clients-logo/fb.png"
import forme from "../../images/clients-logo/forme.png"
import kai from "../../images/clients-logo/kai.png"
import lalamove from "../../images/clients-logo/lalamove.jpg"
import mandiri from "../../images/clients-logo/mandiri.png"
import noon from "../../images/clients-logo/noon.png"
import pegadaian from "../../images/clients-logo/pegadaian.png"
import tbg from "../../images/clients-logo/tbg.png"
import toyota from "../../images/clients-logo/toyota.png"
import vertwo from "../../images/clients-logo/vertwo.webp"
import vivere from "../../images/clients-logo/vivere.jpg"

import CardLogo from "../../components/CardLogo";
import Footer from "../../components/Footer";

const clients = [
    {
        src: angkasap,
        size: '92%'
    },
    {
        src: btn,
        size: '80%'
    },
    {
        src: clean_canteen,
        size: '85%'
    },
    {
        src: dc
    },
    {
        src: fb,
        size: '85%'
    },
    {
        src: forme
    },
    {
        src: kai,
        size: '80%'
    },
    {
        src: lalamove,
        size: '90%'
    },
    {
        src: mandiri,
        size: '80%'
    },
    {
        src: noon
    },
    {
        src: pegadaian,
        size: '80%'
    },
    {
        src: tbg,
        size: '90%'
    },
    {
        src: toyota,
        size: '75%'
    },
    {
        src: vertwo
    },
    {
        src: vivere,
        size: '150%'
    },
    {
        src: ikkudo,
        size: '220%'
    }
]

const Client = () => {
    return (
        <>
            <div className="container client-container">
                <BannerTitle title="Our Clients" />
                <div className="cards">
                    {
                        clients.map(({ src, size }) => <CardLogo imgSrc={src} imgSize={size} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Client;