import agco from "../../assets/logos-clientes/agco.png";
import busscar from "../../assets/logos-clientes/busscar.png";
import cnh from "../../assets/logos-clientes/cnh.png";
import mahindra from "../../assets/logos-clientes/mahindra.png";
import daf from "../../assets/logos-clientes/daf.png";
import caio from "../../assets/logos-clientes/caio.png";
import mercedes from "../../assets/logos-clientes/mercedez.png";
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
          {/* Primeira Linha (4 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={agco} alt="Logo AGCO" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={busscar} alt="Logo Busscar" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={cnh} alt="Logo CNH" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={mahindra} alt="Logo Mahindra" className="client-logo-item__img" /></div>
          </div>
          
          {/* Segunda Linha (4 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={daf} alt="Logo DAF" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={caio} alt="Logo Caio" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={mercedes} alt="Logo Mercedes-Benz" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={irizar} alt="Logo Irizar" className="client-logo-item__img" /></div>
          </div>
          
          {/* Terceira Linha (5 logos no desktop) */}
          <div className="home-clients__logo-row">
            <div className="client-logo-item"><img src={volvo} alt="Logo Volvo" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={paccar} alt="Logo Paccar Financial" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={comil} alt="Logo Comil" className="client-logo-item__img" /></div>
            <div className="client-logo-item"><img src={scania} alt="Logo Scania" className="client-logo-item__img" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}