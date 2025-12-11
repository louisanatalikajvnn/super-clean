import BannerTitle from "../../components/TitleBanner";

import PKasur from "../../images/Pencucian/Pencucian Kasur.png";
import PJok from "../../images/Pencucian/Pencucian Jok.png";
import PSofa from "../../images/Pencucian/Pencucian Sofa.png";
import PKarpet from "../../images/Pencucian/Pencucian Karpet.png";
import PKasurB from "../../images/Pencucian/Pkasur Before.png";
import PKasurA from "../../images/Pencucian/PKasur After.png";

import VKasur from "../../images/Vacuum/VKasur.png";
import VJok from "../../images/Vacuum/VJok.png";
import VSofa from "../../images/Vacuum/VSofa.png";
import VKarpet from "../../images/Vacuum/VKarpet.png";
import AVacuum from "../../images/Vacuum/AVacuum.png";
import BVacuum from "../../images/Vacuum/BVacuum.png";

import GSapu from "../../images/General/GSapu.png";

import D1 from "../../images/Desinfektan/D1.png";
import D2 from "../../images/Desinfektan/D2.png";

import PLogo from "../../images/service-list/list-wash.png";
import VLogo from "../../images/service-list/list-vacuum-cleaner.png";
import GLogo from "../../images/service-list/list-broom.png";
import DLogo from "../../images/service-list/list-fumigator.png";

import BA1 from "../../images/before-after/pencucian/ba-1.png";
import BA2 from "../../images/before-after/pencucian/ba-2.png";
import BA3 from "../../images/before-after/pencucian/ba-3.png";
import BA4 from "../../images/before-after/pencucian/ba-4.png";
import BA5 from "../../images/before-after/vacuum/ba-5.png";
import BA6 from "../../images/before-after/pencucian/ba-6.png";
import BA7 from "../../images/before-after/pencucian/ba-7.png";
import BA8 from "../../images/before-after/vacuum/ba-8.png";
import BA9 from "../../images/before-after/pencucian/ba-9.png";
import BA10 from "../../images/before-after/pencucian/ba-10.png";
import BA11 from "../../images/before-after/vacuum/ba-11.png";
import BA12 from "../../images/before-after/pencucian/ba-12.png";
import BA13 from "../../images/before-after/pencucian/ba-13.png";
import BA14 from "../../images/before-after/vacuum/ba-14.png";
import BA15 from "../../images/before-after/pencucian/ba-15.png";
import BA16 from "../../images/before-after/pencucian/ba-16.png";
import BA17 from "../../images/before-after/pencucian/ba-17.png";
import BA18 from "../../images/before-after/pencucian/ba-18.png";
import BA19 from "../../images/before-after/pencucian/ba-19.png";
import BA20 from "../../images/before-after/pencucian/ba-20.png";
import BA21 from "../../images/before-after/vacuum/ba-21.png";
import BA22 from "../../images/before-after/pencucian/ba-22.png";
import BA23 from "../../images/before-after/pencucian/ba-23.png";
import BA24 from "../../images/before-after/pencucian/ba-24.png";
import BA25 from "../../images/before-after/vacuum/ba-25.png";
import BA26 from "../../images/before-after/pencucian/ba-26.png";
import BA27 from "../../images/before-after/pencucian/ba-27.png";
import BA28 from "../../images/before-after/pencucian/ba-28.png";
import BA29 from "../../images/before-after/pencucian/ba-29.png";

import "./style.css";
import Carousel from "../../components/Carousel";
import ProductCard, { ProductCardProps } from "../../components/ProductCard";
import BeforeAfterCard from "../../components/BeforeAfterCard";
import Ornament from "../../components/Ornament";
import ServiceCard, { ServiceCardProps } from "../../components/ServiceCard";
import Footer from "../../components/Footer";

