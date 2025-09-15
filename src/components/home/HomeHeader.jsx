import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoAzul from "../../assets/logo-azul.png"

export default function HomeHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Current search query:", event.target.value);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleServicosClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate("/servicos");
  };

  return (
    <header className="home-header">
      <div className="home-header__inner">
        {/* Logo */}
        <img src={logoAzul} alt="Logo SVD Transportes" className="home-header__logo" />

        {/* Navigation Menu */}
        <nav className={`home-header__nav${menuOpen ? ' home-header__nav--open' : ''}`}>
          {/* Botão X para fechar */}
          <button
            className="home-header__close"
            aria-label="Fechar menu"
            onClick={handleToggleMenu}
            style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', zIndex: 2100 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="#004aad" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 6L18 18" stroke="#004aad" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <ul className="home-header__list">
            <li><a href="/" className="home-header__link">INÍCIO</a></li>
            <li>
              <a
                href="/servicos"
                className="home-header__link"
                onClick={handleServicosClick}
              >
                SERVIÇOS
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                className="home-header__link"
                onClick={e => { e.preventDefault(); setMenuOpen(false); navigate("/sobre"); }}
              >
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className="home-header__link"
                onClick={e => { e.preventDefault(); setMenuOpen(false); navigate("/contato"); }}
              >
                CONTATO
              </a>
            </li>
            <li>
              <a
                href="/trabalhe-conosco"
                className="home-header__link"
                onClick={e => { e.preventDefault(); setMenuOpen(false); navigate("/trabalhe-conosco"); }}
              >
                TRABALHE <br />CONOSCO
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="home-header__link"
                onClick={e => { e.preventDefault(); setMenuOpen(false); navigate("/blog"); }}
              >
                BLOG
              </a>
            </li>
          </ul>
          {/* Input de busca DENTRO do dropdown */}
          <div className="home-header__dropdown-search">
            <span className="home-header__search-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#004aad" strokeWidth="2"/>
                <path d="M20 20L16.65 16.65" stroke="#004aad" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Pesquisar"
              className="home-header__search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </nav>
        
        {/* Search Field - only for desktop */}
        {window.innerWidth >= 1201 && (
          <div className="home-header__search-bar">
            <span className="home-header__search-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#004aad" strokeWidth="2"/>
                <path d="M20 20L16.65 16.65" stroke="#004aad" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Pesquisar"
              className="home-header__search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        )}
        
        {/* Hamburger menu button */}
        <button className="home-header__toggle" aria-label="Abrir menu" onClick={handleToggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
            <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}