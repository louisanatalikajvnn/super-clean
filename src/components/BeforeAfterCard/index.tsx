import './style.css'

const BeforeAfterCard = ({ imgSrc, imgDesc, isBefore, imgClass }: { imgSrc: any, imgDesc: string, isBefore: boolean, imgClass?: string }) => {
    return (
        <div className={`before-after-card ${isBefore ? 'before' : 'after'}`}>
            <img src={imgSrc} alt="product" className={imgClass} />
            <div className="card-info">
                <p>{imgDesc}</p>
            </div>
        </div>
    );
}

export default BeforeAfterCard;