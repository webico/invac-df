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
              <li><Link href='/' className="menu__item btn_secundario" onClick={() => setMenu(!menu)}>Página Inicial</Link></li>
              <li><Link href='/agendamento' className="menu__item btn_secundario" onClick={() => setMenu(!menu)}>Agendamento</Link></li>
              <li><a href="https://conectesus-paciente.saude.gov.br/login" target="_blank" rel="noopener noreferrer" className="menu__item btn_secundario">Consultar</a></li>
              <li><Link href='/dados-vacinais' className="menu__item btn_secundario" onClick={() => setMenu(!menu)}>Dados Vacinais</Link></li>
              <li><Link href='/faq' className="menu__item btn_secundario" onClick={() => setMenu(!menu)}>Dúvidas Frequentes</Link></li>
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

