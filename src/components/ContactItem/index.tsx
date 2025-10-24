import './style.css'

const ContactItem = ({ imgSrc, info, link, isFooter = false }: { imgSrc: any, info: string, link: string, isFooter?: boolean }) => {
    return (
        <div className={`contact-item ${isFooter && 'contact-footer'}`}>
            <div className={`contact-logo ${isFooter && 'contact-footer'}`}>
                <img src={imgSrc} alt="logo" />
            </div>
            <a href={link} className={`contact-info ${isFooter && 'contact-footer'}`} target='_blank' rel="noreferrer">{info}</a>
        </div>
    );
}

export default ContactItem;