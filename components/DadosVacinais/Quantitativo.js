import { addComma, Soma, Percentual } from '@/public/js/globalFunctions';

/* eslint-disable react/prop-types */
const Quantitativo = ({ data, styles }) => {
  const dados = data.dados_vacinais_df;


  let totalDoses = Soma(dados.dose_1) + Soma(dados.dose_2) + Soma(dados.reforco_1) + Soma(dados.reforco_2);

  // const dadosLength = Object.keys(dados).length;
  // let lista = [];
  // for (let i = 0; i < dadosLength; i++) {
  //   lista.push(
  //     <li className={styles.perc__item}>
  //       <div className={styles.perc__info}>
  //         <span>1ª Dose</span>
  //         <p>{Percentual(Soma(dados.dose_1), totalDoses) + '%'}</p>
  //       </div>

  //       <div className={styles.perc__graph}></div>
  //     </li>
  //   )
  // }

  return (
    <>
      <section className={styles.quantitativo}>
        <div className="container">
          <h2>Quantitativo de doses e reforços total do Distrito Federal</h2>

          <section className={styles.quantitativo_graphs}>
            <article className={styles.total_doses}>
              <div className={styles.total_grafico}></div>
              <p>Total de Doses Aplicadas</p>
              <h3 className={styles.total}>{addComma(totalDoses)}</h3>
            </article>

            <article>
              <ul className={styles.perc__lista}>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>1ª Dose</span>
                    <p>{Percentual(Soma(dados.dose_1), totalDoses) + '%'}</p>
                  </div>

                  <div className={styles.perc__graph}></div>
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>2ª Dose</span>
                    <p>{Percentual(Soma(dados.dose_2), totalDoses) + '%'}</p>
                  </div>

                  <div className={styles.perc__graph}></div>
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>1ª Reforço</span>
                    <p>{Percentual(Soma(dados.reforco_1), totalDoses) + '%'}</p>
                  </div>

                  <div className={styles.perc__graph}></div>
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>2ª Reforço</span>
                    <p>{Percentual(Soma(dados.reforco_2), totalDoses) + '%'}</p>
                  </div>

                  <div className={styles.perc__graph}></div>
                </li>
              </ul>
            </article>
          </section>

          <section className={styles.estoque}>
            <div className="container">
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Quantitativo;