import React from "react";
import './style.css'

const BannerTitle = ({ title }: { title: string }) => {
    return (
        <div className="banner-title">
            <h1>{title}</h1>
        </div>
    );
}

export default BannerTitle;