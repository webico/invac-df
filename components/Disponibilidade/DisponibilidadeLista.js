/* eslint-disable react/prop-types */
import { addComma, cleanString } from '@/public/js/globalFunctions';
import { useEffect, useState } from 'react';

const Disponibilidade = ({ data, styles, query }) => {
  const [tab, setTab] = useState(null);
  const [ativo, setAtivo] = useState(null);

  useEffect(() => {
    setTab(query.t ? query.t : 'vacina');
    // setAtivo(query.r ? query.r : cleanString(data[0].nome));
    setAtivo(query.r ? query.r : cleanString(data[0].nome));
  }, []);

  const toggleClass = (item) => {
    item !== ativo ? setAtivo(item) : setAtivo('');
  };

  return (
    <>
      <ul className='tab_menu'>
        <li><button className={`tab_menu__btn ${tab == 'vacina' ? 'ativo' : ''}`} onClick={() => setTab('vacina')}>Vacina</button></li>
        <li><button className={`tab_menu__btn ${tab == 'teste' ? 'ativo' : ''}`} onClick={() => setTab('teste')}>Teste</button></li>
      </ul>

      <div className={styles.disponivel_caixa}>
        <ul className={styles.disponivel__lista}>

          {
            data.map(regiao => (
              <li key={regiao.nome} className={`${styles.disponivel_item} ${ativo == cleanString(regiao.nome) ? styles.ativo : ''}`}  onClick={() => toggleClass(cleanString(regiao.nome))}>
                <button className={styles.disponivel_btn}>
                  <h3>{regiao.nome}</h3>
                  <div>
                    <span className={styles.numero}>N° de {tab == 'vacina' ? 'vacinas' : 'testes'}</span>
                    <p>
                      {
                        tab == 'vacina' ? addComma(regiao.quantidade_vacinas) : addComma(regiao.quantidade_testes)
                      }
                    </p>
                  </div>
                </button>

                <div className={styles.disponivel_info}>
                  <ul className={styles.ubs_lista}>
                    {
                      regiao.unidades.map(unidade => (
                        <li key={unidade.nome} className={styles.ubs_item}>
                          <div className={styles.ubs}>
                            <h4>{unidade.nome}</h4>

                            <div className={styles.ubs_info}>
                              <span className={styles.ubs_horario}>Horários:</span>
                              <p>{unidade.horario}</p>
                            </div>

                            <div className={styles.ubs_info}>
                              <span className={styles.ubs_endereco}>Endereço:</span>
                              <p>{unidade.endereco}</p>
                            </div>
                          </div>

                          <ul className={styles.doses}>
                            {
                              tab == 'vacina' ?

                                unidade.vacinas[0].tipos.slice(0, unidade.vacinas[0].tipos.length - 1).map(vacina => (
                                  <li key={vacina}>
                                    <p>{vacina}</p>
                                  </li>
                                ))

                                :

                                unidade.testes[0].tipos.map(teste => (
                                  <li key={teste}>
                                    <p>{teste}</p>
                                  </li>
                                ))
                            }
                          </ul>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>

  );
};

export default Disponibilidade;