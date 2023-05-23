import Link from 'next/link';

const UserHelpLinks = () => {
  return (
    <>
      <ul className="menu_info">
        <li><Link href='#' className='menu_info__item'>Ouvidoria</Link></li>
        <li><Link href='#' className='menu_info__item'>Entre em contato</Link></li>
        <li><Link href='#' className='menu_info__item'>Acesso à Informação</Link></li>
        <li><Link href='#' className='menu_info__item'>Política de Privacidade</Link></li>
      </ul>

      <p className="copyright">SESDF Invac DF © 2023</p>
    </>
  );
};

export default UserHelpLinks;