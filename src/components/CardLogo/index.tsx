import React from "react";
import './style.css'

const CardLogo = ({ imgSrc, imgSize = '100%' }: { imgSrc: any, imgSize?: string }) => {
    return (
        <div className="card-logo">
            <img src={imgSrc} alt="logo" style={{ width: imgSize }} />
        </div>
    );
}

export default CardLogo;