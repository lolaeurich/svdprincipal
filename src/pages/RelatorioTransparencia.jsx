import React from "react";
import { Download, Users, DollarSign, TrendingUp, BarChart3 } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/RelatorioTransparencia.css";
import des1 from "../assets/blog/igualdade1.png";
import des2 from "../assets/blog/igualdade2.png";
import des3 from "../assets/blog/igualdade3.png";

export default function RelatorioTransparencia() {
  const salaryData = [
    {
      position: "Motorista",
      male: { count: 125, average: "R$ 3.850", median: "R$ 3.720" },
      female: { count: 15, average: "R$ 3.920", median: "R$ 3.800" },
      total: 140
    },
    {
      position: "Analista",
      male: { count: 28, average: "R$ 4.500", median: "R$ 4.350" },
      female: { count: 32, average: "R$ 4.650", median: "R$ 4.480" },
      total: 60
    },
    {
      position: "Coordenador",
      male: { count: 12, average: "R$ 6.200", median: "R$ 6.000" },
      female: { count: 8, average: "R$ 6.350", median: "R$ 6.150" },
      total: 20
    },
    {
      position: "Gerente",
      male: { count: 6, average: "R$ 9.500", median: "R$ 9.200" },
      female: { count: 4, average: "R$ 9.800", median: "R$ 9.500" },
      total: 10
    }
  ];

  const diversityStats = [
    { label: "Colaboradores Totais", value: "230", icon: <Users className="icon-main" /> },
    { label: "Mulheres na Empresa", value: "25.7%", icon: <Users className="icon-main" /> },
    { label: "Diferença Salarial Média", value: "2.3%", icon: <DollarSign className="icon-main" /> },
    { label: "Cargos de Liderança (Mulheres)", value: "30%", icon: <TrendingUp className="icon-main" /> }
  ];

  const initiatives = [
    "Programa de capacitação profissional para mulheres",
    "Política de equidade salarial com revisões anuais",
    "Comitê de diversidade e inclusão ativo",
    "Flexibilidade de horários para mães",
    "Programa de mentoria para desenvolvimento de liderança feminina",
    "Campanhas de conscientização sobre igualdade de gênero"
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="main-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container relative z-10">
            <div className="hero-text-container">
              <h1 className="hero-title">Relatório de Transparência Salarial</h1>
              <p className="hero-subtitle">
                Compromisso com a equidade, transparência e igualdade de oportunidades
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas Gerais */}
        <section className="general-stats-section">
          <div className="container">
            <h2 className="section-title">Panorama Geral</h2>
            <div className="stats-grid">
              {diversityStats.map((stat, index) => (
                <div key={index} className="card-stats card-hover">
                  <div className="card-content-stats">
                    <div className="icon-circle">
                      {stat.icon}
                    </div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela de Transparência Salarial */}
        <section className="salary-table-section">
          <div className="container">
            <h2 className="section-title">Relatório de Transparência e Igualdade Salarial de Mulheres e Homens - 1º Semestre 2025</h2>
            <div className="card-table card-hover">
              <div className="card-header">
                <h2 className="card-title-flex">
                  <BarChart3 className="icon-title" />
                  Empregador: 04.732.762/0001-33 / Quant. de trabalhadores ativos em 31/12/2024: 175
                </h2>
                <p className="card-subtitle-table">
                  Dados referentes ao período de Janeiro a Dezembro de 2024
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column",justifyContent: "space-around", alignItems: "center" }}>
              <img src={des1} alt="Certificado ISO 39001"  />
              <img src={des2} alt="Certificado ISO 39001"  />
              <img src={des3} alt="Certificado ISO 39001"  />
              </div>

            </div>
          </div>
        </section>

        {/* Iniciativas de Equidade */}
        <section className="equity-section">
          <div className="container">
            <div className="equity-grid">
              <div>
                <h2 className="section-title-left">Nossas Iniciativas de Equidade</h2>
                <p className="equity-text">
                  Acreditamos que a diversidade e inclusão são fundamentais para o sucesso da nossa empresa. 
                  Por isso, implementamos várias iniciativas para garantir equidade e oportunidades iguais para todos.
                </p>
                <ul className="initiatives-list">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="initiative-item">
                      <div className="bullet"></div>
                      <span className="initiative-text">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="goal-cards-container">
                <div className="card-goal card-hover">
                  <div className="goal-content">
                    <div className="goal-value-green">Meta 2025</div>
                    <div className="goal-title">Equidade Salarial Completa</div>
                    <p className="goal-description">
                      Eliminar completamente as diferenças salariais entre gêneros para mesmas funções
                    </p>
                  </div>
                </div>
                
                <div className="card-goal card-hover">
                  <div className="goal-content">
                    <div className="goal-value-blue">40%</div>
                    <div className="goal-title">Liderança Feminina</div>
                    <p className="goal-description">
                      Meta de representatividade feminina em cargos de liderança até 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads e Contato */}
        <section className="documents-section">
          <div className="container">
            <div className="documents-container">
              <h2 className="documents-title">Documentos e Contato</h2>
              <div className="documents-grid">
                <div className="card-download card-hover">
                  <div className="card-header">
                    <h2 className="card-title-download">Relatório Completo</h2>
                  </div>
                  <div className="card-content">
                    <p className="download-text">
                      Baixe o relatório completo com todos os dados detalhados e metodologia utilizada.
                    </p>
                    <button className="btn btn-download">
                      <Download className="icon-btn" />
                      Download PDF (2.4 MB)
                    </button>
                  </div>
                </div>

                <div className="card-contact card-hover">
                  <div className="card-header">
                    <h2 className="card-title-contact">Dúvidas ou Sugestões</h2>
                  </div>
                  <div className="card-content">
                    <p className="contact-text">
                      Entre em contato conosco para esclarecimentos ou sugestões sobre nossos dados.
                    </p>
                    <button className="btn btn-contact-email">
                      transparencia@svdtransportes.com.br
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content card-hover">
              <h2 className="cta-title" style={{ color: 'white' }}>Comprometidos com a Transparência</h2>
              <p className="cta-subtitle">
                Continuamos trabalhando para ser uma empresa cada vez mais justa e igualitária.
              </p>
              <button className="btn btn-cta btn-lg">
                Conheça Nossa Equipe
              </button>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}
