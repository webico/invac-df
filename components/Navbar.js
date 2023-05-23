import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserHelpLinks from './UserHelpLinks';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);

  const router = useRouter();

  return (
    <header className={`header ${menu ? '__open' : ''}`}>
      <div className="header__container">

        <div className="header_logo">
          <Link href='/'><img src='/logo.svg' /></Link>
          <button className='header__button' onClick={() => setMenu(!menu)}><div></div><span>menu</span></button>
        </div>

        <div className="menu">
          <div className='divisoria'>
            <div className='divisoria_menu' aria-hidden="true"></div>
            <span>Menu</span>
          </div>
          <nav>
            <ul>
              <li><Link href='/' onClick={() => setMenu(!menu)}
                className={`btn__menu ${router.pathname == '/' ? 'btn__menu_ativo' : ''}`}
              >
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.50016 14.8334H14.5002V6.6313L9.50016 2.08584L4.50016 6.6313V14.8334ZM15.3335 16.5001H3.66683C3.2066 16.5001 2.8335 16.127 2.8335 15.6667V8.16674H0.333496L8.93958 0.34301C9.25741 0.0540595 9.74291 0.0540595 10.0607 0.34301L18.6668 8.16674H16.1668V15.6667C16.1668 16.127 15.7937 16.5001 15.3335 16.5001ZM5.75016 9.83341H7.41683C7.41683 10.984 8.34958 11.9167 9.50016 11.9167C10.6507 11.9167 11.5835 10.984 11.5835 9.83341H13.2502C13.2502 11.9045 11.5712 13.5834 9.50016 13.5834C7.4291 13.5834 5.75016 11.9045 5.75016 9.83341Z" fill="#96A6C7" />
                </svg>
                <span>Página Inicial</span>
              </Link>
              </li>

              <li><Link href='/agendamento' onClick={() => setMenu(!menu)}
                className={`btn__menu ${router.pathname == '/agendamento' ? 'btn__menu_ativo' : ''}`}
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99984 0.833328V2.49999H10.9998V0.833328H12.6665V2.49999H15.9998C16.4601 2.49999 16.8332 2.87309 16.8332 3.33333V16.6667C16.8332 17.1269 16.4601 17.5 15.9998 17.5H0.999837C0.539604 17.5 0.166504 17.1269 0.166504 16.6667V3.33333C0.166504 2.87309 0.539604 2.49999 0.999837 2.49999H4.33317V0.833328H5.99984ZM15.1665 9.16666H1.83317V15.8333H15.1665V9.16666ZM5.1665 10.8333V12.5H3.49984V10.8333H5.1665ZM9.33317 10.8333V12.5H7.6665V10.8333H9.33317ZM13.4998 10.8333V12.5H11.8332V10.8333H13.4998ZM4.33317 4.16666H1.83317V7.49999H15.1665V4.16666H12.6665V5.83333H10.9998V4.16666H5.99984V5.83333H4.33317V4.16666Z" fill="#96A6C7" />
                </svg>

                <span>Agendamento</span>
              </Link>
              </li>

              <li><Link href='/dados-vacinais' onClick={() => setMenu(!menu)}
                className={`btn__menu ${router.pathname == '/dados-vacinais' ? 'btn__menu_ativo' : ''}`}
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5651 5.64927L15.3866 6.82778L13.6188 5.06001L11.851 6.82778L14.7973 9.77409L13.6188 10.9526L13.0296 10.3633L7.72624 15.6666H3.01219L1.24443 17.4344L0.065918 16.2558L1.83368 14.4881V9.77409L7.13699 4.47076L6.54773 3.8815L7.72624 2.70299L10.6725 5.64927L12.4402 3.8815L10.6725 2.11373L11.851 0.935226L16.5651 5.64927ZM11.851 9.18484L8.31549 5.64927L7.13699 6.82778L8.90474 8.59559L7.72624 9.77409L5.95847 8.00625L4.77996 9.18484L6.54773 10.9526L5.36922 12.1311L3.60145 10.3633L3.50035 10.4644V13.9999H7.03591L11.851 9.18484Z" fill="#96A6C7" />
                </svg>
                <span>Dados Vacinais</span>
              </Link>
              </li>

              <li><Link href='/mapa-de-casos' onClick={() => setMenu(!menu)}
                className={`btn__menu ${router.pathname == '/mapa-de-casos' ? 'btn__menu_ativo' : ''}`}
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.166504 3.16667L5.99984 0.666666L10.9998 3.16667L16.2523 0.915583C16.4639 0.824933 16.7088 0.922908 16.7995 1.13442C16.8217 1.18629 16.8332 1.24213 16.8332 1.29856V14.8333L10.9998 17.3333L5.99984 14.8333L0.747304 17.0844C0.535787 17.1751 0.290846 17.0771 0.200196 16.8656C0.177962 16.8137 0.166504 16.7578 0.166504 16.7014V3.16667ZM11.8332 15.1629L15.1665 13.7343V3.19423L11.8332 4.6228V15.1629ZM10.1665 15.0533V4.61339L6.83317 2.94672V13.3866L10.1665 15.0533ZM5.1665 13.3772V2.83709L1.83317 4.26566V14.8057L5.1665 13.3772Z" fill="#96A6C7" />
                </svg>
                <span>Mapa de Casos</span>
              </Link>
              </li>

              <li><Link href='/faq' onClick={() => setMenu(!menu)}
                className={`btn__menu ${router.pathname == '/faq' ? 'btn__menu_ativo' : ''}`}
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.49984 17.3333C3.89746 17.3333 0.166504 13.6023 0.166504 9C0.166504 4.39763 3.89746 0.666668 8.49984 0.666668C13.1022 0.666668 16.8332 4.39763 16.8332 9C16.8332 13.6023 13.1022 17.3333 8.49984 17.3333ZM8.49984 15.6667C12.1818 15.6667 15.1665 12.6819 15.1665 9C15.1665 5.3181 12.1818 2.33333 8.49984 2.33333C4.81794 2.33333 1.83317 5.3181 1.83317 9C1.83317 12.6819 4.81794 15.6667 8.49984 15.6667ZM7.6665 11.5H9.33317V13.1667H7.6665V11.5ZM9.33317 10.1293V10.6667H7.6665V9.41667C7.6665 8.95642 8.03959 8.58333 8.49984 8.58333C9.19017 8.58333 9.74984 8.02367 9.74984 7.33333C9.74984 6.64298 9.19017 6.08333 8.49984 6.08333C7.89342 6.08333 7.38784 6.51519 7.27384 7.08814L5.63926 6.76122C5.90515 5.42433 7.08484 4.41667 8.49984 4.41667C10.1107 4.41667 11.4165 5.7225 11.4165 7.33333C11.4165 8.65458 10.5379 9.77067 9.33317 10.1293Z" fill="#96A6C7" />
                </svg>
                <span>Dúvidas Frequentes</span>
              </Link>
              </li>
            </ul>
          </nav>

          <div className='menu_instalacao'>
            <button className='btn_principal'>Instalar Aplicativo</button>
          </div>

          <div className='divisoria'>
            <span className='divisoria_ajuda'>Ajuda</span>
          </div>

          <UserHelpLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

