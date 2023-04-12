import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header-logo">
          <Link href='#'><img src='/logo.svg' /></Link>
          <button id='header__button'>menu</button>
        </div>

        <div id="menu">
          <nav className="menu__nav">
            <ul className="menu-list">
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

          <div className="menu__info">
            <ul className="menu-list">
              <li><Link href='#' className='menu-info__item'>Entre em contato</Link></li>
              <li><Link href='#' className='menu-info__item'>Acesso À informação</Link></li>
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

