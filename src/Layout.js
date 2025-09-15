import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

import "./styles/Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Pesquisando por:", searchTerm);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "Serviços", url: createPageUrl("Servicos") },
    { name: "Contato", url: createPageUrl("Contato") },
    { name: "Trabalho Conosco", url: createPageUrl("TrabalhoConosco") },
    { name: "Informativo SBB", url: createPageUrl("InformativoSBB") },
  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <Link to={createPageUrl("Home")} className="logo-link">
            {/* Logo SVD usando a imagem enviada */}
            <div className="logo-container">
              <svg viewBox="0 0 200 80" className="logo-svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <text x="10" y="25" fill="url(#logoGradient)" className="logo-text-group">GRUPO</text>
                <path d="M10 35 Q50 25 90 35 Q130 45 170 35 Q180 40 185 50 Q180 60 170 55 Q130 45 90 55 Q50 65 10 55 Z" fill="url(#logoGradient)" />
                <text x="60" y="70" fill="url(#logoGradient)" className="logo-text-svd">SVD</text>
                <text x="135" y="75" fill="#64748B" className="logo-text-since">Desde 2001</text>
              </svg>
            </div>
            <span className="logo-title">SVD TRANSPORTES</span>
          </Link>
          
          <div className="nav-links-container">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                onClick={scrollToTop}
                className={`nav-link ${
                  location.pathname === item.url ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button 
                type="submit"
                className="search-button"
              >
                <Search className="search-icon" />
              </button>
            </div>
          </form>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer antigo removido para evitar erro de comentário aninhado */}

      {/* Novo Footer customizado */}
      <footer className="custom-footer-bg">
        {/* Neon background effect */}
        <div className="custom-footer-bg-neon"></div>
        <div className="custom-footer-bg-radial"></div>
        
        <div className="custom-footer-container">
          <div className="custom-footer-grid">
            {/* Logo e Info Principal */}
            <div className="custom-footer-col-1">
              <div className="custom-footer-logo-info">
                <div className="custom-footer-logo-svg-wrap">
                  <svg viewBox="0 0 200 80" className="custom-footer-logo-svg">
                    <defs>
                      <linearGradient id="customFooterLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    <text x="10" y="25" fill="url(#customFooterLogoGradient)" className="custom-footer-logo-text-group">GRUPO</text>
                    <path d="M10 35 Q50 25 90 35 Q130 45 170 35 Q180 40 185 50 Q180 60 170 55 Q130 45 90 55 Q50 65 10 55 Z" fill="url(#customFooterLogoGradient)" />
                    <text x="60" y="70" fill="url(#customFooterLogoGradient)" className="custom-footer-logo-text-svd">SVD</text>
                    <text x="135" y="75" fill="#94A3B8" className="custom-footer-logo-text-since">Desde 2001</text>
                  </svg>
                </div>
                <span className="custom-footer-title">SVD TRANSPORTES</span>
              </div>
              <p className="custom-footer-description">
                Excelência em transporte e logística, conectando o Brasil com soluções inovadoras e sustentáveis.
              </p>
              <div className="custom-footer-social-links">
                <div className="custom-footer-social-icon custom-footer-facebook">
                  <Facebook className="custom-footer-social-svg" />
                </div>
                <div className="custom-footer-social-icon custom-footer-instagram">
                  <Instagram className="custom-footer-social-svg" />
                </div>
                <div className="custom-footer-social-icon custom-footer-linkedin">
                  <Linkedin className="custom-footer-social-svg" />
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="custom-footer-heading">Navegação</h3>
              <ul className="custom-footer-list">
                <li><Link to={createPageUrl("Home")} onClick={scrollToTop} className="custom-footer-link">Home</Link></li>
                <li><Link to={createPageUrl("QuemSomos")} onClick={scrollToTop} className="custom-footer-link">Quem Somos</Link></li>
                <li><Link to={createPageUrl("Servicos")} onClick={scrollToTop} className="custom-footer-link">Serviços</Link></li>
                <li><Link to={createPageUrl("Sustentabilidade")} onClick={scrollToTop} className="custom-footer-link">Sustentabilidade</Link></li>
                <li><Link to={createPageUrl("Blog")} onClick={scrollToTop} className="custom-footer-link">Blog</Link></li>
                <li><Link to={createPageUrl("Contato")} onClick={scrollToTop} className="custom-footer-link">Contato</Link></li>
              </ul>
            </div>

            {/* Nossos Produtos */}
            <div>
              <h3 className="custom-footer-heading">Nossos Produtos</h3>
              <ul className="custom-footer-list">
                <li><Link to={createPageUrl("TransportesArmazenagem")} onClick={scrollToTop} className="custom-footer-link">Transporte e Armazenagem</Link></li>
                <li><Link to={createPageUrl("Logistica")} onClick={scrollToTop} className="custom-footer-link">Logística</Link></li>
                <li><Link to={createPageUrl("Acessorios")} onClick={scrollToTop} className="custom-footer-link">Acessórios</Link></li>
                <li><Link to={createPageUrl("Seminovos")} onClick={scrollToTop} className="custom-footer-link">Seminovos</Link></li>
                <li><Link to={createPageUrl("Implementos")} onClick={scrollToTop} className="custom-footer-link">Funilaria e Pintura</Link></li>
                <li><Link to={createPageUrl("CatalogoOnline")} onClick={scrollToTop} className="custom-footer-link">Catálogo Online</Link></li>
              </ul>
            </div>

            {/* Portais e Políticas + Newsletter */}
            <div>
              <h3 className="custom-footer-heading">Portais & Políticas</h3>
              <ul className="custom-footer-list custom-footer-list-mb">
                <li><Link to={createPageUrl("AreaColaborador")} onClick={scrollToTop} className="custom-footer-link">Área do Colaborador</Link></li>
                <li><Link to={createPageUrl("AreaMEI")} onClick={scrollToTop} className="custom-footer-link">Área do MEI</Link></li>
                <li><Link to={createPageUrl("AreaPrestadorServicos")} onClick={scrollToTop} className="custom-footer-link">Área do Prestador</Link></li>
                <li><Link to={createPageUrl("TrabalhoConosco")} onClick={scrollToTop} className="custom-footer-link">Trabalhe Conosco</Link></li>
                <li><Link to={createPageUrl("CadastroFornecedores")} onClick={scrollToTop} className="custom-footer-link">Cadastro de Fornecedores</Link></li>
                <li><Link to={createPageUrl("PoliticaPrivacidade")} onClick={scrollToTop} className="custom-footer-link">Política de Privacidade</Link></li>
                <li><Link to={createPageUrl("RelatorioTransparencia")} onClick={scrollToTop} className="custom-footer-link">Relatório de Transparência</Link></li>
              </ul>

              {/* Newsletter */}
              <div className="custom-footer-newsletter">
                <h4 className="custom-footer-newsletter-title">Newsletter</h4>
                <div className="custom-footer-newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="custom-footer-newsletter-input"
                  />
                  <button className="custom-footer-newsletter-btn">
                    <Mail className="custom-footer-newsletter-icon" />
                  </button>
                </div>
              </div>

              {/* Bolinhas Coloridas */}
              <div className="custom-footer-balls">
                {/* Bolinha Laranja */}
                <div className="custom-footer-ball custom-footer-ball-orange">
                  <div className="custom-footer-ball-inner">
                    <Phone className="custom-footer-ball-icon custom-footer-ball-icon-orange" />
                  </div>
                </div>
                {/* Bolinha Verde Limão */}
                <div className="custom-footer-ball custom-footer-ball-lime">
                  <div className="custom-footer-ball-inner">
                    <Mail className="custom-footer-ball-icon custom-footer-ball-icon-lime" />
                  </div>
                </div>
                {/* Bolinha Amarela */}
                <div className="custom-footer-ball custom-footer-ball-yellow">
                  <div className="custom-footer-ball-inner">
                    <MapPin className="custom-footer-ball-icon custom-footer-ball-icon-yellow" />
                  </div>
                </div>
                {/* Bolinha Vermelha */}
                <div className="custom-footer-ball custom-footer-ball-red">
                  <div className="custom-footer-ball-inner">
                    <Search className="custom-footer-ball-icon custom-footer-ball-icon-red" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-footer-bottom">
            <div className="custom-footer-line"></div>
            <p className="custom-footer-copyright">&copy; 2024 SVD Transportes. Todos os direitos reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}