import { useState } from 'react';
import { addComma } from '@/public/js/globalFunctions';
import PropTypes from 'prop-types';

const DisponiveisLista = ({ props }, {styles}) => {
  const defaultProps = PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array]);

  DisponiveisLista.propTypes = {
    props: defaultProps,
    vacinas: defaultProps,
    testes: defaultProps
  };

  const [data, setData] = useState(props.vacinas),
    [nome, setNome] = useState('vacinas'),
    [itemsShow, setItemsShow] = useState(4);

  function handleChange(e) {
    //dá pra melhorar isso aqui, tá feio demais
    if (e.target.value == 'testes') {
      setData(props.testes);
      setNome('testes');
    } else {
      setData(props.vacinas);
      setNome('vacinas');
    }
  }

  function handleShowMore() {
    setItemsShow(data.length);
  }

  return (
    <section className='disponivel'>
      <div className="container">
        <div className={styles.disponivel_filtro}>
          <p className={styles.disponivel_filtro__p}>Disponibilidade de:</p>

          <select className={styles.disponivel_filtro__select} name="" id="" onClick={handleChange}>
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