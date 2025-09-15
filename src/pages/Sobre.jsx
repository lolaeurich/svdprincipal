import React from "react";
import { Users, Award, Target, History, TrendingUp, Shield } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import TimelineCarousel from "../components/TimelineCarousel";
import homeSecond from "../assets/home-second.jpeg";
import "../styles/Sobre.css";

export default function QuemSomos() {
  const values = [
    {
      icon: <Target className="sobre-icon" />,
      title: "Missão",
      description: "Conectar destinos e entregar soluções logísticas inovadoras que impulsionam o crescimento dos nossos clientes.",
      color: "sobre-pilar-bg-blue"
    },
    {
      icon: <Award className="sobre-icon" />,
      title: "Visão",
      description: "Ser a referência nacional em transporte sustentável e logística inteligente até 2030.",
      color: "sobre-pilar-bg-green"
    },
    {
      icon: <Shield className="sobre-icon" />,
      title: "Valores",
      description: "Integridade, excelência, inovação, sustentabilidade e compromisso com nossos stakeholders.",
      color: "sobre-pilar-bg-purple"
    }
  ];

  const leadership = [
    {
      name: "Carlos Silva",
      position: "CEO & Fundador",
      experience: "25+ anos no setor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Ana Santos",
      position: "Diretora de Operações",
      experience: "20+ anos em logística",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Roberto Lima",
      position: "Diretor Comercial",
      experience: "18+ anos em vendas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    }
  ];

  const stats = [
    { number: "23", label: "Anos de Experiência", suffix: "" },
    { number: "500", label: "Colaboradores", suffix: "+" },
    { number: "10000", label: "Clientes Atendidos", suffix: "+" },
    { number: "95", label: "Satisfação do Cliente", suffix: "%" }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="sobre-root">
        {/* Hero Section */}
        <section
          className="sobre-hero"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="sobre-hero-container">
            <div className="sobre-hero-text">
              <h1 className="sobre-hero-title">Quem Somos</h1>
              <p className="sobre-hero-subtitle">
                Construindo pontes entre destinos há mais de duas décadas
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História com Timeline Moderna */}
        <section className="sobre-historia">
          <div className="sobre-historia-container">
            <h2 className="sobre-historia-title">Nossa História</h2>
            <TimelineCarousel />
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="sobre-pilares">
          <div className="sobre-pilares-container">
            <h2 className="sobre-pilares-title">Nossos Pilares</h2>
            <div className="sobre-pilares-grid">
              {values.map((value, index) => (
                <div key={index} className={`sobre-pilar-card ${value.color}`}>
                  <div className="sobre-pilar-card-header">
                    <div className="sobre-pilar-icon-bg">
                      {value.icon}
                    </div>
                    <h3 className="sobre-pilar-title">{value.title}</h3>
                  </div>
                  <div className="sobre-pilar-content">
                    <p className="sobre-pilar-desc">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="sobre-stats">
          <div className="sobre-stats-container">
            <h2 className="sobre-stats-title">Nossos Números</h2>
            <div className="sobre-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="sobre-stat-card">
                  <div className="sobre-stat-number">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="sobre-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liderança */}
        <section className="sobre-lideranca">
          <div className="sobre-lideranca-container">
            <h2 className="sobre-lideranca-title">Nossa Liderança</h2>
            <div className="sobre-lideranca-grid">
              {leadership.map((leader, index) => (
                <div key={index} className="sobre-lider-card">
                  <div className="sobre-lider-img-wrap">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="sobre-lider-img"
                    />
                  </div>
                  <div className="sobre-lider-content">
                    <h3 className="sobre-lider-nome">{leader.name}</h3>
                    <p className="sobre-lider-cargo">{leader.position}</p>
                    <p className="sobre-lider-exp">{leader.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sobre-cta">
          <div className="sobre-cta-container">
            <div className="sobre-cta-text">
              <h2 className="sobre-cta-title">
                Venha Fazer Parte da Nossa História
              </h2>
              <p className="sobre-cta-subtitle">
                Junte-se a nós nesta jornada de crescimento e inovação no setor de transporte e logística.
              </p>
              <div className="sobre-cta-btns">
                <button className="sobre-btn sobre-btn-primary">
                  Trabalhe Conosco
                </button>
                <button className="sobre-btn sobre-btn-outline">
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}