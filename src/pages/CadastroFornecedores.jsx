import React from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textearea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/CadastroFornecedores.css";

export default function CadastroFornecedores() {
  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="cadastroforn-root">
        {/* Hero Section */}
        <section className="cadastroforn-hero">
          <div className="cadastroforn-hero-bg"></div>
          <div className="cadastroforn-hero-content">
            <Briefcase className="cadastroforn-hero-icon" />
            <h1 className="cadastroforn-hero-title">
              <span className="cadastroforn-hero-title-gradient">
                Cadastro de Fornecedores
              </span>
            </h1>
            <p className="cadastroforn-hero-desc">
              Junte-se à nossa rede de parceiros e cresça conosco.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="cadastroforn-form-section">
          <div className="cadastroforn-container">
            <Card className="cadastroforn-card">
              <CardHeader>
                <CardTitle className="cadastroforn-form-title">Seja nosso parceiro</CardTitle>
                <p className="cadastroforn-form-desc">
                  Preencha o formulário para iniciar o processo de homologação.
                </p>
              </CardHeader>
              <CardContent>
                <form className="cadastroforn-form">
                  <div className="cadastroforn-form-block">
                    <h3 className="cadastroforn-form-block-title">Informações da Empresa</h3>
                  </div>
                  <div className="cadastroforn-form-grid">
                    <div>
                      <label className="cadastroforn-label">Razão Social *</label>
                      <Input placeholder="Nome completo da sua empresa" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">CNPJ *</label>
                      <Input placeholder="00.000.000/0000-00" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Nome Fantasia</label>
                      <Input placeholder="Nome fantasia" />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Telefone</label>
                      <Input placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="cadastroforn-label">E-mail *</label>
                      <Input placeholder="contato@empresa.com.br" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Área de Atuação *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transporte">Transporte</SelectItem>
                          <SelectItem value="logistica">Logística</SelectItem>
                          <SelectItem value="implementos">Implementos</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="cadastroforn-label">Mensagem</label>
                    <Textarea placeholder="Conte um pouco sobre sua empresa, diferenciais, etc." rows={4} />
                  </div>
                  <div className="cadastroforn-btn-wrap">
                    <Button className="cadastroforn-btn" type="submit">
                      Enviar Cadastro
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}