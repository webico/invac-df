const UserHelpLinks = () => {
  return (
    <>
      <ul className="menu_info">
        <li><a href="http://www.ouvidoria.df.gov.br/" target="_blank" rel="noopener noreferrer" className='menu_info__item'>Ouvidoria</a></li>
        <li><a href="https://www.saude.df.gov.br/fale-com-a-secretaria" target="_blank" rel="noopener noreferrer" className='menu_info__item'>Entre em contato</a></li>
        <li><a href="https://www.df.gov.br/category/acesso-a-informacao/" target="_blank" rel="noopener noreferrer" className='menu_info__item'>Acesso à Informação</a></li>
        <li><a href="https://info.saude.df.gov.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className='menu_info__item'>Política de Privacidade</a></li>
      </ul>

      <p className="copyright">SESDF Invac DF © 2023</p>
    </>
  );
};

export default UserHelpLinks;