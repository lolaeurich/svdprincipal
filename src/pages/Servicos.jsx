import React from "react";
import { Truck, Package, Shield, Clock, Globe, Settings } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/Servicos.css";
import servicosBg from "../assets/servicos-bg.jpg";

const Card = ({ children, className }) => (
  <div className={`service-card-neon ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`card-header ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

const Button = ({ children, className, variant, ...props }) => (
  <button className={`btn ${className} ${variant}`} {...props}>
    {children}
  </button>
);

export default function Servicos() {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Transporte Rodoviário",
      description: "Soluções completas em transporte rodoviário de cargas com frota própria moderna e rastreamento em tempo real.",
      features: ["Frota própria", "Rastreamento GPS", "Seguro total", "Entrega programada"]
    },
    {
      icon: <Package className="w-12 h-12 text-red-600" />,
      title: "Logística Integrada",
      description: "Gestão completa da cadeia logística com armazenagem, distribuição e controle de estoque.",
      features: ["Armazenagem", "Distribuição", "Controle de estoque", "Gestão de pedidos"]
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Cargas Especiais",
      description: "Transporte especializado para cargas sensíveis, perigosas e de alto valor agregado.",
      features: ["Cargas perigosas", "Produtos químicos", "Equipamentos especiais", "Escolta armada"]
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Entregas Expressas",
      description: "Serviço de entrega rápida para cargas urgentes com prazos garantidos.",
      features: ["24/7 disponível", "Prazo garantido", "Tracking online", "Suporte dedicado"]
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Comércio Exterior",
      description: "Soluções para importação e exportação com tratamento aduaneiro completo.",
      features: ["Importação", "Exportação", "Despacho aduaneiro", "Documentação"]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Consultoria Logística",
      description: "Análise e otimização de processos logísticos para redução de custos e aumento de eficiência.",
      features: ["Análise de processos", "Redução de custos", "Otimização de rotas", "Relatórios detalhados"]
    }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="services-page-container">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${servicosBg}) center center/cover no-repeat`,
            minHeight: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="container hero-container">
            <div className="servicos-hero-center">
              <h1 className="hero-title-lg servicos-hero-gradient">
                Nossos Serviços
              </h1>
              <p className="hero-subtitle servicos-hero-subtitle">
                Soluções completas em transporte e logística para conectar seu negócio em todo o Brasil
              </p>
            </div>
          </div>
        </section>

        {/* Serviços Grid */}
        <section className="services-grid-section">
          <div className="container services-grid-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <Card key={index} className="service-card">
                  <CardHeader className="card-header-pb">
                    <div className="flex items-start space-x-4">
                      <div className="icon-container">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="service-title">
                          {service.title}
                        </CardTitle>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="features-container">
                      <h4 className="features-title">Características do serviço:</h4>
                      <ul className="features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <div className="feature-bullet"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-card-btn-wrapper">
                      <Button className="w-full service-card-btn">
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section2">
          <div className="container cta-container">
            <div className="cta-content">
              <h2 className="cta-title cta-gradient-title">Precisa de uma solução personalizada?</h2>
              <p className="cta-subtitle">
                Nossa equipe de especialistas está pronta para desenvolver a solução logística ideal para seu negócio.
              </p>
              <Button className="cta-button-small">
                Fale com Nossos Especialistas
              </Button>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}
