import React, { useState } from 'react';

const MAPS = {
  Curitiba: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.654877395066!2d-49.26123982440331!3d-25.41785537759868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce446d4990263%3A0xc6657c79e6027376!2sGrupo%20SVD!5e0!3m2!1spt-BR!2sbr!4v1716390054326!5m2!1spt-BR!2sbr",
  "Ponta Grossa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.019532574969!2d-50.01820782440193!3d-25.09988997780316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e811b0e3d6e2e1%3A0x2e1e7e8b7b7c7e7e!2sRod.%20do%20Caf%C3%A9%20-%20Colonia%20Dona%20Luiza%2C%20Ponta%20Grossa%20-%20PR%2C%2084046-050!5e0!3m2!1spt-BR!2sbr!4v1716391000000!5m2!1spt-BR!2sbr",
  "São Bernardo": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.351234567890!2d-46.585123456789!3d-23.735123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce423456789abc%3A0x123456789abcdef!2sEstr.%20da%20Cama%20Patente%2C%202300%20-%20Parque%20Esmeralda%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009842-100!5e0!3m2!1spt-BR!2sbr!4v1716392000000!5m2!1spt-BR!2sbr",
  "São Borja": "https://maps.google.com/maps?q=BR+285+KM678+Centro+Unificado+de+Fronteira+-+S%C3%A3o+Borja,+RS&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "Acessórios e Seminovos": "https://maps.google.com/maps?q=Rua+Engenheiro+J%C3%BAlio+C%C3%A9sar+de+Souza+Ara%C3%BAjo,+181+-+CIC+-+Curitiba,+PR&t=&z=13&ie=UTF8&iwloc=&output=embed"
};

const LOCATIONS = [
  { name: "Curitiba", address: "Rua Edmundo Eckstein 888, Curitiba, PR, 81290-080" },
  { name: "São Bernardo", address: "Estrada da Cama Patente, 2300 - Sitio Santa - Bairro Alvarenga, SP" },
  { name: "Ponta Grossa", address: "Av. Senador Flávio Carvalho Guimarães, KM 168 - Ponta Grossa, PR" },
  { name: "São Borja", address: "BR 285 KM678 Centro Unificado de Fronteira - São Borja, RS" },
  { name: "Acessórios e Seminovos", address: "Rua Engenheiro Júlio César de Souza Araújo, 181 - CIC - Curitiba, PR" }
];

export default function HomeLocation() {
  const [selected, setSelected] = useState("Curitiba");

  return (
    <section className="home-location">
      <div className="home-location__info">
        <h2 className="home-location__title">Localização</h2>
        <ul className="home-location__list">
          {LOCATIONS.map(loc => (
            <li
              key={loc.name}
              className={`home-location__item${selected === loc.name ? " is-active" : ""}`}
              onClick={() => setSelected(loc.name)}
              style={{ cursor: "pointer" }}
            >
              <svg className="home-location__icon" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.1,83.4,134.5a8,8,0,0,0,9.2,0c3.4-2.4,83.4-59.2,83.4-134.5A88.1,88.1,0,0,0,128,16Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,128Z"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span>{loc.name}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.8, textAlign: 'left', lineHeight: '1.2' }}>{loc.address}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-location__map-wrap">
        <iframe 
          className="home-location__map"
          src={MAPS[selected]} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={`SVD Map Location - ${selected}`}>
        </iframe>
      </div>
    </section>
  );
}