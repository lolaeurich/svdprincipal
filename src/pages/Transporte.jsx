import React from "react";
import { Truck, Package, Shield, MapPin, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import homeSecond from "../assets/home-second.jpeg";
import ctba from "../assets/service-item/ctba.png";
import ctba2 from "../assets/service-item/ctba2.png";
import sbc from "../assets/service-item/sbc.jpg";
import borja from "../assets/service-item/borja.png";
import pg from "../assets/service-item/pg.png";
import "../styles/Transporte.css";  


export default function TransportesArmazenagem() {
  const services = [
    {
      icon: <Truck className="service-icon" />,
      title: "Transporte Rodoviário",
      description: "Frota moderna e versátil para todos os tipos de carga",
      features: ["Frota própria de 200+ veículos", "Rastreamento GPS 24/7", "Manutenção preventiva", "Motoristas qualificados"],
      gradientClass: "gradient-blue"
    },
    {
      icon: <Package className="service-icon" />,
      title: "Armazenagem Inteligente",
      description: "Centros de distribuição estrategicamente localizados",
      features: ["15.000m² de área coberta", "Sistema WMS integrado", "Gestão de frota por meio de aplicativo em tempo real", "Gestão de estoque"],
      gradientClass: "gradient-green"
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Segurança Total",
      description: "Proteção completa para suas cargas",
      features: ["Seguro total da carga", "Monitoramento 24h", "Escolta quando necessária", "Certificação de qualidade"],
      gradientClass: "gradient-purple"
    }
  ];

  const fleet = [
    { type: "Carretas", quantity: 80, capacity: "30 toneladas" },
    { type: "Trucks", quantity: 60, capacity: "15 toneladas" },
    { type: "VUCs", quantity: 40, capacity: "5 toneladas" },
    { type: "Bitrem", quantity: 20, capacity: "50 toneladas" }
  ];

  const warehouses = [
    {
      location: "Matriz - Curitiba, PR",
      area: "150.000m²",
      image: ctba
    },
    {
      location: "Curitiba, PR (Pátio 2)",
      area: "90.000m²",
      image: ctba2
    },
    {
      location: "São Bernardo do Campo, SP",
      area: "45.000m²",
      image: sbc
    },
     {
      location: "São Borja, RS (Mercovia)",
      area: "-",
      image: borja
    },
    {
      location: "Ponta Grossa, PR",
      area: "40.000m²",
      image: pg
    }
  ];

  const tecnologia = [
    { icon: <BarChart3 className="tech-icon" />, text: "Sistema WMS para gestão de estoque" },
    { icon: <MapPin className="tech-icon" />, text: "Rastreamento GPS em tempo real" },
    { icon: <Clock className="tech-icon" />, text: "Monitoramento 24/7" },
    { icon: <Shield className="tech-icon" />, text: "Controles de segurança automatizados" }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="transporte-root">
        {/* Hero Section */}
        <section
          className="transporte-hero"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="transporte-hero-bg"></div>
          <div className="transporte-hero-container">
            <div className="transporte-hero-text">
              <h1 className="transporte-hero-title">
                <span className="transporte-hero-title-gradient">Transportes &</span>
                <br />
                <span className="transporte-hero-title-light">Armazenagem</span>
              </h1>
              <p className="transporte-hero-subtitle">
                Soluções completas em transporte e armazenagem com tecnologia de ponta
              </p>
            </div>
          </div>
        </section>

        {/* Serviços Principais */}
        <section className="transporte-servicos">
          <div className="transporte-container">
            <h2 className="transporte-section-title">Nossos Serviços</h2>
            <div className="transporte-servicos-grid">
              {services.map((service, index) => (
                <Card key={index} className="transporte-servico-card">
                  <div className={`transporte-servico-bar ${service.gradientClass}`}></div>
                  <CardHeader className="transporte-servico-header">
                    <div className={`transporte-servico-icon-bg ${service.gradientClass}`}>
                      <div className="transporte-servico-icon">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="transporte-servico-title">
                      {service.title}
                    </CardTitle>
                    <p className="transporte-servico-desc">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="transporte-servico-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="transporte-servico-list-item">
                          <div className={`transporte-servico-dot ${service.gradientClass}`} style={{ flexShrink: 0 }}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Frota */}
        <section className="transporte-frota">
          <div className="transporte-container">
            <div className="transporte-frota-header">
              <h2 className="transporte-frota-title">Nossa Frota</h2>
              <p className="transporte-frota-desc">
                Nossa frota é 100% Euro 6, moderna e bem equipada para atender todas as suas necessidades logísticas.
              </p>
            </div>
            <div className="transporte-frota-grid">
              {fleet.map((vehicle, index) => (
                <Card key={index} className="transporte-frota-card">
                  <CardContent>
                    <div className="transporte-frota-quantidade">{vehicle.quantity}</div>
                    <h3 className="transporte-frota-tipo">{vehicle.type}</h3>
                    <p className="transporte-frota-capacidade">Capacidade: {vehicle.capacity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Centros de Distribuição */}
        <section className="transporte-armazens">
          <div className="transporte-container">
            <div className="transporte-armazens-header">
              <h2 className="transporte-section-title">Centros de Distribuição</h2>
              <p className="transporte-armazens-desc">
                Armazéns estrategicamente localizados para otimizar sua cadeia de suprimentos
              </p>
            </div>
            <div className="transporte-armazens-grid">
              {warehouses.map((warehouse, index) => (
                <Card key={index} className="transporte-armazem-card">
                  <div className="transporte-armazem-img-wrap">
                    <img 
                      src={warehouse.image} 
                      alt={warehouse.location}
                      className="transporte-armazem-img"
                    />
                  </div>
                  <CardContent className="transporte-armazem-content">
                    <div className="transporte-armazem-local">
                      <MapPin className="transporte-armazem-local-icon" />
                      <h3 className="transporte-armazem-local-title">{warehouse.location}</h3>
                    </div>
                    <div className="transporte-armazem-info">
                      <div>
                        <span>Área:</span>
                        <span className="transporte-armazem-info-bold">{warehouse.area}</span>
                      </div>
                      <div>
                        <span>Capacidade:</span>
                        <span className="transporte-armazem-info-bold">{warehouse.capacity}</span>
                      </div>
                      <div>
                        <span>Temperatura:</span>
                        <span className="transporte-armazem-info-bold">{warehouse.temperature}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="transporte-armazem-btn">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologia */}
        <section className="transporte-tecnologia">
          <div className="transporte-container">
            <div className="transporte-tecnologia-grid">
              <div>
                <h2 className="transporte-tecnologia-title">Tecnologia de Ponta</h2>
                <p className="transporte-tecnologia-desc">
                  Utilizamos as mais avançadas tecnologias para garantir eficiência, 
                  segurança e transparência em todas as operações de transporte e armazenagem.
                </p>
                <div className="transporte-tecnologia-list">
                  {tecnologia.map((item, index) => (
                    <div key={index} className="transporte-tecnologia-list-item">
                      <div className="transporte-tecnologia-list-icon">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="transporte-tecnologia-img-wrap">
                <div className="transporte-tecnologia-img-blur"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800" 
                  alt="Tecnologia"
                  className="transporte-tecnologia-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="transporte-cta">
          <div className="transporte-container">
            <div className="transporte-cta-content">
              <h2 className="transporte-cta-title">Pronto para Otimizar sua Logística?</h2>
              <p className="transporte-cta-desc">
                Entre em contato conosco e descubra como podemos melhorar sua operação de transporte e armazenagem.
              </p>
              <div className="transporte-cta-btns">
                <Button 
                  className="transporte-cta-btn-primary"
                  onClick={() => window.location.href = 'mailto:comercial2@gruposvd.com.br'}
                >
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline" 
                  className="transporte-cta-btn-outline"
                  onClick={() => window.location.href = 'mailto:comercial2@gruposvd.com.br'}
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}