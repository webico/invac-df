/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addComma, cleanString } from '@/public/js/globalFunctions';
import Link from 'next/link';

const DisponiveisLista = ({ data, styles }) => {
  const [tab, setTab] = useState('vacina');
  const [itemsShow, setItemsShow] = useState(4);

  function handleShowMore() {
    setItemsShow(data.length);
  }

  return (
    <section className={styles.disponivel}>
      <div className="container">
        <h2 className='section__h2 mobile'>Veja os lugares com vacinas e testes disponíveis na sua região.</h2>

        <h2 className='section__h2 desktop'>Veja os lugares com vacinas e testes disponíveis na sua região e faça seu agendamento.</h2>

        <section>
          <ul className='tab_menu'>
            <li><button className={`tab_menu__btn ${tab == 'vacina' ? 'ativo' : ''}`} onClick={() => setTab('vacina')}>Vacinas</button></li>
            <li><button className={`tab_menu__btn ${tab == 'teste' ? 'ativo' : ''}`} onClick={() => setTab('teste')}>Testes</button></li>
          </ul>

          <div className={styles.disponivel_caixa}>
            <ul className={styles.disponivel__lista}>
              {
                data.slice(0, itemsShow).map(regiao => (
                  <li key={regiao.nome} className={styles.disponivel__card}>
                    <Link
                      href={{pathname: '/disponibilidade', query: {r: cleanString(regiao.nome), t: tab}}}
                    >
                      <div>
                        <span className={styles.regiao_span}>Região</span>
                        <p className={styles.regiao_nome}>{regiao.nome}</p>
                        <span className={styles.regiao_disp}>
                          {
                            tab == 'vacina' ? `${addComma(regiao.quantidade_vacinas)} vacinas` : `${addComma(regiao.quantidade_testes)} testes`
                          }
                        </span>
                      </div>

                      <button></button>
                    </Link>
                  </li>
                ))
              }
            </ul>

              <Link
              href={{pathname: '/disponibilidade'}} className={styles.ver_todas}>Ver todas as regiões</Link>
          </div>


        </section>
      </div>
    </section>
  );
};

export default DisponiveisLista;