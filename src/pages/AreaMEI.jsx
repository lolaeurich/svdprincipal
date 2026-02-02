import React from "react";
import { User, Truck, DollarSign, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/AreaMEI.css";

export default function AreaMEI() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Pagamento Rápido",
      description: "Adiantamento de fretes e pagamento agilizado para garantir seu fluxo de caixa.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Cargas Constantes",
      description: "Acesso a uma vasta rede de cargas em todo o Brasil, garantindo trabalho o ano todo.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Capacitação",
      description: "Treinamentos e cursos online gratuitos sobre segurança, finanças e tecnologia.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="mei-root">
      {/* Hero Section */}
      <section className="mei-hero">
        <div className="mei-hero-bg"></div>
        <div className="mei-hero-layer"></div>
        <div className="mei-hero-content">
          <div className="text-center text-white">
            <User className="mei-hero-icon" />
            <h1 className="mei-hero-title">
              <span className="mei-hero-title-gradient">
                Área do MEI
              </span>
            </h1>
            <p className="mei-hero-subtitle">
              O portal exclusivo para nossos parceiros Microempreendedores Individuais.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mei-benefits-section">
        <div className="mei-container">
          <div className="mei-benefits-header">
            <h2 className="mei-benefits-title">Vantagens de ser um parceiro SVD</h2>
            <p className="mei-benefits-desc">
              Oferecemos as melhores condições para você, motorista autônomo.
            </p>
          </div>
          <div className="mei-benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} className="mei-benefit-card group">
                <CardHeader>
                  <div className={`mei-benefit-icon-bg bg-gradient-to-br ${benefit.gradient}`}>
                    <div className="mei-benefit-icon">{benefit.icon}</div>
                  </div>
                  <CardTitle className="mei-benefit-title">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mei-benefit-desc">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mei-btn-wrap">
            <Button 
              className="mei-btn-cta"
              onClick={() => window.location.href = 'mailto:Eliziane.hyrayama@gruposvd.com.br'}
            >Quero ser MEI</Button>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}