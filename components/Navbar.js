import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`header ${menu ? '--open' : ''}`}>
      <div className="header__container">

        <div className="header-logo">
          <Link href='#'><img src='/logo.svg' /></Link>
          <button className='header__button' onClick={() => setMenu(!menu)}>menu</button>
        </div>

        <div className="menu">
          <nav>
            <ul>
              <li><Link href='#' className="menu-list__item">Página Inicial</Link></li>
              <li><Link href='#' className="menu-list__item">Agendamento</Link></li>
              <li><Link href='#' className="menu-list__item">Consulta</Link></li>
              <li><Link href='#' className="menu-list__item">Dados Vacinais</Link></li>
              <li><Link href='#' className="menu-list__item">Dúvidas Frequentes</Link></li>
            </ul>
          </nav>

          <div className='menu__instalacao'>
            <button>Instalar Aplicativo</button>
          </div>

          <div>
            <ul className="menu__info__div">
              <li><Link href='#' className='menu-info__item'>Entre em contato</Link></li>
              <li><Link href='#' className='menu-info__item'>Acesso à Informação</Link></li>
              <li><Link href='#' className='menu-info__item'>Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="copyright">
            <p>SESDF Invac DF © 2023</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

