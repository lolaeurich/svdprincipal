import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textearea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import TopBar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/Contato.css";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Implementar envio do formulário
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="contact-icon phone-icon" />,
      title: "Telefone",
      info: "(41) 3373-3330",
      subtitle: "Seg a Sex: 8h às 18h"
    },
    {
      icon: <Mail className="contact-icon mail-icon" />,
      title: "Email",
      info: "contato@gruposvd.com.br",
      subtitle: "Resposta em até 24h"
    },
    {
      icon: <MapPin className="contact-icon map-icon" />,
      title: "Endereço",
      info: "Rua Edmundo Eckstein 888",
      subtitle: "Curitiba, PR, 81290-080"
    },
    {
      icon: <Clock className="contact-icon clock-icon" />,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
    }
  ];

  return (
    <>
     <TopBar />
      <HomeHeader />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section-contato">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Entre em Contato</h1>
            <p className="hero-subtitle">
              Estamos prontos para atender suas necessidades logísticas. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((contact, index) => (
              <Card key={index} className={`contact-card ${index === 0 ? 'shine-effect' : ''}`}>
                <CardContent className="contact-card-content">
                  <div className="contact-icon-wrapper">
                    {contact.icon}
                  </div>
                  <h3 className="contact-title">{contact.title}</h3>
                  <p className="contact-info">{contact.info}</p>
                  <p className="contact-subtitle">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-map-section">
        <div className="container">
          <div className="contact-form-map-grid">
            {/* Formulário de Contato */}
            <Card className="form-card">
              <CardHeader>
                <CardTitle className="form-title">Envie sua mensagem</CardTitle>
                <p className="form-subtitle">Preencha o formulário abaixo e entraremos em contato em breve.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="form-space">
                  <div className="form-grid">
                    <div>
                      <label className="form-label">Nome *</label>
                      <Input
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-grid">
                    <div>
                      <label className="form-label">Telefone</label>
                      <Input
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="form-label">Empresa</label>
                      <Input
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Assunto *</label>
                    <Input
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Sobre o que você gostaria de falar?"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Mensagem *</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade ou dúvida..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="submit-button">
                    <Send className="send-icon" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
          <HomeFooter />

    </>
  );
}