import React, { useState } from "react";
import { Search, Calendar, User, ChevronRight, Tag } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent } from "../components/Card";
import { Badge } from "../components/Badge";
import homeSecond from "../assets/home-second.jpeg";
import "../styles/Blog.css";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("todos");

  const tags = ["Todos", "Logística", "Tecnologia", "Sustentabilidade", "Mercado", "Dicas"];

  const posts = [
    {
      id: 1,
      title: "Como Otimizar Rotas de Entrega para Reduzir Custos",
      excerpt: "Descubra estratégias eficazes para planejar rotas mais eficientes e economizar combustível enquanto melhora o tempo de entrega.",
      content: "A otimização de rotas é fundamental para o sucesso de qualquer operação logística...",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      tags: ["Logística", "Dicas"],
      date: "18 de Dezembro, 2024",
      readTime: "7 min",
      author: "Carlos Mendes"
    },
    {
      id: 2,
      title: "Sustentabilidade no Transporte: Práticas Inovadoras",
      excerpt: "Conheça as principais práticas sustentáveis que estão revolucionando o setor de transporte e logística no Brasil.",
      content: "A sustentabilidade tornou-se um fator crucial no setor de transportes...",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      tags: ["Sustentabilidade", "Logística"],
      date: "15 de Dezembro, 2024",
      readTime: "9 min",
      author: "Ana Silva"
    },
    {
      id: 3,
      title: "Tecnologia GPS: Revolucionando o Controle de Frotas",
      excerpt: "Como a tecnologia GPS está transformando a gestão de frotas e melhorando a eficiência operacional.",
      content: "O sistema GPS revolucionou completamente a gestão de frotas...",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800",
      tags: ["Tecnologia", "Logística"],
      date: "12 de Dezembro, 2024",
      readTime: "6 min",
      author: "João Santos"
    },
    {
      id: 4,
      title: "Tendências do Mercado de Transporte para 2025",
      excerpt: "Análise das principais tendências que moldarão o mercado de transporte e logística no próximo ano.",
      content: "O mercado de transporte está passando por transformações significativas...",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
      tags: ["Mercado", "Logística"],
      date: "08 de Dezembro, 2024",
      readTime: "11 min",
      author: "Maria Costa"
    },
    {
      id: 5,
      title: "Segurança na Estrada: Protocolos Essenciais para Motoristas",
      excerpt: "Um guia completo sobre os protocolos de segurança que todo motorista profissional deve conhecer.",
      content: "A segurança nas estradas é uma prioridade absoluta no transporte de cargas...",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      tags: ["Dicas", "Logística"],
      date: "05 de Dezembro, 2024",
      readTime: "8 min",
      author: "Pedro Lima"
    },
    {
      id: 6,
      title: "E-commerce e Logística: Desafios e Oportunidades",
      excerpt: "Como o crescimento do e-commerce está criando novos desafios e oportunidades para o setor logístico.",
      content: "O boom do e-commerce trouxe mudanças significativas para a logística...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      tags: ["Mercado", "Tecnologia"],
      date: "02 de Dezembro, 2024",
      readTime: "10 min",
      author: "Lucas Oliveira"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "todos" || 
                       post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="text-center text-white">
              <h1 className="hero-title">Blog SVD</h1>
              <p className="hero-subtitle">
                Insights, dicas e novidades do mundo do transporte e logística
              </p>
            </div>
          </div>
        </section>

        {/* Search and Tags */}
        <section className="search-tags-section">
          <div className="container">
            <div className="search-tags-wrapper">
              <div className="search-input-container">
                <Search className="search-icon" />
                <Input
                  type="text"
                  placeholder="Pesquisar no blog..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input blog-search-input"
                />
              </div>
              
              <div className="tags-container">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag.toLowerCase() ? "default" : "outline"}
                    onClick={() => setSelectedTag(tag.toLowerCase())}
                    className="tag-button"
                  >
                    <Tag className="tag-icon" />
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title-blog">Post em Destaque</h2>
            <Card className="featured-card">
              <div className="featured-card-grid">
                <div className="featured-image-wrapper">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="featured-image"
                  />
                </div>
                <CardContent className="featured-content">
                  <div className="featured-tags-container">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="featured-badge">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="featured-title">
                    {featuredPost.title}
                  </h3>
                  <p className="featured-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  <div className="featured-meta">
                    <User className="meta-icon" />
                    <span>{featuredPost.author}</span>
                    <span className="meta-divider">•</span>
                    <Calendar className="meta-icon" />
                    <span>{featuredPost.date}</span>
                    <span className="meta-divider">•</span>
                    <span>{featuredPost.readTime} de leitura</span>
                  </div>
                  <Button className="featured-button">
                    Ler Post Completo
                    <ChevronRight className="button-icon" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="posts-grid-section">
          <div className="container">
            <h2 className="section-title">Últimos Posts</h2>
            <div className="posts-grid-container">
              {regularPosts.map((post) => (
                <Card key={post.id} className="post-card">
                  <div className="post-image-wrapper">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="post-image"
                    />
                  </div>
                  <CardContent className="post-content">
                    <div className="post-tags-container">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="post-badge">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="post-title">
                      {post.title}
                    </h3>
                    <p className="post-excerpt">
                      {post.excerpt}
                    </p>
                    <div className="post-meta">
                      <User className="post-meta-icon" />
                      <span className="post-meta-text">{post.author}</span>
                      <Calendar className="post-meta-icon" />
                      <span>{post.date}</span>
                    </div>
                    <div className="post-footer">
                      <span className="post-read-time">{post.readTime} de leitura</span>
                      <Button variant="ghost" className="post-read-more-button post-read-more-button--white">
                        Ler mais
                        <ChevronRight className="button-icon" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {regularPosts.length === 0 && (
              <div className="no-posts-found">
                <p className="no-posts-text">Nenhum post encontrado com os filtros aplicados.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-wrapper">
              <h2 className="newsletter-title">Não perca nenhum post!</h2>
              <p className="newsletter-subtitle">
                Assine nossa newsletter e receba os melhores conteúdos sobre transporte e logística direto no seu email.
              </p>
              <div className="newsletter-form">
                <Input 
                  type="email" 
                  placeholder="Seu melhor email"
                  className="newsletter-input blog-search-input"
                />
                <Button className="newsletter-button">
                  Assinar Blog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}