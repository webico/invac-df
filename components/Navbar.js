import Link from 'next/link';
import { useState } from 'react';
import UserHelpLinks from './UserHelpLinks';

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
              <li><Link href='#' className="menu__item btn-secundario">Página Inicial</Link></li>
              <li><Link href='#' className="menu__item btn-secundario">Agendamento</Link></li>
              <li><Link href='#' className="menu__item btn-secundario">Consulta</Link></li>
              <li><Link href='#' className="menu__item btn-secundario">Dados Vacinais</Link></li>
              <li><Link href='#' className="menu__item btn-secundario">Dúvidas Frequentes</Link></li>
            </ul>
          </nav>

          <div className='menu-instalacao'>
            <button>Instalar Aplicativo</button>
          </div>

          <UserHelpLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