const Service = () => {
  const serviceList: ServiceCardProps[] = [
    {
      imgLogo: PLogo,
      imgDesc: "1. Pencucian",
      id: "pencucian",
    },
    {
      imgLogo: VLogo,
      imgDesc: "2. Vacuum Tungau",
      id: "vacuum-cleaner",
    },
    {
      imgLogo: GLogo,
      imgDesc: "3. General Cleaning",
      id: "general-cleaning",
    },
    {
      imgLogo: DLogo,
      imgDesc: "4. Desinfektan",
      id: "desinfektan",
    },
  ];

  const servicePencucian: ProductCardProps[] = [
    {
      productImage: PKasur,
      productDescription: "Kasur",
      imgIdName: "img-pkasur",
    },
    {
      productImage: PJok,
      productDescription: "Jok Mobil",
      imgIdName: "img-pjok",
    },
    {
      productImage: PSofa,
      productDescription: "Sofa",
    },
    {
      productImage: PKarpet,
      productDescription: "Karpet",
    },
  ];

  const serviceVacuum: ProductCardProps[] = [
    {
      productImage: VKasur,
      productDescription: "Kasur",
    },
    {
      productImage: VJok,
      productDescription: "Jok Mobil",
    },
    {
      productImage: VSofa,
      productDescription: "Sofa",
    },
    {
      productImage: VKarpet,
      productDescription: "Karpet",
    },
  ];

  const serviceGeneralCleaning: ProductCardProps[] = [
    {
      productImage: GSapu,
      productDescription: "General Cleaning",
      imgIdName: "img-gsapu",
    },
  ];

  const serviceDesinfektan: ProductCardProps[] = [
    {
      productImage: D1,
      productDescription: "Desinfektan",
      imgIdName: "img-d1",
    },
    {
      productImage: D2,
      productDescription: "Desinfektan",
      imgIdName: "img-d2",
    },
  ];

  const beforeAfterPencucian: any[] = [
    {
      imgSrc: BA3,
    },
    {
      imgSrc: BA4,
    },
    {
      imgSrc: BA7,
    },
    {
      imgSrc: BA9,
    },
    {
      imgSrc: BA10,
    },
    {
      imgSrc: BA12,
    },
    {
      imgSrc: BA13,
    },
    {
      imgSrc: BA15,
    },
    {
      imgSrc: BA17,
    },
    {
      imgSrc: BA18,
    },
    {
      imgSrc: BA19,
    },
    {
      imgSrc: BA20,
    },
    {
      imgSrc: BA23,
    },
    {
      imgSrc: BA24,
    },
    {
      imgSrc: BA26,
    },
    {
      imgSrc: BA27,
    },
    {
      imgSrc: BA28,
    },
  ];

  const beforeAfterPencucianPart2: any[] = [
    {
      imgSrc: BA29,
    },
    {
      imgSrc: BA2,
    },
    {
      imgSrc: BA6,
    },
    {
      imgSrc: BA16,
    },
    {
      imgSrc: BA22,
    },
    {
      imgSrc: BA1,
    },
  ];

  const beforeAfterVacuum: any[] = [
    {
      imgSrc: BA5,
    },
    {
      imgSrc: BA8,
    },
    {
      imgSrc: BA11,
    },
    {
      imgSrc: BA14,
    },
    {
      imgSrc: BA21,
    },
    {
      imgSrc: BA25,
    },
  ];

  return (
    <>
      <div className="container service-container">
        <BannerTitle title="Our Services" />

        <div className="service-list-container">
          {serviceList.map((item) => (
            <ServiceCard {...item} />
          ))}
        </div>
        <div className="item-service-container" id={serviceList[0].id}>
          <Ornament />
          <Ornament right />
          <h1 className="service-title">1. Pencucian</h1>

          <Carousel items={servicePencucian} CarouselItem={ProductCard} />
          <h2>Before dan After Pencucian</h2>
          <div className="before-after">
            <BeforeAfterCard
              imgSrc={PKasurB}
              imgDesc="Before"
              isBefore
              imgClass="pkasur-ba-img"
            />
            <BeforeAfterCard
              imgSrc={PKasurA}
              imgDesc="After"
              isBefore={false}
              imgClass="pkasur-ba-img"
            />
          </div>
          <div className="ba-gallery">
            {beforeAfterPencucian.map((item, index) => (
              <img
                key={index}
                src={item.imgSrc}
                alt="before-after"
                className="ba-gallery-img"
              />
            ))}
          </div>
          <div className="ba-gallery">
            {beforeAfterPencucianPart2.map((item, index) => (
              <img
                key={index}
                src={item.imgSrc}
                alt="before-after"
                className="ba-gallery-img"
              />
            ))}
          </div>
        </div>

        <div className="item-service-container" id={serviceList[1].id}>
          <Ornament />
          <Ornament right />
          <h1 className="service-title">2. Vacuum Tungau</h1>

          <Carousel items={serviceVacuum} CarouselItem={ProductCard} />
          <h2>Before dan After Vacuum Tungau</h2>
          <div className="before-after">
            <BeforeAfterCard
              imgSrc={BVacuum}
              imgDesc="Before"
              isBefore
              imgClass="vkasur-ba-img"
            />
            <BeforeAfterCard
              imgSrc={AVacuum}
              imgDesc="After"
              isBefore={false}
              imgClass="vkasur-ba-img"
            />
          </div>
          <div className="ba-gallery">
            {beforeAfterVacuum.map((item, index) => (
              <img
                key={index}
                src={item.imgSrc}
                alt="before-after"
                className="ba-gallery-img"
              />
            ))}
          </div>

          <h2>Perbedaan</h2>
          <div className="table-container">
            <div className="table">
              <table>
                <tr>
                  <th></th>
                  <th>Vacuum Tungau+</th>
                  <th>Cuci</th>
                </tr>
                <tr>
                  <td>Metode Pengerjaan</td>
                  <td>Furniture 100% kering total</td>
                  <td>
                    Furniture agak basah menggunakan semi foam (kering total
                    dalam waktu 4-5 jam)
                  </td>
                </tr>
                <tr>
                  <td>Noda</td>
                  <td>
                    Tidak membersihkan noda. Menghisap debu dan tungau sampai
                    dengan kedalaman 15cm
                  </td>
                  <td>Membersihkan noda dengan cairan khusus anti noda</td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td>20-30% lebih murah dibanding cuci</td>
                  <td>Sesuai pricelist</td>
                </tr>
                <tr>
                  <td>After Pengerjaan</td>
                  <td>
                    Furniture kering dan ruangan menjadi wangi (menggunakan
                    aroma terapi)
                  </td>
                  <td>
                    Furniture dikeringkan dengan blower/kipas, furniture menjadi
                    wangi
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="item-service-container" id={serviceList[2].id}>
          <Ornament />
          <Ornament right />
          <h1 className="service-title">3. General Cleaning</h1>

          <p className="general-cleaning-info">
            General cleaning adalah pembersihan menyeluruh seperti sapu, pel,
            lap debu.
          </p>
          <p className="general-cleaning-info">
            Biasa dilakukan pada rumah/kantor pasca renovasi/pindahan.
          </p>

          <Carousel items={serviceGeneralCleaning} CarouselItem={ProductCard} />
        </div>

        <div className="item-service-container" id={serviceList[3].id}>
          <Ornament />
          <Ornament right />
          <h1 className="service-title">4. Desinfektan</h1>

          <p className="desinfektan-info">
            Desinfektan adalah proses menghilangkan virus atau semua
            mikroorganisme pada furniture/tempat tinggal dengan metode fogging.
          </p>
          <p className="desinfektan-info">
            Menggunakan bahan fogging food grade dari Jerman.
          </p>
          <Carousel items={serviceDesinfektan} CarouselItem={ProductCard} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
