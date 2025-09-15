import React from "react";
import { BookOpen, Video, Award, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/Card";
import { Button } from "../components/Button";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/AreaPrestadorServicos.css";

export default function AreaPrestadorServicos() {
  const courses = [
    { 
      title: "Segurança no Transporte", 
      duration: "4h", 
      modules: 8, 
      icon: <UserCheck/>, 
      category: "Segurança" 
    },
    { 
      title: "Gestão Financeira para Autônomos", 
      duration: "6h", 
      modules: 10, 
      icon: <Award/>, 
      category: "Finanças" 
    },
    { 
      title: "Tecnologia Embarcada", 
      duration: "3h", 
      modules: 6, 
      icon: <Video/>, 
      category: "Tecnologia" 
    }
  ];

  return (
    <div className="prestador-root">
      <section className="prestador-hero">
        <BookOpen className="prestador-hero-icon"/>
        <h1 className="prestador-hero-title">Portal de Treinamento</h1>
        <p className="prestador-hero-desc">
          Capacitação contínua para nossos prestadores de serviço.
        </p>
      </section>
      
      <section className="prestador-cursos-section">
        <div className="prestador-container">
          <h2 className="prestador-cursos-title">Cursos Disponíveis</h2>
          <div className="prestador-cursos-grid">
            <Card className="prestador-card">
              <CardHeader>
                <div className="prestador-card-header">
                  <span className="prestador-card-title-manual">Segurança no Transporte</span>
                  <div className="prestador-card-icon"><UserCheck /></div>
                </div>
                <p className="prestador-card-category">Segurança</p>
              </CardHeader>
              <CardContent>
                <div className="prestador-card-info">
                  <span>8 Módulos</span>
                  <span>4h</span>
                </div>
                <Button className="prestador-card-btn prestador-card-btn-equal">Iniciar Curso</Button>
              </CardContent>
            </Card>
            <Card className="prestador-card">
              <CardHeader>
                <div className="prestador-card-header">
                  <span className="prestador-card-title-manual">Gestão Financeira para Autônomos</span>
                  <div className="prestador-card-icon"><Award /></div>
                </div>
                <p className="prestador-card-category">Finanças</p>
              </CardHeader>
              <CardContent>
                <div className="prestador-card-info">
                  <span>10 Módulos</span>
                  <span>6h</span>
                </div>
                <Button className="prestador-card-btn prestador-card-btn-equal">Iniciar Curso</Button>
              </CardContent>
            </Card>
            <Card className="prestador-card">
              <CardHeader>
                <div className="prestador-card-header">
                  <span className="prestador-card-title-manual">Tecnologia Embarcada</span>
                  <div className="prestador-card-icon"><Video /></div>
                </div>
                <p className="prestador-card-category">Tecnologia</p>
              </CardHeader>
              <CardContent>
                <div className="prestador-card-info">
                  <span>6 Módulos</span>
                  <span>3h</span>
                </div>
                <Button className="prestador-card-btn prestador-card-btn-equal">Iniciar Curso</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}