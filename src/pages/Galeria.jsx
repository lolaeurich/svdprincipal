import React, { useState } from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Galeria.css";

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleries = [
    {
      title: "Nossa Frota",
      images: [
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
        "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
      ]
    },
    {
      title: "Instalações",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
      ]
    },
    {
      title: "Equipe",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800"
      ]
    }
  ];

  const allImages = galleries.flatMap(gallery => gallery.images);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="text-center text-white">
            <h1 className="hero-title">Galeria</h1>
            <p className="hero-subtitle">
              Conheça nossa infraestrutura, frota moderna e equipe dedicada
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="gallery-section">
        <div className="container">
          {galleries.map((gallery, galleryIndex) => (
            <div key={galleryIndex} className="gallery-group">
              <h2 className="gallery-title">
                {gallery.title}
              </h2>
              <div className="gallery-grid">
                {gallery.images.map((image, imageIndex) => {
                  const globalIndex = galleries
                    .slice(0, galleryIndex)
                    .reduce((acc, g) => acc + g.images.length, 0) + imageIndex;
                  
                  return (
                    <Card 
                      key={imageIndex} 
                      className="image-card"
                      onClick={() => openLightbox(image, globalIndex)}
                    >
                      <CardContent className="image-card-content">
                        <div className="image-wrapper">
                          <img 
                            src={image} 
                            alt={`${gallery.title} ${imageIndex + 1}`}
                            className="gallery-image"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay">
          <div className="lightbox-content">
            <img 
              src={selectedImage} 
              alt="Imagem ampliada"
              className="lightbox-image"
            />
            
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="lightbox-close-button"
              size="icon"
            >
              <X className="lightbox-icon" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              className="lightbox-nav-button prev-button"
              size="icon"
            >
              <ChevronLeft className="lightbox-icon" />
            </Button>

            <Button
              onClick={nextImage}
              className="lightbox-nav-button next-button"
              size="icon"
            >
              <ChevronRight className="lightbox-icon" />
            </Button>

            {/* Image Counter */}
            <div className="lightbox-counter">
              {currentIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <h2 className="cta-title">Conheça Nossa Estrutura</h2>
            <p className="cta-subtitle">
              Agende uma visita e veja de perto nossa infraestrutura completa e tecnologia de ponta.
            </p>
            <Button className="cta-button">
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}