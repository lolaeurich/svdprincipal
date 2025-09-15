import React from "react";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/PoliticaPrivacidade.css";

export default function PoliticaPrivacidade() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "1. Informações que Coletamos",
      content: "Coletamos informações que você nos fornece diretamente, como nome, email, telefone e dados empresariais quando solicita orçamentos ou entra em contato conosco. Também coletamos informações automaticamente através do uso do nosso site, incluindo dados de navegação, localização e preferências."
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "2. Como Utilizamos suas Informações",
      content: "Utilizamos suas informações para fornecer nossos serviços, processar solicitações, enviar comunicações relevantes, melhorar nossa plataforma e personalizar sua experiência. Também podemos usar os dados para fins estatísticos e de análise de mercado."
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "3. Compartilhamento de Informações",
      content: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar dados apenas com prestadores de serviços confiáveis, quando exigido por lei ou para proteger nossos direitos legítimos."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-600" />,
      title: "4. Segurança dos Dados",
      content: "Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL, firewalls e sistemas de monitoramento contínuo."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "5. Seus Direitos",
      content: "Você tem direito de acessar, retificar, excluir ou limitar o processamento de seus dados pessoais. Também pode solicitar a portabilidade dos dados ou retirar seu consentimento a qualquer momento. Entre em contato conosco para exercer esses direitos."
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: "6. Contato",
      content: "Para questões relacionadas à privacidade ou para exercer seus direitos, entre em contato através do email privacidade@svdtransportes.com.br ou pelos telefones disponíveis em nossa página de contato."
    }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="privacy-root">
        {/* Hero Section */}
        <section className="privacy-hero">
          <div className="privacy-hero-bg"></div>
          <div className="privacy-hero-content">
            <h1 className="privacy-hero-title">Política de Privacidade</h1>
            <p className="privacy-hero-subtitle">
              Transparência total sobre como protegemos e utilizamos suas informações
            </p>
          </div>
        </section>

        {/* Introdução */}
        <section className="privacy-intro-section">
          <div className="privacy-container">
            <div className="privacy-intro-box">
              <h2 className="privacy-intro-title">Nosso Compromisso com sua Privacidade</h2>
              <p className="privacy-intro-text">
                A SVD Transportes está comprometida em proteger sua privacidade e dados pessoais. 
                Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações 
                quando você interage com nossos serviços e website.
              </p>
              <div className="privacy-update-box">
                <h3 className="privacy-update-title">Última atualização: 15 de dezembro de 2024</h3>
                <p className="privacy-update-text">
                  Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) 
                  e outras regulamentações aplicáveis de proteção de dados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seções da Política */}
        <section className="privacy-sections-section">
          <div className="privacy-container">
            <div className="privacy-sections-grid">
              {sections.map((section, index) => (
                <Card key={index} className="privacy-section-card">
                  <CardHeader>
                    <CardTitle className="privacy-section-title">
                      <span className="privacy-section-icon">{section.icon}</span>
                      <span>{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="privacy-section-content">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="privacy-cookies-section">
          <div className="privacy-container">
            <Card className="privacy-cookies-card">
              <CardHeader>
                <CardTitle className="privacy-cookies-title">
                  Política de Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="privacy-cookies-block">
                  <h3 className="privacy-cookies-subtitle">O que são Cookies?</h3>
                  <p className="privacy-cookies-text">
                    Cookies são pequenos arquivos de texto armazenados em seu dispositivo para melhorar sua experiência de navegação, 
                    lembrar suas preferências e analisar o tráfego do site. Utilizamos cookies essenciais, de desempenho e de marketing.
                  </p>
                </div>
                <div className="privacy-cookies-block">
                  <h3 className="privacy-cookies-subtitle">Como Gerenciar Cookies</h3>
                  <p className="privacy-cookies-text">
                    Você pode gerenciar suas preferências de cookies através das configurações do seu navegador, 
                    permitindo, bloqueando ou excluindo cookies conforme desejar. Para mais detalhes, consulte nossa Política de Cookies completa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}
