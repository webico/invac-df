import { addComma } from '@/public/js/globalFunctions';

/* eslint-disable react/prop-types */
const Quantitativo = ({ data, styles }) => {
  const dados = data.dados_vacinais_df;
  // console.log(dados.dose_1);

  const sum = array => {
    return array.reduce((partialSum, a) => partialSum + a, 0);
  };

  let totalDoses = sum(dados.dose_1) + sum(dados.dose_2) + sum(dados.reforco_1) + sum(dados.reforco_2);

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
          </section>
        </div>
      </section>
    </>
  );
};

export default Quantitativo;