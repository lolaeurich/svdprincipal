import React from "react";
import { Leaf, Recycle, TreePine, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import sustentabilidadeBg from "../assets/sustentabilidade.jpg";
import "../styles/Sustentabilidade.css";

export default function Sustentabilidade() {
  const initiatives = [
    {
      icon: <Leaf className="icon-leaf" />,
      title: "Frota Eco-Eficiente",
      description: "Investimos em veículos com tecnologia Euro 6 e combustíveis alternativos para reduzir emissões de CO2.",
      metrics: "45% menos emissões"
    },
    {
      icon: <Recycle className="icon-recycle" />,
      title: "Economia Circular",
      description: "Programa de reciclagem e reutilização de materiais, reduzindo desperdícios operacionais.",
      metrics: "85% materiais reciclados"
    },
    {
      icon: <TreePine className="icon-treepine" />,
      title: "Reflorestamento",
      description: "Projeto de plantio de árvores nativas para compensar 100% das emissões de carbono da operação.",
      metrics: "10.000 árvores plantadas"
    },
    {
      icon: <Users className="icon-users" />,
      title: "Impacto Social",
      description: "Programas de capacitação profissional e desenvolvimento das comunidades locais.",
      metrics: "500+ pessoas capacitadas"
    }
  ];

  const stats = [
    { number: 95, label: "Redução CO2", suffix: "%" },
    { number: 100, label: "Energia Renovável", suffix: "%" },
    { number: 15, label: "Certificações" },
    { number: 25, label: "Árvores Plantadas", suffix: "K" }
  ];

  const goals = [
    {
      title: "2025: Frota 100% Sustentável",
      description: "Conversão completa da frota para veículos híbridos e elétricos",
      year: "2025"
    },
    {
      title: "2026: Carbono Neutro",
      description: "Neutralização total das emissões de carbono através de projetos ambientais",
      year: "2026"
    },
    {
      title: "2027: Energia Limpa", 
      description: "100% da operação alimentada por energia solar e eólica",
      year: "2027"
    },
    {
      title: "2030: Impacto Positivo",
      description: "Geração de mais benefícios ambientais do que impactos negativos",
      year: "2030"
    }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="sustentabilidade-page">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(18, 86, 6, 0.73), rgba(18, 86, 6, 0.73)), url(${sustentabilidadeBg}) center center/cover no-repeat`
          }}
        >
          {/* Animated background elements */}
          <div className="hero-background-animation">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="animated-dot"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          <div className="container hero-content">
            <div className="text-center text-white">
              <h1 className="hero-title">
                Sustentabilidade
              </h1>
              <p className="hero-subtitle">
                Comprometidos com um futuro mais verde e sustentável para as próximas gerações
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas Animadas */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2500}
                      suffix={stat.suffix || ""}
                      className="animated-counter"
                    />
                  </div>
                  <div className="stat-label" style={{ color: "white" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossas Iniciativas */}
        <section className="initiatives-section">
          <div className="container">
            <h2 className="initiatives-title">
              Nossas Iniciativas
            </h2>
            <div className="initiatives-grid">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="initiative-card">
                  <CardHeader className="initiative-card-header">
                    <div className="initiative-card-icon-container">
                      <div className="initiative-card-icon-wrapper">
                        {initiative.icon}
                      </div>
                      <div>
                        <CardTitle className="initiative-title">
                          {initiative.title}
                        </CardTitle>
                        <div className="initiative-metrics">
                          {initiative.metrics}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="initiative-description">
                      {initiative.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compromissos Ambientais */}
        <section className="commitments-section">
          <div className="container">
            <div className="commitments-grid">
              <div className="commitments-content-wrapper">
                <h2 className="commitments-title">
                  Nossos Compromissos
                </h2>
                <p className="commitments-description">
                  Assumimos responsabilidades concretas com o meio ambiente, estabelecendo metas ambiciosas 
                  e investindo em tecnologias limpas para construir um futuro sustentável.
                </p>
                <div className="commitments-list">
                  {[
                    { color: "color-emerald", text: "Certificação ISO 14001 - Gestão Ambiental" },
                    { color: "color-cyan", text: "Adesão ao Pacto Global da ONU" },
                    { color: "color-yellow", text: "Programa Carbon Free Platinum" },
                    { color: "color-purple", text: "Selo Verde do Transporte Sustentável" }
                  ].map((item, index) => (
                    <div key={index} className="commitment-item">
                      <div className={`commitment-dot ${item.color}`}></div>
                      <span className="commitment-text">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="commitments-image-wrapper">
                <div className="commitments-image-blur"></div>
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800" 
                  alt="Sustentabilidade"
                  className="commitments-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metas Futuras */}
        <section className="goals-section">
          <div className="container">
            <h2 className="goals-title">
              Roadmap de Sustentabilidade
            </h2>
            <div className="goals-list-container">
              {goals.map((goal, index) => (
                <Card key={index} className="goal-card">
                  <CardContent className="goal-card-content">
                    <div className="goal-item-wrapper">
                      <div className="goal-icon-wrapper">
                        <div className="goal-icon-bg">
                          <Target className="goal-icon" />
                        </div>
                      </div>
                      <div className="goal-content-wrapper">
                        <div className="goal-header">
                          <h3 className="goal-title-text">
                            {goal.title}
                          </h3>
                          <span className="goal-year-badge">
                            {goal.year}
                          </span>
                        </div>
                        <p className="goal-description">{goal.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reconhecimentos */}
        <section className="awards-section">
          <div className="container">
            <h2 className="awards-title">
              Reconhecimentos
            </h2>
            <div className="awards-grid">
              {[1, 2, 3].map((award) => (
                <Card key={award} className="award-card">
                  <CardContent className="award-card-content">
                    <div className="award-icon-wrapper">
                      <Award className="award-icon" />
                    </div>
                    <h3 className="award-title">
                      Prêmio Sustentabilidade {2022 + award}
                    </h3>
                    <p className="award-description">
                      Reconhecimento nacional pela excelência em práticas sustentáveis no setor de transporte.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}