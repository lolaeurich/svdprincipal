import { useEffect, useState, useRef } from 'react';
import logoAzul from "../../assets/logo-branca.png";
import faleconosco from "../../assets/service-item/faleconosco.png";
import ouvidoria from "../../assets/service-item/helpdesk.png";
import trabalheconosco from "../../assets/service-item/trabalhe.png";
import motoristamei from "../../assets/service-item/mei.png";
import cadastroprestadores from "../../assets/service-item/prestadores.png";
import areadocolaborador from "../../assets/service-item/team.png";
import transportes from "../../assets/logos/transportes-logo.png"
import acessorios from "../../assets/logos/acessorios-logo.png"
import seminovos from "../../assets/logos/seminovos-logo.png"
import implementos from "../../assets/logos/implementos-logo.png"

export default function HomeHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <section className="home-hero">
        <video
          ref={videoRef}
          className="home-hero__video-bg"
          loop
          muted
          poster="/videos/frame-hero.png"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="home-hero__wrap">
          <div className="home-hero__content-box">
            <div className="home-hero__content-main">
              <div className="home-hero__title-line">
                <img src={logoAzul} alt="Logo SVD" className="home-hero__svd-logo" />
                <h2 className="home-hero__content-title">TRANSPORTANDO<br />SONHOS</h2>
              </div>
              
              <p className="home-hero__content-subtitle">
                Excelência em Logística, Seminivos e Acessórios
              </p>
            </div>

            <button
              className="home-hero__play-button"
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                  videoRef.current && videoRef.current.pause();
                } else {
                  setIsPlaying(true);
                  videoRef.current && videoRef.current.play();
                }
              }}
              aria-label={isPlaying ? "Pausar vídeo" : "Assistir vídeo"}
            >
              {isPlaying ? (
                // Ícone de pausa grosso
                <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                  <rect x="12" y="10" width="8" height="28" rx="3" />
                  <rect x="28" y="10" width="8" height="28" rx="3" />
                </svg>
              ) : (
                // Ícone de play grosso
                <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                  <polygon points="14,10 40,24 14,38" stroke="currentColor" strokeWidth="4" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="services-bar">
          <ServicesBar logoAzul={logoAzul} />
        </div>
        
        <div className="info-section__content container">
            <div className="info-section__services">
              <div className="service-item">
                <img src={areadocolaborador} alt="Logística" className="service-item__icon" />
                <p className="service-item__text">ÁREA DO COLABORADOR</p>
              </div>
              <div className="service-item">
                <img src={motoristamei} alt="Acessórios" className="service-item__icon" />
                <p className="service-item__text">MOTORISTA MEI</p>
              </div>
              <div className="service-item">
                <img src={faleconosco} alt="Seminovos" className="service-item__icon" />
                <p className="service-item__text">FALE CONOSCO</p>
              </div>
              <div className="service-item">
                <img src={ouvidoria} alt="Implementos" className="service-item__icon" />
                <p className="service-item__text">OUVIDORIA</p>
              </div>
              <div className="service-item">
                <img src={cadastroprestadores} alt="Implementos" className="service-item__icon" />
                <p className="service-item__text">CADASTRO DE PRESTADORES</p>
              </div>
              <div className="service-item">
                <img src={trabalheconosco} alt="Implementos" className="service-item__icon" />
                <p className="service-item__text">TRABALHE CONOSCO</p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

function ServicesBar({ logoAzul }) {
  const containerRef = useRef(null);

  const scrollAmount = 170; // ajuste conforme o tamanho das bolinhas

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const circles = [
    <div key="orange" className="services-bar__circle services-bar__circle--orange">
      <div className='services-bar__circle-inner-secondary'>
        <img src={transportes} alt="SVD Transportes" />
      </div>
    </div>,
    <a
      key="green"
      href="https://svdseminovos.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="services-bar__circle services-bar__circle--green"
      style={{ display: "block" }}
    >
      <div className='services-bar__circle-inner-secondary'>
        <img src={acessorios} alt="SVD Acessórios" />
      </div>
    </a>,
    <div key="blue" className="services-bar__circle services-bar__circle--blue">
      <div className='services-bar__circle-inner-secondary'>
        <img src={seminovos} alt="SVD Seminovos" />
      </div>
    </div>,
    <div key="red" className="services-bar__circle services-bar__circle--red">
      <div className='services-bar__circle-inner-secondary'>
        <img src={implementos} alt="SVD Implementos Rodoviários" />
      </div>
    </div>,
  ];

  return (
    <div className="services-bar__container--carousel">
      <button
        className="carousel-arrow carousel-arrow--left"
        aria-label="Scroll left"
        onClick={scrollLeft}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polyline points="18,6 10,14 18,22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="services-bar__container" ref={containerRef}>
        {circles}
      </div>
      <button
        className="carousel-arrow carousel-arrow--right"
        aria-label="Scroll right"
        onClick={scrollRight}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polyline points="10,6 18,14 10,22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}