import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/TimelineCarousel.css";

export default function TimelineCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2001",
      title: "Fundação da SVD",
      description: "Início das atividades com um único caminhão e o sonho de revolucionar o transporte no Brasil.",
      highlight: true
    },
    {
      year: "2005", 
      title: "Expansão Regional",
      description: "Ampliação da frota e início das operações interestaduais, conectando São Paulo ao interior."
    },
    {
      year: "2010",
      title: "Tecnologia GPS",
      description: "Implementação do primeiro sistema de rastreamento GPS, revolucionando o controle da frota."
    },
    {
      year: "2015",
      title: "Certificação ISO",
      description: "Conquista da certificação ISO 9001, consolidando nosso compromisso com a qualidade."
    },
    {
      year: "2018",
      title: "Sustentabilidade",
      description: "Lançamento do programa de sustentabilidade com investimento em veículos eco-eficientes."
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description: "Digitalização completa dos processos e lançamento da plataforma online para clientes."
    },
    {
      year: "2024",
      title: "Liderança Nacional",
      description: "Consolidação como referência nacional em transporte sustentável e inovação logística."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  // Sempre mostra 3 cards, com o ativo à esquerda
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % timelineData.length;
      items.push({ ...timelineData[index], originalIndex: index });
    }
    return items;
  };

  return (
    <div className="timeline-carousel-root">
      <div className="timeline-carousel-header">
        <h2 className="timeline-carousel-title">
          Nossa História
        </h2>
        <div className="timeline-carousel-nav">
          <button
            onClick={prevSlide}
            className="timeline-carousel-btn"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="timeline-carousel-btn"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="timeline-carousel-grid">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item.year}-${index}`}
            className={`timeline-carousel-card${index === 0 ? " timeline-carousel-card--active" : ""}`}
          >
            {index === 0 && (
              <div className="timeline-carousel-card-neon"></div>
            )}
            <div className={`timeline-carousel-year${index === 0 ? " timeline-carousel-year--active" : ""}`}>
              {item.year}
            </div>
            <h3 className={`timeline-carousel-card-title${index === 0 ? " timeline-carousel-card-title--active" : ""}`}>
              {item.title}
            </h3>
            <p className={`timeline-carousel-card-desc${index === 0 ? " timeline-carousel-card-desc--active" : ""}`}>
              {item.description}
            </p>
            {index === 0 && (
              <>
                <div className="timeline-carousel-dot"></div>
                <div className="timeline-carousel-bar"></div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="timeline-carousel-progress">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`timeline-carousel-progress-dot${index === activeIndex ? " timeline-carousel-progress-dot--active" : ""}`}
            aria-label={`Ir para ${timelineData[index].year}`}
          />
        ))}
      </div>
    </div>
  );
}