import Mail from "../../images/mail.svg";
import Location from "../../images/map-pin.svg";
import Whatsapp from "../../images/whatsapp.png";
import ContactItem from "../../components/ContactItem";
import Instagram from "../../images/instagram.png";
import Tiktok from "../../images/tik-tok.png";
import Youtube from "../../images/youtube.png";
import Shopee from "../../images/icons8-shopee.svg";
import Tokped from "../../images/tokped.png";

import "./style.css";

const Footer = ({ containerClassName }: { containerClassName?: any }) => {
  const contacts = [
    {
      src: Mail,
      info: "supercleanjakarta@gmail.com",
      link: "mailto:supercleanjakarta@gmail.com",
    },
    {
      src: Location,
      info: "Jalan Melati Raya No. 45, Kapuk, Cengkareng, Jakarta Barat",
      link: "https://www.google.com/maps/place/Jl.+Melati+Raya+No.45,+Kapuk,+Kecamatan+Cengkareng,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11720/@-6.150076,106.7411855,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f7e8f6c963ef:0xf26de7781a75c93c!8m2!3d-6.1500813!4d106.7437604!16s%2Fg%2F11sj9ln1zt?entry=ttu",
    },
    {
      src: Whatsapp,
      info: "WA CS 1: 0811 87 78737",
      link: "https://wa.me/628118778737",
      isWhatsapp: true,
    },
    {
      src: Whatsapp,
      info: "WA CS 2: 08111 60 2737",
      link: "https://wa.me/628111602737",
      isWhatsapp: true,
    },
    {
      src: Whatsapp,
      info: "WA CS 3: 08111 6 78737",
      link: "https://wa.me/628111678737",
      isWhatsapp: true,
    },
  ];

  return (
    <div className={`footer ${containerClassName}`}>
      <h1>Contact Us</h1>
      <h3>Superclean_id</h3>
      <h2>CV SUPERCLEAN INDO</h2>
      {contacts.map(({ src, info, link, isWhatsapp }) => (
        <ContactItem
          imgSrc={src}
          info={info}
          link={link}
          isFooter
          isWhatsapp={isWhatsapp}
        />
      ))}
      <div className="socmed">
        <div className="socmed-logo">
          <a
            href="https://www.instagram.com/superclean_id/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@superclean_id"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Tiktok} alt="Tiktok" className="img-tiktok" />
          </a>

          <a
            href="https://www.youtube.com/@Superclean_id"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Youtube} alt="Youtube" />
          </a>

          <a
            href="https://shopee.co.id/superclean_id"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Shopee} alt="Shopee" />
          </a>

          <a
            href="https://www.tokopedia.com/supercleanid"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Tokped} alt="Tokped" />
          </a>
        </div>
        <p>Superclean_id</p>
      </div>
      <h5 className="copyright">© Copyright CV SUPERCLEAN INDO</h5>
    </div>
  );
};

export default Footer;
