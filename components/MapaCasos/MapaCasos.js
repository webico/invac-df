/* eslint-disable react/prop-types */
import { Percentual, addComma } from '@/public/js/globalFunctions';
import { useState } from 'react';

const MapaCasos = ({ data, styles }) => {
  const [regiao, setRegiao] = useState(data[0]);
  const [filtro, setFiltro] = useState(true);

  function handleRegiao(e) {
    let regiaoObj = data.find(item => item.nome == e);

    setRegiao(regiaoObj);
  }

  function handleFiltro(e) {
    e == 'Casos' ? setFiltro(true) : setFiltro(false);
  }

  let incidencia = (filtro) => {
    return (100000 * filtro / regiao.populacao_total).toFixed(2);
  };

  let estado = Percentual(regiao.casos_mensais, regiao.populacao_total) < 40;

  return (
    <>
      <div className={`menu_filtro ${styles.menu_filtro}`}>
        <div className='filtro_actions'>
          <div className='filtro_select'>
            <select name="" id="" defaultValue='Casos'
              onChange={(e) => handleFiltro(e.currentTarget.value)}
            >
              <option value='Casos'>Casos</option>
              <option value='Óbitos'>Óbitos</option>

            </select>
          </div>

          <div className='filtro_select'>
            <select name="" id="" defaultValue='Águas Claras'
              onChange={(e) => handleRegiao(e.currentTarget.value)}
            >
              {
                data.map(regiao => (
                  <option key={regiao.nome} value={regiao.nome}>{regiao.nome}</option>
                ))
              }
            </select>
          </div>
        </div>

        <ul className="filtro_info">
          <li>
            <p>{addComma(regiao.populacao_total)}</p>
            <span>População total</span>
          </li>

          <li>
            <p>{filtro ? addComma(regiao.casos_mensais) : addComma(regiao.obitos_mensais)}</p>
            <span>Nº de {filtro ? 'casos' : 'óbitos'} (mensais)</span>
          </li>

          <li>
            <p>{filtro ? incidencia(regiao.casos_mensais) : incidencia(regiao.obitos_mensais)}</p>
            <span>Incidência (100 mil hab.)</span>
          </li>

          
          <li>
            <p className={`${styles.filtro_estado} ${estado ? styles.controlado : styles.alerta}`}>{estado ? 'controlado' : 'alerta'}</p>
            <span>Estado atual</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MapaCasos;