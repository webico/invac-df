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
              <li key={regiao.nome} className={`${styles.disponivel_item} ${ativo == cleanString(regiao.nome) ? styles.ativo : ''}`} onClick={() => toggleClass(cleanString(regiao.nome))}>
                <button className={styles.disponivel_btn}>
                  <h3>{regiao.nome}</h3>
                  <div>
                    <span className={styles.numero}>N° de {tab == 'vacina' ? 'vacinas' : 'testes'}</span>
                    <p>
                      {
                        tab == 'vacina' ? addComma(regiao.quantidade_vacinas) : addComma(regiao.quantidade_testes)
                      }
                    </p>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.416748 0.958984C0.625081 0.750651 0.871749 0.646484 1.15675 0.646484C1.44175 0.646484 1.68814 0.750651 1.89591 0.958984L8.00008 7.06315L14.1251 0.938151C14.3195 0.743707 14.5626 0.646484 14.8542 0.646484C15.1459 0.646484 15.3959 0.750651 15.6042 0.958984C15.8126 1.16732 15.9167 1.41398 15.9167 1.69898C15.9167 1.98398 15.8126 2.23037 15.6042 2.43815L8.58341 9.43815C8.50008 9.52149 8.4098 9.58065 8.31258 9.61565C8.21536 9.65065 8.11119 9.66787 8.00008 9.66732C7.88897 9.66732 7.7848 9.64982 7.68758 9.61482C7.59036 9.57982 7.50008 9.52093 7.41675 9.43815L0.395915 2.41732C0.20147 2.22287 0.104248 1.98315 0.104248 1.69815C0.104248 1.41315 0.208415 1.16676 0.416748 0.958984Z" fill="#2561D3" />
                    </svg>
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