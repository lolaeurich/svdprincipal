import React from "react";
import { Route, TrendingUp, Zap, Globe, Package2, Truck, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import homeSecond from "../assets/home-second.jpeg";
import "../styles/Logistica.css";

export default function Logistica() {
  const solutions = [
    {
      icon: <Route className="solution-icon" />,
      title: "Planejamento de Rotas",
      description: "Otimização inteligente de rotas para máxima eficiência",
      features: ["Análise de tráfego em tempo real", "Otimização de combustível", "Redução de tempo de entrega", "Relatórios detalhados"],
      gradientClass: "gradient-orange"
    },
    {
      icon: <TrendingUp className="solution-icon" />,
      title: "Supply Chain Management",
      description: "Gestão completa da cadeia de suprimentos",
      features: ["Controle de estoque", "Previsão de demanda", "Gestão de fornecedores", "KPIs em tempo real"],
      gradientClass: "gradient-green"
    },
    {
      icon: <Zap className="solution-icon" />,
      title: "Logística Expressa",
      description: "Entregas urgentes com agilidade garantida",
      features: ["Entrega same-day", "Rastreamento em tempo real", "Equipe dedicada", "SLA garantido"],
      gradientClass: "gradient-yellow"
    },
    {
      icon: <Globe className="solution-icon" />,
      title: "Distribuição Nacional",
      description: "Cobertura completa em todo território brasileiro",
      features: ["Rede de 50+ cidades", "Centros de distribuição", "Entrega Técnica de veículos", "Reverse logistics"],
      gradientClass: "gradient-blue"
    },
    {
      icon: <ClipboardCheck className="solution-icon" />,
      title: "Entrega Técnica",
      description: "Veículo entregue preparado, personalizado e revisado com explicação técnica detalhada.",
      features: ["Sistemas e tecnologias embarcadas", "Itens personalizados e acessórios", "Cuidados operacionais e manutenção", "Checklist final de qualidade"],
      gradientClass: "gradient-green"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Análise de Necessidades",
      description: "Avaliamos suas demandas logísticas e desafios específicos"
    },
    {
      step: "02", 
      title: "Planejamento Estratégico",
      description: "Desenvolvemos uma estratégia logística personalizada"
    },
    {
      step: "03",
      title: "Implementação",
      description: "Colocamos o plano em ação com nossa equipe especializada"
    },
    {
      step: "04",
      title: "Monitoramento",
      description: "Acompanhamos resultados e fazemos ajustes contínuos"
    }
  ];

  const benefits = [
    { 
      metric: "30%", 
      description: "Redução nos custos logísticos", 
      icon: <TrendingUp className="benefit-icon" /> 
    },
    { 
      metric: "95%", 
      description: "Entregas no prazo", 
      icon: <Package2 className="benefit-icon" /> 
    },
    { 
      metric: "24h", 
      description: "Suporte disponível", 
      icon: <Zap className="benefit-icon" /> 
    },
    { 
      metric: "99%", 
      description: "Satisfação do cliente", 
      icon: <Truck className="benefit-icon" /> 
    }
  ];

  const tecnologias = [
    "Inteligência Artificial",
    "IoT e Sensores",
    "Big Data Analytics",
    "Machine Learning",
    "Blockchain",
    "Cloud Computing"
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="logistica-root">
        {/* Hero Section */}
        <section
          className="logistica-hero"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="logistica-hero-container">
              <div className="logistica-hero-text">
                <h1 className="logistica-hero-title">
                  <span className="logistica-hero-title-gradient">Logística Inteligente</span>
                </h1>
                <p className="logistica-hero-subtitle">
                  Soluções logísticas avançadas que otimizam sua cadeia de suprimentos 
                  e reduzem custos operacionais significativamente.
                </p>
              </div>
          </div>
        </section>

        {/* Soluções Logísticas */}
        <section className="logistica-solucoes">
          <div className="logistica-container">
            <div className="logistica-solucoes-header">
              <h2 className="logistica-section-title">Nossas Soluções</h2>
              <p className="logistica-solucoes-desc">
                Oferecemos soluções logísticas completas e personalizadas para cada tipo de negócio
              </p>
            </div>
            <div className="logistica-solucoes-grid">
              {solutions.map((solution, index) => (
                <Card key={index} className="logistica-solucao-card">
                  <div className={`logistica-solucao-bar ${solution.gradientClass}`}></div>
                  <CardHeader className="logistica-solucao-header">
                    <div className="logistica-solucao-header-flex">
                      <div className={`logistica-solucao-icon-bg ${solution.gradientClass}`}>
                        <div className="logistica-solucao-icon">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="logistica-solucao-header-content">
                        <CardTitle className="logistica-solucao-title">
                          {solution.title}
                        </CardTitle>
                        <p className="logistica-solucao-desc">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="logistica-solucao-features">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="logistica-solucao-feature">
                          <div className={`logistica-solucao-dot ${solution.gradientClass}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nosso Processo */}
        <section className="logistica-processo">
          <div className="logistica-container">
            <div className="logistica-processo-header">
              <h2 className="logistica-section-title logistica-section-title-gradient">Nosso Processo</h2>
              <p className="logistica-processo-desc">
                Metodologia comprovada para implementar soluções logísticas eficientes
              </p>
            </div>
            <div className="logistica-processo-grid">
              {processes.map((process, index) => (
                <div key={index} className="logistica-processo-card">
                  <div className="logistica-processo-step-bg">
                    <span className="logistica-processo-step">{process.step}</span>
                  </div>
                  <h3 className="logistica-processo-title">{process.title}</h3>
                  <p className="logistica-processo-desc2">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="logistica-beneficios">
          <div className="logistica-container">
            <div className="logistica-beneficios-header">
              <h2 className="logistica-section-title">Resultados Comprovados</h2>
              <p className="logistica-beneficios-desc">
                Nossos clientes experimentam melhorias significativas em suas operações
              </p>
            </div>
            <div className="logistica-beneficios-grid">
              {benefits.map((benefit, index) => (
                <Card key={index} className="logistica-beneficio-card">
                  <CardContent>
                    <div className="logistica-beneficio-icon-bg">
                      <div className="logistica-beneficio-icon">{benefit.icon}</div>
                    </div>
                    <div className="logistica-beneficio-metric">{benefit.metric}</div>
                    <p className="logistica-beneficio-desc2">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="logistica-tecnologias">
          <div className="logistica-container">
            <div className="logistica-tecnologias-grid">
              <div className="logistica-tecnologias-img-wrap">
                <div className="logistica-tecnologias-img-blur"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800" 
                  alt="Tecnologias Avançadas"
                  className="logistica-tecnologias-img"
                />
              </div>
              <div>
                <h2 className="logistica-section-title">Tecnologias Avançadas</h2>
                <p className="logistica-tecnologias-desc">
                  Utilizamos as mais modernas tecnologias para garantir eficiência, 
                  transparência e controle total sobre toda a operação logística.
                </p>
                <div className="logistica-tecnologias-list">
                  {tecnologias.map((tech, index) => (
                    <div key={index} className="logistica-tecnologias-list-item">
                      <div className="logistica-tecnologias-dot"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}