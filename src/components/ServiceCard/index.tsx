import './style.css'

export type ServiceCardProps = { imgLogo: any, imgDesc: string, id: string }

const ServiceCard = ({ imgLogo, imgDesc, id }: ServiceCardProps) => {
    return (
        <a href={`#${id}`} className='service-card-container'>
            <div className="service-card">
                <div className="img-container">
                    <img src={imgLogo} alt="service-card-logo" />
                </div>
                <p>{imgDesc}</p>
            </div>
        </a>

    );
}

export default ServiceCard;