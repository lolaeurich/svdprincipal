import heroImage from "../../assets/hero.jpg";
import blogImg1 from "../../assets/blog/blog1.jpg";
import blogImg2 from "../../assets/blog/blog2.webp";
import blogImg3 from "../../assets/blog/blog3.jpg";
import blogImg4 from "../../assets/blog/blog4.webp";
import blogImg5 from "../../assets/blog/blog5.webp";

export default function HomeBlog() {
  const posts = [
    {
      id: 1,
      title: "SVD Transportes amplia presença no transporte de ônibus 0-km",
      date: "12 de jun, 2025",
      summary: "Paranaense SVD Transportes movimenta chassis e ônibus completos e tem 40% de participação de mercado no segmento.",
      isLarge: true,
      image: blogImg1,
    },
    {
      id: 2,
      title: "SVD expande mix de serviços e passa a transportar implementos rodoviários no Brasil",
      date: "14 de nov, 2024",
      summary: "Empresa já ingressa no novo segmento com as implementadoras Librelato e Randon como clientes",
      isLarge: false,
      image: blogImg2,
    },
    {
      id: 3,
      title: "SVD Transportes projeta crescimento significativo de sua receita em 2024",
      date: "14 de out, 2024",
      summary: "Após a estagnação em 2023, a empresa está apostando na recuperação do mercado de caminhões e na prospecção de novos negócios para alcançar as metas deste ano",
      isLarge: false,
      image: blogImg3,
    },
    {
      id: 4,
      title: "Grupo SVD alcança 43% de participação no transporte de caminhões novos",
      date: "22 de fev, 2024",
      summary: "O Grupo SVD, empresa transporte e logística com matriz no Paraná, registrou em 2023 um total de 38 mil caminhões pesados e semipesados, além de máquinas e equipamentos agrícolas, transportados no Brasil, desempenho que garantiu participação de 43,3% no mercado doméstico de transporte de veículos novos.",
      isLarge: false,
      image: blogImg4,
    },
    {
      id: 5,
      title: "SVD Transportes inaugura centro de armazenamento de veículos no ABC Paulista",
      date: "10 de mai, 2023",
      summary: "Área com 25 mil metros quadrados tem capacidade de pátio para armazenar até 500 veículos.",
      isLarge: false,
      image: blogImg5,
    },
  ];

  return (
    <section className="home-blog">
      <div className="home-blog__container container">
        <h2 className="home-blog__title">Informativo SVD</h2>
        <div className="home-blog__grid">
          {posts.map(post => (
            <a key={post.id} href="#" className={`blog-card ${post.isLarge ? 'blog-card--large' : ''}`}>
              <div className="blog-card__image-wrap">
                <img src={post.image} alt="Notícia" className="blog-card__image" />
              </div>
              <div className="blog-card__content">
                <h4 className="blog-card__title">{post.title}</h4>
                <p className="blog-card__summary">{post.summary}</p>
                <div className="blog-card__info">
                  <span className="blog-card__date">{post.date}</span>
                  <div className="blog-card__icon-wrap">
                    <svg className="blog-card__icon" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M181.66,133.66l-48,48a8,8,0,0,1-11.32-11.32L164.69,128,122.34,85.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,181.66,133.66Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="home-blog__subtitle">Confira novidades, notícias e artigos sobre transporte e o Grupo SVD.</p>
        <div className="home-blog__divider"></div>
        <a href="#" className="home-blog__button">Leia mais</a>
      </div>
    </section>
  );
}