import "./style.css";

const ContactItem = ({
  imgSrc,
  info,
  link,
  isFooter = false,
  isWhatsapp = false,
}: {
  imgSrc: any;
  info: string;
  link: string;
  isFooter?: boolean;
  isWhatsapp?: boolean;
}) => {
  return (
    <div
      className={`contact-item ${isFooter && "contact-footer"}`}
      onClick={() => window.open(link)}
    >
      <div
        className={`contact-logo ${isFooter && "contact-footer"} ${
          isWhatsapp && "whatsapp"
        }`}
      >
        <img src={imgSrc} alt="logo" />
      </div>
      <a
        href={link}
        className={`contact-info ${isFooter && "contact-footer"}`}
        target="_blank"
        rel="noreferrer"
      >
        {info}
      </a>
    </div>
  );
};

export default ContactItem;
