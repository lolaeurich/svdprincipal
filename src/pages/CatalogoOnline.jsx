import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import homeSecond from "../assets/home-second.jpeg";
import "../styles/CatalogoOnline.css";

export default function CatalogoOnline() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("todos");

  const categories = [
    { label: "Todos", value: "todos" },
    { label: "Seminovos", value: "seminovos" },
    { label: "Implementos", value: "implementos" },
    { label: "Acessórios", value: "acessórios" }
  ];
  const products = [
    { id: 1, name: "Scania R450 6x2", category: "Seminovos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 680.000,00", features: ["Ano 2022", "Automático", "Baixa km"] },
    { id: 2, name: "Semirreboque Graneleiro", category: "Implementos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 180.000,00", features: ["3 Eixos", "13,5m", "Lona Nova"] },
    { id: 3, name: "Sistema de Rastreamento GPS", category: "Acessórios", image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=400", price: "R$ 1.299,00", features: ["Cobertura nacional", "App incluso", "Instalação grátis"] },
    { id: 4, name: "Volvo FH 540 6x4", category: "Seminovos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 820.000,00", features: ["Ano 2021", "540cv", "Revisado"] },
    { id: 5, name: "Scania R450 6x2", category: "Seminovos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 680.000,00", features: ["Ano 2022", "Automático", "Baixa km"] },
    { id: 6, name: "Semirreboque Graneleiro", category: "Implementos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 180.000,00", features: ["3 Eixos", "13,5m", "Lona Nova"] },
    { id: 7, name: "Sistema de Rastreamento GPS", category: "Acessórios", image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=400", price: "R$ 1.299,00", features: ["Cobertura nacional", "App incluso", "Instalação grátis"] },
    { id: 8, name: "Volvo FH 540 6x4", category: "Seminovos", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400", price: "R$ 820.000,00", features: ["Ano 2021", "540cv", "Revisado"] },
];

  const filteredProducts = products.filter(p =>
    (p.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === "todos" || p.category.toLowerCase() === category)
  );

  // Cores por categoria
  const cardColor = (cat) => {
    switch (cat.toLowerCase()) {
      case "acessórios":
        return "catalogo-card-green";
      case "seminovos":
        return "catalogo-card-yellow";
      case "implementos":
        return "catalogo-card-blue";
      default:
        return "catalogo-card-gray";
    }
  };

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="catalogo-root">
        {/* Hero Section */}
        <section
          className="catalogo-hero"
          style={{
            background: `linear-gradient(rgba(34,52,110,0.82), rgba(34,52,110,0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="catalogo-hero-content">
            <h1 className="catalogo-hero-title">
              <span className="catalogo-hero-title-gradient">Catálogo Online</span>
            </h1>
            <p className="catalogo-hero-subtitle">
              Encontre tudo que sua frota precisa em um só lugar.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="catalogo-searchbar">
          <div className="catalogo-container catalogo-searchbar-flex">
            <Input
              placeholder="Buscar produto..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="catalogo-searchbar-input"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="catalogo-searchbar-select">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => (
                  <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Products Grid */}
        <section className="catalogo-grid-section">
          <div className="catalogo-container catalogo-grid">
            {filteredProducts.map(p => (
              <Card
                key={p.id}
                className={`catalogo-card ${cardColor(p.category)}`}
              >
                <img src={p.image} alt={p.name} className="catalogo-card-img" />
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                  <div className={`catalogo-card-category ${cardColor(p.category)}`}>{p.category}</div>
                </CardHeader>
                <CardContent>
                  {p.features && (
                    <ul className="catalogo-card-features">
                      {p.features.map((f, i) => (
                        <li key={i} className={`catalogo-card-feature ${cardColor(p.category)}`}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <p className="catalogo-card-price">{p.price}</p>
                  <Button className={`catalogo-card-btn ${cardColor(p.category)}`}>Ver Detalhes</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}