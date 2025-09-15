import logoSVD from "../../assets/logo-azul.png";
import cert9001 from "../../assets/certificados/conformidade1.png";
import cert14001 from "../../assets/certificados/conformidade2.png";
import cert39001 from "../../assets/certificados/conformidade3.png";
import iso from "../../assets/certificados/iso.png";

export default function HomeCertifications() {
  return (
    <section className="home-certifications">
      <div className="home-certifications__container container">
        {/* Conteúdo da seção de texto e certificações */}
        <div className="home-certifications__text-content">
          <h2 className="home-certifications__title">Certificações de Excelência</h2>
          <p className="home-certifications__description">
            A SVD Transportes é sinônimo de qualidade, segurança e sustentabilidade, refletidos nas
            certificações ISO que orgulhosamente ostentamos:
          </p>
          <ul className="home-certifications__list">
            <li>
              <p><strong>ISO 9001</strong>, que garante a excelência na gestão da qualidade;</p>
            </li>
            <li>
              <p><strong>ISO 14001</strong>, que reafirma nosso compromisso com a gestão ambiental responsável;</p>
            </li>
            <li>
              <p><strong>ISO 39001</strong>, específica para segurança viária e operações logísticas.</p>
            </li>
          </ul>
          <p className="home-certifications__description">
            Essas certificações são prova do nosso esforço contínuo em oferecer serviços que superam
            expectativas e contribuem para um futuro mais seguro e sustentável.
          </p>
          <a href="#" className="home-certifications__button">SAIBA MAIS</a>
        </div>

        {/* Bloco das imagens e logo */}
        <div className="home-certifications__image-content">
          <div className="certificate-images">
            <img src={cert9001} alt="Certificado ISO 9001" className="certificate-image" />
            <img src={cert14001} alt="Certificado ISO 14001" className="certificate-image" />
            <img src={cert39001} alt="Certificado ISO 39001" className="certificate-image" />
          </div>
          <div className="iso-seal">
            <img src={iso} alt="Selo ISO Placeholder" className="iso-seal__image" />
          </div>
        </div>
      </div>
    </section>
  );
}