import React, { useState } from "react";
import { Search, Calendar, User, ChevronRight, Filter } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent, CardHeader } from "../components/Card";
import { Badge } from "../components/Badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import "../styles/InformativoSBB.css";

export default function InformativoSBB() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    "Todos",
    "Logística",
    "Tecnologia", 
    "Sustentabilidade",
    "Segurança",
    "Mercado",
    "Regulamentação"
  ];

  const articles = [
    {
      id: 1,
      title: "Revolução Digital na Logística: Como a Tecnologia está Transformando o Setor",
      excerpt: "Descubra as principais inovações tecnológicas que estão revolucionando a forma como transportamos cargas pelo Brasil.",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800",
      category: "Tecnologia",
      date: "15 de Dezembro, 2024",
      readTime: "8 min",
      author: "Carlos Silva"
    },
    {
      id: 2,
      title: "Sustentabilidade no Transporte: O Futuro Verde da Logística Brasileira",
      excerpt: "Conheça as iniciativas sustentáveis que estão moldando o futuro do transporte de cargas no Brasil.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      category: "Sustentabilidade",
      date: "10 de Dezembro, 2024",
      readTime: "6 min",
      author: "Maria Santos"
    },
    {
      id: 3,
      title: "Segurança nas Estradas: Protocolos e Melhores Práticas para Transportadoras",
      excerpt: "Um guia completo sobre os protocolos de segurança essenciais para o transporte rodoviário de cargas.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      category: "Segurança",
      date: "05 de Dezembro, 2024",
      readTime: "10 min",
      author: "João Oliveira"
    },
    {
      id: 4,
      title: "Análise do Mercado de Frete: Tendências e Perspectivas para 2025",
      excerpt: "Uma análise detalhada das tendências do mercado de frete e as perspectivas para o próximo ano.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      category: "Mercado",
      date: "30 de Novembro, 2024",
      readTime: "12 min",
      author: "Ana Costa"
    },
    {
      id: 5,
      title: "Mudanças na Regulamentação de Transporte: O que Você Precisa Saber",
      excerpt: "Fique por dentro das principais mudanças regulamentares que afetam o setor de transporte de cargas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      category: "Regulamentação",
      date: "25 de Novembro, 2024",
      readTime: "7 min",
      author: "Pedro Ferreira"
    },
    {
      id: 6,
      title: "Otimização de Rotas: Como Reduzir Custos e Aumentar a Eficiência",
      excerpt: "Estratégias avançadas de otimização de rotas para maximizar a eficiência operacional.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
      category: "Logística",
      date: "20 de Novembro, 2024",
      readTime: "9 min",
      author: "Lucas Mendes"
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  const filteredArticles = regularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || 
                            article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="text-center text-white">
            <h1 className="hero-title">Informativo SBB</h1>
            <p className="hero-subtitle">
              Fique por dentro das últimas novidades, tendências e insights do mercado de transporte e logística
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filter-section">
        <div className="container">
          <div className="search-filter-wrapper">
            <div className="search-filter-flex">
              <div className="search-input-container">
                <Search className="search-icon" />
                <Input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-select-container">
                <Filter className="filter-icon" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="filter-select-trigger">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Artigo em Destaque</h2>
          <Card className="featured-card">
            <div className="featured-card-grid">
              <div className="featured-image-wrapper">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="featured-image"
                />
              </div>
              <CardContent className="featured-content">
                <Badge className="featured-badge">
                  {featuredArticle.category}
                </Badge>
                <h3 className="featured-title">
                  {featuredArticle.title}
                </h3>
                <p className="featured-excerpt">
                  {featuredArticle.excerpt}
                </p>
                <div className="featured-meta">
                  <User className="meta-icon" />
                  <span>{featuredArticle.author}</span>
                  <span className="meta-divider">•</span>
                  <Calendar className="meta-icon" />
                  <span>{featuredArticle.date}</span>
                  <span className="meta-divider">•</span>
                  <span>{featuredArticle.readTime} de leitura</span>
                </div>
                <Button className="featured-button">
                  Ler Artigo Completo
                  <ChevronRight className="button-icon" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid-section">
        <div className="container">
          <h2 className="section-title">Últimos Artigos</h2>
          <div className="articles-grid-container">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="article-card">
                <div className="article-image-wrapper">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="article-image"
                  />
                </div>
                <CardContent className="article-content">
                  <Badge className="article-badge">
                    {article.category}
                  </Badge>
                  <h3 className="article-title">
                    {article.title}
                  </h3>
                  <p className="article-excerpt">
                    {article.excerpt}
                  </p>
                  <div className="article-meta">
                    <User className="article-meta-icon" />
                    <span className="article-meta-text">{article.author}</span>
                    <Calendar className="article-meta-icon" />
                    <span>{article.date}</span>
                  </div>
                  <div className="article-footer">
                    <span className="article-read-time">{article.readTime} de leitura</span>
                    <Button variant="ghost" className="article-read-more-button">
                      Ler mais
                      <ChevronRight className="button-icon" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="no-articles-found">
              <p className="no-articles-text">Nenhum artigo encontrado com os filtros aplicados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            <h2 className="newsletter-title">Receba nosso informativo</h2>
            <p className="newsletter-subtitle">
              Cadastre-se e receba semanalmente as principais novidades do setor de transporte e logística.
            </p>
            <div className="newsletter-form">
              <Input 
                type="email" 
                placeholder="Seu melhor email"
                className="newsletter-input"
              />
              <Button className="newsletter-button">
                Assinar Newsletter
              </Button>
            </div>
            <p className="newsletter-spam-info">
              *Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}