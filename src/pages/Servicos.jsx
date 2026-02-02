import React from "react";
import { Truck, Package, Shield, Clock, Globe, Settings, ClipboardCheck } from "lucide-react";
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
      description: "Soluções completas em transporte rodoviário de cargas com frota própria 100% Euro 6.",
      features: ["Frota própria", "Rastreamento em tempo real", "Seguro total", "Cobertura nacional"]
    },
    {
      icon: <Package className="w-12 h-12 text-red-600" />,
      title: "Logística Integrada",
      description: "Gestão completa da cadeia logística com armazenagem, distribuição, entrega técnica e controle de estoque.",
      features: ["Armazenagem", "Distribuição", "Controle de estoque", "Entrega Técnica de veículos"]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Consultoria Logística",
      description: "Análise e otimização de processos logísticos para redução de custos e aumento de eficiência.",
      features: ["Análise de processos", "Redução de custos", "Otimização de rotas", "Relatórios detalhados"]
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-green-600" />,
      title: "Entrega Técnica",
      description: "O momento em que o cliente recebe o veículo totalmente preparado, personalizado e revisado, acompanhado de uma explicação técnica detalhada.",
      features: [
        "Funcionamento de sistemas e tecnologias embarcadas",
        "Itens personalizados e acessórios instalados",
        "Cuidados operacionais e de manutenção preventiva",
        "Checklist final de qualidade",
        "Dúvidas técnicas do cliente"
      ]
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
                    {service.features && (
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
                    )}
                    <div className="service-card-btn-wrapper">
                      <Button 
                        className="w-full service-card-btn"
                        onClick={() => window.location.href = 'mailto:comercial2@gruposvd.com.br'}
                      >
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
              <Button 
                className="cta-button-small"
                onClick={() => window.location.href = 'mailto:comercial2@gruposvd.com.br'}
              >
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
