/* eslint-disable react/prop-types */
import { addComma } from '@/public/js/globalFunctions';
import { useState } from 'react';

const CasosLista = ({data, styles}) => {
  const [casos, setCasos] = useState(data.casos[1][0]);

  function handleCasos(e) {
    setCasos(data.casos[1][e.target.value]);
  }

  return (
    <>
      <div className={styles.casos__div}>
        <div className={styles.casos__filtro}>
          <select name="" id=""
            onChange={handleCasos}
          >
            {
              data && data.casos[1].map(regiao => (
                <option key={regiao.id} value={regiao.id}>Região {regiao.nome_regiao}</option>
              ))
            }
          </select>
        </div>

        {
          data &&
          <ul>
            <li className={styles.dado__card}>
              <p>Casos Ativos</p>
              <span>{addComma(casos.casos_ativos)}</span>
            </li>

            <li className={styles.dado__card}>
              <p>Casos confirmados</p>
              <span>{addComma(casos.casos_confirmados)}</span>
            </li>

            <li className={styles.dado__card}>
              <p>Óbitos Confirmados</p>
              <span>{addComma(casos.obitos_confirmados)}</span>
            </li>
          </ul>
        }

        <p className={styles.atualizado_em}>Atualizado em: {data.casos[0].atualizado_em}</p>
      </div>

    </>
  );
};

export default CasosLista;