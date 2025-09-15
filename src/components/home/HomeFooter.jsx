import React from "react";
import logoBranca from "../../assets/logo-branca.png";
import transportesLogo from "../../assets/logos/transportes-logo.png";
import acessoriosLogo from "../../assets/logos/acessorios-logo.png";
import seminovosLogo from "../../assets/logos/seminovos-logo.png";
import implementosLogo from "../../assets/logos/implementos-logo.png";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function HomeFooter() {
  return (
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
                <img
                  src={logoBranca}
                  alt="SVD Transportes"
                  className="custom-footer-logo-img"
                  style={{ width: "180px", height: "auto" }}
                />
              </div>
              {/* <span className="custom-footer-title">SVD TRANSPORTES</span> */}
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
              <li>
                <a href="/home" className="custom-footer-link">Home</a>
              </li>
              <li>
                <a href="/sobre" className="custom-footer-link">Sobre Nós</a>
              </li>
              <li>
                <a href="/servicos" className="custom-footer-link">Serviços</a>
              </li>
              <li>
                <a href="/sustentabilidade" className="custom-footer-link">Sustentabilidade</a>
              </li>
              <li>
                <a href="/blog" className="custom-footer-link">Blog</a>
              </li>
              <li>
                <a href="/contato" className="custom-footer-link">Contato</a>
              </li>
            </ul>
          </div>

          {/* Nossos Produtos */}
          <div>
            <h3 className="custom-footer-heading">Nossos Produtos</h3>
            <ul className="custom-footer-list">
              <li>
                <a href="/transporte" className="custom-footer-link">Transporte e Armazenagem</a>
              </li>
              <li>
                <a href="/logistica" className="custom-footer-link">Logística</a>
              </li>
              <li>
                <a href="/implementos" className="custom-footer-link">Implementos</a>
              </li>
              <li>
                <a href="/funilaria" className="custom-footer-link">Funilaria e Pintura</a>
              </li>
              <li>
                <a href="/catalogo" className="custom-footer-link">Catálogo Online</a>
              </li>
            </ul>
          </div>

          {/* Portais e Políticas + Newsletter */}
          <div>
            <h3 className="custom-footer-heading">Portais & Políticas</h3>
            <ul className="custom-footer-list custom-footer-list-mb">
              <li>
                <a href="/areacolaborador" className="custom-footer-link">Área do Colaborador</a>
              </li>
              <li>
                <a href="/areamei" className="custom-footer-link">Área do MEI</a>
              </li>
              <li>
                <a href="/areaprestador" className="custom-footer-link">Área do Prestador</a>
              </li>
              <li>
                <a href="/trabalhe-conosco" className="custom-footer-link">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="/cadastrofornecedores" className="custom-footer-link">Cadastro de Fornecedores</a>
              </li>
              <li>
                <a href="/politica-privacidade" className="custom-footer-link">Política de Privacidade</a>
              </li>
              <li>
                <a href="/relatorio-transparencia" className="custom-footer-link">Relatório de Transparência</a>
              </li>
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

            {/* Bolinhas Coloridas com logos SVD */}
            <div className="custom-footer-balls">
              <div className="custom-footer-ball custom-footer-ball-orange">
                <div className="custom-footer-ball-inner">
                  <img src={transportesLogo} alt="Transportes" className="custom-footer-ball-icon" />
                </div>
              </div>
              <div className="custom-footer-ball custom-footer-ball-lime">
                <div className="custom-footer-ball-inner">
                  <img src={acessoriosLogo} alt="Acessórios" className="custom-footer-ball-icon" />
                </div>
              </div>
              <a
                href="https://svdseminovos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-footer-ball custom-footer-ball-yellow"
                style={{ display: "inline-block" }}
              >
                <div className="custom-footer-ball-inner">
                  <img src={seminovosLogo} alt="Seminovos" className="custom-footer-ball-icon" />
                </div>
              </a>
              <div className="custom-footer-ball custom-footer-ball-red">
                <div className="custom-footer-ball-inner">
                  <img src={implementosLogo} alt="Implementos" className="custom-footer-ball-icon" />
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
  );
}
