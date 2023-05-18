import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`header ${menu ? '--open' : ''}`}>
      <div className="header__container">

        <div className="header-logo">
          <Link href='/'><img src='/logo.svg' /></Link>
          <button className='header__button' onClick={() => setMenu(!menu)}><div></div><span>menu</span></button>
        </div>

        <div className="menu">
          <nav>
            <ul>
              <li><Link href='#' className="menu__item btn_secundario">Página Inicial</Link></li>
              <li><Link href='#' className="menu__item btn_secundario">Agendamento</Link></li>
              <li><Link href='#' className="menu__item btn_secundario">Consulta</Link></li>
              <li><Link href='#' className="menu__item btn_secundario">Dados Vacinais</Link></li>
              <li><Link href='#' className="menu__item btn_secundario">Dúvidas Frequentes</Link></li>
            </ul>
          </nav>

          <div className='menu-instalacao'>
            <button>Instalar Aplicativo</button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

