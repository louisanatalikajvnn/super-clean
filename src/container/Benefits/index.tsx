import { useState } from "react";
import SofaImage from "../../images/benefits/sofa/sofa.jpg";
import NodaImage from "../../images/benefits/sofa/noda.jpg";
import UdaraImage from "../../images/benefits/deep/udara.jpg";
import JamurImage from "../../images/benefits/deep/jamur.jpg";
import RumahImage from "../../images/benefits/deep/rumah.jpg";
import "./style.css";

const SuperCleanPage = () => {
  const [activeTab, setActiveTab] = useState("sofa");

  const sofaContent = {
    title:
      "Manfaat Cuci Sofa Secara Rutin: Kenapa Harus Minimal Setiap 6 Bulan?",
    intro: (
      <>
        <p>
          Sofa adalah furnitur yang paling sering digunakan setiap hari---duduk,
          bersantai, menerima tamu, hingga tempat bermain anak. Tanpa disadari,
          sofa mudah menjadi sarang debu, tungau, bakteri, dan berbagai kotoran
          lainnya.
        </p>
        <p>
          Karena itu,{" "}
          <strong>cuci sofa secara rutin minimal 6 bulan sekali</strong> sangat
          penting untuk menjaga kebersihan rumah dan kesehatan keluarga.
        </p>
      </>
    ),
    sections: [
      {
        title: "1. Menghilangkan Debu, Tungau, dan Alergen Tersembunyi",
        content: (
          <>
            <p>
              Sofa menyimpan debu dan tungau meskipun terlihat bersih. Keduanya
              dapat menyebabkan:
            </p>
            <ul>
              <li>Gatal-gatal</li>
              <li>Alergi</li>
              <li>Bersin dan batuk</li>
              <li>Sesak napas</li>
            </ul>
            <p>
              Dengan pencucian deep cleaning, kotoran mikro dapat diangkat
              sampai ke lapisan dalam, menjadikan sofa lebih aman untuk anak dan
              keluarga.
            </p>
          </>
        ),
      },
      {
        title: "2. Mengatasi Bau Tak Sedap dari Sumbernya",
        content: (
          <>
            <p>Bau pada sofa biasanya berasal dari:</p>
            <ul>
              <li>Keringat</li>
              <li>Sisa makanan</li>
              <li>Tumpahan minuman</li>
              <li>Hewan peliharaan</li>
              <li>Asap rokok</li>
            </ul>
            <p>
              Cuci sofa profesional membersihkan bau dari dalam busa, bukan
              hanya sekadar menutupi dengan parfum.
            </p>
          </>
        ),
      },
      {
        title: "3. Membuat Sofa Lebih Awet dan Tidak Cepat Rusak",
        image: SofaImage,
        content: (
          <>
            <p>
              Kotoran yang menumpuk dapat merusak serat kain dan membuat warna
              kusam. Perawatan rutin setiap 6 bulan membantu:
            </p>
            <ul>
              <li>Menjaga warna tetap cerah</li>
              <li>Mengurangi risiko permukaan pecah atau kusam</li>
              <li>Memperpanjang usia sofa</li>
            </ul>
          </>
        ),
      },
      {
        title: "4. Melindungi Kesehatan Anak dan Keluarga",
        content: (
          <>
            <p>
              Anak-anak sering berbaring, bermain, atau makan di sofa. Bila sofa
              kotor, risiko penyakit akan meningkat.
            </p>
            <p>
              Cuci sofa berkala memastikan tempat berkumpul keluarga tetap
              higienis untuk aktivitas sehari-hari.
            </p>
          </>
        ),
      },
      {
        title: "5. Menghilangkan Noda Sejak Awal agar Tidak Permanen",
        image: NodaImage,
        content: (
          <>
            <p>
              Noda kopi, minyak, saus, tinta, atau tumpahan lainnya lebih mudah
              dibersihkan jika tidak dibiarkan lama.
            </p>
            <p>
              SuperClean menggunakan metode ekstraksi yang mampu mengangkat noda
              lebih cepat dan aman untuk bahan sofa.
            </p>
          </>
        ),
      },
      {
        title: "6. Menjadikan Ruangan Lebih Bersih, Fresh, dan Nyaman",
        content: (
          <p>
            Sofa yang bersih membuat suasana rumah terasa lebih rapi dan enak
            dipandang. Tidak ada lagi noda, debu, atau bau mengganggu yang
            menurunkan kenyamanan.
          </p>
        ),
      },
    ],
    advantages: {
      title: "Keunggulan Cuci Sofa di SuperClean",
      intro:
        "SuperClean memberikan layanan cuci sofa profesional dengan kelebihan:",
      items: [
        "Chemical aman untuk anak & hewan peliharaan",
        "Mesin ekstraktor berkualitas",
        "Proses cepat dan rapi",
        "Menghilangkan bau & bakteri hingga ke dalam",
        "Harga jelas dan terjangkau",
        "Bisa untuk kain, kulit, suede, oscar, dan semua jenis sofa",
      ],
    },
    cta: (
      <>
        <p>
          <strong>
            Cuci sofa minimal 6 bulan sekali adalah investasi penting untuk
            kesehatan, kenyamanan, dan keawetan furnitur.
          </strong>
        </p>
        <p>
          Dengan layanan dari <strong>SuperClean</strong>, sofa Anda kembali
          bersih, wangi, higienis, dan tampak seperti baru.
        </p>
        <p>
          Untuk info lebih lanjut kunjungi{" "}
          <a
            href="https://superclean.co.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://superclean.co.id/
          </a>
        </p>
      </>
    ),
    moments: null,
  };

  const deepContent = {
    title:
      "Manfaat Deep Cleaning Rumah: Kenapa Penting untuk Kesehatan dan Kenyamanan?",
    intro: (
      <>
        <p>
          Menjaga rumah tetap bersih tidak cukup hanya dengan menyapu dan
          mengepel setiap hari. Ada debu, kotoran, bahkan bakteri yang menumpuk
          di area yang sulit dijangkau. Karena itu,{" "}
          <strong>deep cleaning rumah</strong> menjadi solusi terbaik untuk
          memastikan kebersihan menyeluruh.
        </p>
      </>
    ),
    sections: [
      {
        title: "Apa Itu Deep Cleaning Rumah?",
        content: (
          <p>
            Deep cleaning adalah pembersihan intensif hingga ke celah, sudut,
            dan permukaan yang jarang tersentuh. Berbeda dari general cleaning,
            proses ini mengangkat noda, debu, jamur, dan bakteri yang tidak bisa
            hilang dengan pembersihan biasa.
          </p>
        ),
      },
      {
        title: "1. Menjaga Kualitas Udara Tetap Sehat",
        image: UdaraImage,
        content: (
          <p>
            Debu yang menempel pada sofa, karpet, AC, dan kasur sering menjadi
            penyebab alergi dan gangguan pernapasan. Dengan deep cleaning,
            alergi bisa hilang hingga ke pori-pori material, sehingga udara di
            rumah lebih sehat untuk anak dan orang dewasa.
          </p>
        ),
      },
      {
        title: "2. Menghilangkan Bakteri dan Kuman Berbahaya",
        content: (
          <p>
            Bakteri mudah berkembang di dapur, kamar mandi, dan permukaan
            furnitur. Melalui peralatan modern dan chemical yang aman,
            SuperClean membantu membasmi kuman sampai tuntas sehingga risiko
            terkena penyakit bisa berkurang.
          </p>
        ),
      },
      {
        title: "3. Mengatasi Jamur dan Bau Tak Sedap",
        image: JamurImage,

        content: (
          <p>
            Kelembapan sering memicu pertumbuhan jamur dan menyebabkan bau tidak
            sedap. Deep cleaning membantu membersihkan noda, jamur, dan sumber
            bau sehingga membuat rumah kembali fresh dan nyaman.
          </p>
        ),
      },
      {
        title: "4. Membuat Furnitur Lebih Awet",
        content: (
          <p>
            Karpet, sofa, dan kasur akan lebih tahan lama jika rutin dibersihkan
            secara mendalam. Deep cleaning membantu menjaga kualitas bahan,
            warna, dan tekstur agar tetap seperti baru.
          </p>
        ),
      },
      {
        title: "5. Rumah Terlihat Lebih Rapi dan Nyaman",
        image: RumahImage,
        content: (
          <p>
            Hasil deep cleaning membuat tampilan rumah lebih rapi, bersih, dan
            menenangkan. Tidak ada lagi noda membandel, debu tebal, atau bau
            yang mengganggu aktivitas sehari-hari.
          </p>
        ),
      },
    ],
    moments: {
      title: "6. Wajib Dilakukan Pada Momen-Momen Tertentu",
      intro: "Deep cleaning sangat dianjurkan ketika:",
      items: [
        "Baru selesai renovasi",
        "Ingin pindah rumah",
        "Setelah acara besar",
        "Menyambut kelahiran bayi",
        "Menjaga kebersihan musiman (bulanan/3 bulanan)",
      ],
    },
    cta: (
      <p>
        <strong>Deep cleaning rumah</strong> adalah langkah penting untuk
        menjaga kesehatan, kenyamanan, dan keawetan furnitur. Dengan bantuan{" "}
        <strong>SuperClean</strong>, Anda bisa mendapatkan pembersihan
        menyeluruh yang aman, higienis, dan hasilnya terlihat nyata.
      </p>
    ),
    advantages: null,
  };

  const content = activeTab === "sofa" ? sofaContent : deepContent;

  return (
    <div className="container">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul className="sidebar-menu">
          <li className="menu-item">
            <button
              onClick={() => setActiveTab("sofa")}
              className={`menu-button ${activeTab === "sofa" ? "active" : ""}`}
            >
              Manfaat Cuci Sofa Secara Rutin
            </button>
          </li>
          <li className="menu-item">
            <button
              onClick={() => setActiveTab("deep")}
              className={`menu-button ${activeTab === "deep" ? "active" : ""}`}
            >
              Manfaat Deep Cleaning Rumah
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="tab-content">
          <h2 className="main-title">{content.title}</h2>

          <div className="intro-box">{content.intro}</div>

          {content.sections.map((section, index) => (
            <div key={index} className="benefit-section">
              <h3 className="section-title">{section.title}</h3>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="benefit-image"
                />
              )}
              <div className="benefit-content">{section.content}</div>
            </div>
          ))}

          {content.advantages && (
            <div className="advantage-box">
              <h3 className="box-title">{content.advantages.title}</h3>
              <p className="box-intro">{content.advantages.intro}</p>
              <ul className="box-list">
                {content.advantages.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {content.moments && (
            <div className="moments-box">
              <h3 className="box-title">{content.moments.title}</h3>
              <p className="box-intro">{content.moments.intro}</p>
              <ul className="box-list">
                {content.moments.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="cta-box">{content.cta}</div>
        </div>
      </main>
    </div>
  );
};

export default SuperCleanPage;
