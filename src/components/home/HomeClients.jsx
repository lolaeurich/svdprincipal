import logoSVD from "../../assets/logo-azul.png"; // Usando a logo SVD como placeholder
import agco from "../../assets/logos-clientes/agco.png";
import busccar from "../../assets/logos-clientes/busscar.png";  
import cnh from "../../assets/logos-clientes/cnh.png";
import wolk from "../../assets/logos-clientes/wolk.png";
import mahindra from "../../assets/logos-clientes/mahindra.png";
import daf from "../../assets/logos-clientes/daf.png";
import caio from "../../assets/logos-clientes/caio.png";
import mercedez from "../../assets/logos-clientes/mercedez.png";
import irizar from "../../assets/logos-clientes/irizar.png";
import volvo from "../../assets/logos-clientes/volvo.png";
import paccar from "../../assets/logos-clientes/paccar.png";
import comil from "../../assets/logos-clientes/comil.png";
import scania from "../../assets/logos-clientes/scania.png";

export default function HomeClients() {
  return (
    <section className="home-clients">
      <div className="home-clients__container container">
        <h2 className="home-clients__title">Nossos Clientes</h2>
        
        <div className="home-clients__logos">
          {/* Primeira Linha (5 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={agco} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={busccar} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={cnh} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={wolk} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={mahindra} alt="Logo Parceiro" className="client-logo-item__img" /></div>
          </div>
          
          {/* Segunda Linha (4 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={daf} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={caio} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={mercedez} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={irizar} alt="Logo Parceiro" className="client-logo-item__img" /></div>
          </div>
          
          {/* Terceira Linha (4 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={volvo} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={paccar} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={comil} alt="Logo Parceiro" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={scania} alt="Logo Parceiro" className="client-logo-item__img" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}