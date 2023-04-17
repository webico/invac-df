import { useState } from 'react';
import PropTypes from 'prop-types';
import { addComma } from '@/public/js/globalFunctions';

const DisponiveisLista = ({ props }) => {
  DisponiveisLista.propTypes = {
    props: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array]),
    disponibilidade: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array])
  };

  const vacinas = props.disponibilidade.vacinas,
    testes = props.disponibilidade.testes;

  const [data, setData] = useState(vacinas),
    [nome, setNome] = useState('vacinas'),
    [itemsShow, setItemsShow] = useState(4);

  function handleChange(e) {
    //dá pra melhorar isso aqui, tá feio demais
    if (e.target.value == 'testes') {
      setData(testes);
      setNome('testes');
    } else {
      setData(vacinas);
      setNome('vacinas');
    }
  }

  function handleShowMore() {
    setItemsShow(data.length);
  }

  return (
    <section className='disponivel'>
      <div className="container">
        <div className="disponivel__filtro">
          <p>Disponibilidade de:</p>

          <select name="" id="" onClick={handleChange}>
            <option value="vacinas">Vacinas</option>
            <option value="testes">Testes</option>
          </select>
        </div>

        <ul className='disponivel__lista'>
          {data && data.slice(0, itemsShow).map(regiao =>
            <li key={regiao.id} className='disponivel__card'>
              <div className='card__info'>
                <span className='regiao'>Região</span>
                <h2 className='regiao__nome'>{regiao.nome_regiao}</h2>
                <p className='regiao__disponiveis'>{addComma(regiao.quantidade)} {nome} disponíveis</p>
              </div>

              <button className='card__btn'></button>
            </li>
          )}
        </ul>

        {itemsShow == 4 ? <button className='ver-todas' onClick={handleShowMore}>Ver todas as regiões</button> : ''}
      </div>
    </section>
  );
};

export default DisponiveisLista;