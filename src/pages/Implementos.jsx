import React, { useState } from "react";
import { Truck, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import { Input } from "../components/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import { Badge } from "../components/Badge";
import homeSecond from "../assets/home-second.jpeg";
import "../styles/Implementos.css";

export default function Implementos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("todos");

  const types = ["Todos", "Graneleiro", "Sider", "Baú", "Tanque", "Porta-Container"];

  const implementosData = [
    {
      id: 1,
      name: "Semirreboque Graneleiro",
      type: "graneleiro",
      price: "R$ 180.000,00",
      description: "Ideal para transporte de grãos e cargas a granel. Tampas com abertura otimizada.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      badge: "Alta Capacidade",
      specs: ["3 Eixos", "13,5 metros", "Assoalho de aço", "Lona de cobertura"]
    },
    {
      id: 2,
      name: "Semirreboque Sider",
      type: "sider",
      price: "R$ 210.000,00",
      description: "Versatilidade para carga e descarga lateral, perfeito para cargas paletizadas.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      badge: "Mais Versátil",
      specs: ["3 Eixos", "14,6 metros", "Lona vinílica reforçada", "Sistema de amarração"]
    },
    {
      id: 3,
      name: "Semirreboque Baú Carga Geral",
      type: "baú",
      price: "R$ 195.000,00",
      description: "Segurança e proteção para transporte de cargas secas em geral.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      specs: ["3 Eixos", "15 metros", "Paredes de alumínio", "Portas com vedação dupla"]
    },
    {
      id: 4,
      name: "Semirreboque Tanque Inox",
      type: "tanque",
      price: "R$ 350.000,00",
      description: "Transporte seguro de líquidos alimentícios, químicos e combustíveis.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      badge: "Especializado",
      specs: ["3 Eixos", "30.000 Litros", "Aço Inox 316", "Sistema de descarga pressurizada"]
    },
     {
      id: 4,
      name: "Semirreboque Tanque Inox",
      type: "tanque",
      price: "R$ 350.000,00",
      description: "Transporte seguro de líquidos alimentícios, químicos e combustíveis.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      badge: "Especializado",
      specs: ["3 Eixos", "30.000 Litros", "Aço Inox 316", "Sistema de descarga pressurizada"]
    },
     {
      id: 4,
      name: "Semirreboque Tanque Inox",
      type: "tanque",
      price: "R$ 350.000,00",
      description: "Transporte seguro de líquidos alimentícios, químicos e combustíveis.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z-J5ki91bqosM_ibBKOTXHGfoBSd6WPwcQ&s",
      badge: "Especializado",
      specs: ["3 Eixos", "30.000 Litros", "Aço Inox 316", "Sistema de descarga pressurizada"]
    }
  ];

  const filteredImplements = implementosData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "todos" || item.type === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="implementos-root">
        {/* Hero Section */}
        <section
          className="implementos-hero"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="implementos-hero-content">
            <h1 className="implementos-hero-title">
              <span className="implementos-hero-title-gradient">Implementos Rodoviários</span>
            </h1>
            <p className="implementos-hero-subtitle">
              Soluções robustas e eficientes para todo tipo de carga e operação.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="implementos-searchbar">
          <div className="implementos-container">
            <div className="implementos-searchbar-flex">
              <div className="implementos-searchbar-input-wrap">
                <Search className="implementos-searchbar-icon" />
                <Input
                  type="text"
                  placeholder="Buscar por implemento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="implementos-searchbar-input"
                />
              </div>
              <div className="implementos-searchbar-select-wrap">
                <Filter className="implementos-searchbar-filter-icon" />
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="implementos-searchbar-select">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Implements Grid */}
        <section className="implementos-grid-section">
          <div className="implementos-container">
            <div className="implementos-grid">
              {filteredImplements.map((item) => (
                <Card key={item.id} className="implementos-card">
                  <div className="implementos-card-img-wrap">
                    {item.badge && (
                      <Badge className="implementos-card-badge">
                        {item.badge}
                      </Badge>
                    )}
                    <div className="implementos-card-img-aspect">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="implementos-card-img"
                      />
                    </div>
                  </div>
                  <CardHeader className="implementos-card-header">
                    <CardTitle className="implementos-card-title">
                      {item.name}
                    </CardTitle>
                    <p className="implementos-card-desc">
                      {item.description}
                    </p>
                  </CardHeader>
                  <CardContent className="implementos-card-content">
                    <div className="implementos-card-specs">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="implementos-card-spec">
                          <div className="implementos-card-dot"></div>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="implementos-card-price-label">Valor sob consulta</div>
                      <div className="implementos-card-price">
                        {item.price}
                      </div>
                      <Button className="implementos-card-btn">
                        Consultar Condições
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}