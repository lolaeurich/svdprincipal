// src/pages/Home.jsx
import TopBar from "../components/home/TopBar.jsx"; // Importe a TopBar
import HomeHeader from "../components/home/HomeHeader.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import HomeHistory from "../components/home/HomeHistory.jsx";
import HomeCertifications from "../components/home/HomeCertifications.jsx";
import HomeClients from "../components/home/HomeClients.jsx";
import HomeSocialResponsibility from "../components/home/HomeSocialResponsability.jsx";
import HomeBlog from "../components/home/HomeBlog.jsx";
import HomeLocation from "../components/home/HomeLocation.jsx";
import HomeFooter from "../components/home/HomeFooter.jsx";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      {/* TopBar e HomeHeader fora do <main> para que fiquem fixas */}
      <TopBar />
      <HomeHeader />

      <main className="home-main">
        {/* A imagem de fundo da hero será aplicada via CSS nesta seção */}
        <HomeHero />
        <HomeHistory />
        <HomeCertifications />
        <HomeClients />
        <HomeSocialResponsibility />

        <HomeBlog />
        <HomeLocation />
        <HomeFooter />
      </main>
    </>
  );
}