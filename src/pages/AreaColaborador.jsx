import React, { useState } from "react";
import { User, Lock, LogIn, Award, Heart, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import logoBranca from "../assets/logo-branca.png";
import "../styles/AreaColaborador.css";

export default function AreaColaborador() {
  const [remember, setRemember] = useState(false);

  const benefits = [
    { icon: <Award className="w-6 h-6 text-amber-500"/>, title: "Plano de Carreira" },
    { icon: <Heart className="w-6 h-6 text-red-500"/>, title: "Saúde e Bem-estar" },
    { icon: <Briefcase className="w-6 h-6 text-blue-500"/>, title: "Benefícios Exclusivos" }
  ];

  return (
    <div className="colab-root">
      <div className="colab-container">
        <div className="colab-grid">
          {/* Lado Esquerdo - Informações */}
          <div className="colab-info">
            <div className="colab-logo mb-8">
              <img src={logoBranca} alt="Logo Grupo SVD" className="w-35 h-auto" />
            </div>
            <h1 className="colab-title">Portal do Colaborador</h1>
            <p className="colab-desc">
              Acesso exclusivo para o time que move o Brasil. <br/>Tudo o que você precisa em um só lugar.
            </p>
            <div className="colab-benefits">
              {benefits.map((item, index) => (
                <div key={index} className="colab-benefit">
                  <div className="colab-benefit-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="colab-benefit-title">{item.title}</h3>
                    <p className="colab-benefit-desc">Acesse seus benefícios e informações.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Formulário de Login */}
          <Card className="colab-card">
            <CardHeader className="text-center">
              <CardTitle className="colab-card-title">Acesse sua conta</CardTitle>
              <p className="colab-card-sub">Bem-vindo(a) de volta!</p>
            </CardHeader>
            <CardContent>
              <form className="colab-form">
                <div>
                  <label className="colab-label">
                    <User className="colab-label-icon" />
                    <Input type="text" placeholder="Usuário" className="colab-input" />
                  </label>
                </div>
                <div>
                  <label className="colab-label">
                    <Lock className="colab-label-icon" />
                    <Input type="password" placeholder="Senha" className="colab-input" />
                  </label>
                </div>
                <div className="colab-form-row">
                  <label className="colab-checkbox-label">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                      className="colab-checkbox"
                    />
                    <span className="colab-custom-checkbox" aria-hidden="true"></span>
                    <span className="colab-remember-label">Lembrar de mim</span>
                  </label>
                </div>
                <Button type="submit" className="colab-btn">
                  <LogIn className="mr-2 w-5 h-5" /> Entrar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}