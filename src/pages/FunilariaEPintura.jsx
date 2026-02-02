import React from "react";
import { PaintBucket, Hammer, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import homeSecond from "../assets/home-second.jpeg";
import antesImg from "../assets/antes.png";
import depoisImg from "../assets/depois.png";
import "../styles/FunilariaEPintura.css";

export default function FunilariaEPintura() {
  const services = [
    {
      icon: <Hammer className="service-icon" />,
      title: "Funilaria Estrutural",
      description: "Recuperação de chassis, alinhamento de cabines e reparos complexos em qualquer modelo de caminhão.",
      gradientClass: "gradient-red"
    },
    {
      icon: <PaintBucket className="service-icon" />,
      title: "Pintura Especializada",
      description: "Pintura em estufa, personalização de frotas e aplicação de verniz de alta resistência para durabilidade.",
      gradientClass: "gradient-blue"
    },
    {
      icon: <ShieldCheck className="service-icon" />,
      title: "Recuperação de Plásticos",
      description: "Reparo e restauração de para-choques, para-lamas e outros componentes plásticos com tecnologia de ponta.",
      gradientClass: "gradient-green"
    },
    {
      icon: <Sparkles className="service-icon" />,
      title: "Polimento e Estética",
      description: "Serviços de polimento, cristalização e embelezamento para valorizar seu veículo e proteger a pintura.",
      gradientClass: "gradient-purple"
    }
  ];

  const beforeAfter = [
    {
      before: antesImg,
      after: depoisImg,
      service: "Pintura Completa"
    },
    {
      before: antesImg,
      after: depoisImg,
      service: "Reparo de Cabine"
    }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="funilaria-root">
        {/* Hero Section */}
        <section
          className="funilaria-hero funilaria-hero-purple"
          style={{
            background: `
              linear-gradient(120deg, rgba(47, 1, 125, 0.82) 85%, rgba(165,180,252,0.82) 100%),
              url(${homeSecond}) center center/cover no-repeat
            `
          }}
        >
          <div className="funilaria-hero-content">
            <h1 className="funilaria-hero-title">
              <span className="funilaria-hero-title-gradient funilaria-hero-title-gradient-purpleblue">
                Funilaria e Pintura
              </span>
            </h1>
            <p className="funilaria-hero-subtitle">
              Centro de reparação especializado para deixar seu veículo pesado como novo.
            </p>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="funilaria-servicos">
          <div className="funilaria-container">
            <div className="funilaria-servicos-header">
              <h2 className="funilaria-section-title">Nossos Serviços</h2>
              <p className="funilaria-servicos-desc">
                Tecnologia e profissionais qualificados para o melhor resultado.
              </p>
            </div>
            <div className="funilaria-servicos-grid">
              {services.map((service, index) => (
                <Card key={index} className="funilaria-servico-card">
                  <CardHeader>
                    <div className={`funilaria-servico-icon-bg ${service.gradientClass}`}>
                      <div className="funilaria-servico-icon">{service.icon}</div>
                    </div>
                    <CardTitle className="funilaria-servico-title">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="funilaria-servico-desc">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before and After Gallery */}
        <section className="funilaria-beforeafter">
          <div className="funilaria-container">
            <div className="funilaria-beforeafter-header">
              <h2 className="funilaria-section-title funilaria-section-title-gradient">
                Resultados que Impressionam
              </h2>
              <p className="funilaria-beforeafter-desc">
                Veja a transformação que nosso time de especialistas pode fazer.
              </p>
            </div>
            <div className="funilaria-beforeafter-grid">
              {beforeAfter.map((item, index) => (
                <div key={index} className="funilaria-beforeafter-card">
                  <h3 className="funilaria-beforeafter-service">{item.service}</h3>
                  <div className="funilaria-beforeafter-imgs">
                    <div className="funilaria-beforeafter-img-wrap">
                      <img src={item.before} alt="Antes" className="funilaria-beforeafter-img funilaria-beforeafter-img-before" />
                      <div className="funilaria-beforeafter-label funilaria-beforeafter-label-left">ANTES</div>
                    </div>
                    <div className="funilaria-beforeafter-img-wrap">
                      <img src={item.after} alt="Depois" className="funilaria-beforeafter-img funilaria-beforeafter-img-after" />
                      <div className="funilaria-beforeafter-label funilaria-beforeafter-label-right">DEPOIS</div>
                    </div>
                    <div className="funilaria-beforeafter-logo">SVD</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="funilaria-cta">
          <div className="funilaria-container funilaria-cta-content">
            <h2 className="funilaria-section-title">Agende uma Avaliação</h2>
            <p className="funilaria-cta-desc">
              Traga seu veículo para uma avaliação sem compromisso e receba um orçamento detalhado.
            </p>
            <Button 
              className="funilaria-cta-btn"
              onClick={() => window.location.href = 'mailto:comercial2@gruposvd.com.br'}
            >
              Solicitar Orçamento Online
            </Button>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}