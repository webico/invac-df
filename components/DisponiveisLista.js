/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addComma } from '@/public/js/globalFunctions';

const DisponiveisLista = ({ props, styles }) => {
  let dataProps = props.disponibilidade;

  const [data, setData] = useState(dataProps.vacinas),
    [nome, setNome] = useState('vacinas'),
    [itemsShow, setItemsShow] = useState(4);

  function handleChange(e) {
    //dá pra melhorar isso aqui, tá feio demais
    if (e.target.value == 'testes') {
      setData(dataProps.testes);
      setNome('testes');
    } else {
      setData(dataProps.vacinas);
      setNome('vacinas');
    }
  }

  function handleShowMore() {
    setItemsShow(data.length);
  }

  return (
    <section className={styles.disponivel}>
      <div className="container">
        <div className={styles.disponivel_filtro}>
          <p className={styles.disponivel_filtro__p}>Disponibilidade de:</p>

          <div className={styles.disponivel_filtro__select}>
            <select name="" id="" onClick={handleChange}>
              <option value="vacinas">Vacinas</option>
              <option value="testes">Testes</option>
            </select>
          </div>
        </div>

        <ul className={styles.disponivel__lista}>
          {data && data.slice(0, itemsShow).map(regiao =>
            <li key={regiao.id} className={styles.disponivel__card}>
              <div className={styles.card__info}>
                <span className={styles.regiao}>Região</span>
                <h2 className={styles.regiao__nome}>{regiao.nome_regiao}</h2>
                <p className={styles.regiao__disponiveis}>{addComma(regiao.quantidade)} {nome} disponíveis</p>
              </div>

              <button className={styles.card__btn}></button>
            </li>
          )}
        </ul>

        {itemsShow == 4 ? <button className={styles.ver_todas} onClick={handleShowMore}>Ver todas as regiões</button> : ''}
      </div>
    </section>
  );
};

export default DisponiveisLista;