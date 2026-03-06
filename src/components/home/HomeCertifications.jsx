import logoSVD from "../../assets/logo-azul.png";
import cert9001 from "../../assets/certificados/conformidade1.png";
import cert14001 from "../../assets/certificados/conformidade2.png";
import cert39001 from "../../assets/certificados/conformidade3.png";
import iso from "../../assets/certificados/iso.png";
import aeo from "../../assets/certificados/aeo.png";

export default function HomeCertifications() {
  return (
    <section className="home-certifications">
      {/* Seção OEA */}
      <div className="home-certifications__container container">
        <div className="home-certifications__image-content">
          <img src={aeo} alt="Selo Operador Econômico Autorizado (OEA)" className="home-certifications__oea-img" />
        </div>
        <div className="home-certifications__text-content">
          <h2 className="home-certifications__title">EOA – Entrega Operacional Assistida do Grupo SVD</h2>
          <p className="home-certifications__description">
            <strong>Tecnologia, eficiência e segurança na entrega de veículos pesados</strong>
          </p>
          <p className="home-certifications__description">
            No Grupo SVD, acreditamos que a excelência logística não termina com o transporte. Ela se estende até o momento mais decisivo: a entrega técnica do veículo. É por isso que oferecemos o serviço EOA – Entrega Operacional Assistida, um modelo exclusivo de atendimento personalizado, voltado à capacitação e orientação dos condutores no recebimento de caminhões e máquinas.
          </p>
          <p className="home-certifications__description">
            Com foco na segurança operacional, na eficiência da condução e na redução de custos logísticos, a EOA garante que cada cliente receba seu veículo pronto para operar, com o máximo aproveitamento dos recursos tecnológicos embarcados.
          </p>
        </div>
      </div>

      <div className="home-blog__divider" style={{ margin: '4rem auto' }}></div>

      {/* Seção ISO */}
      <div className="home-certifications__container container">
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
          <a href="/sobre" className="home-certifications__button">SAIBA MAIS</a>
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