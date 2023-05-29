/* eslint-disable react/prop-types */

import { addComma, Soma, Percentual } from '@/public/js/globalFunctions';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Quantitativo = ({ data, styles }) => {
  const dados = data.dados_vacinais_df;

  let totalDoses = Soma(dados.dose_1) + Soma(dados.dose_2) + Soma(dados.reforco_1) + Soma(dados.reforco_2);

  //GRÁFICO DE DOSES TOTAIS ====================================================
  let totalDF = dados.populacao_total;

  let configData = {
    labels: ['Vacinados', 'Não Vacinados'],
    datasets: [
      {
        backgroundColor: ['#001535', '#E0E0E0'],
        data: [Soma(dados.dose_1), totalDF - Soma(dados.dose_1)],
        label: '1ª dose',
      },
      {
        backgroundColor: ['#093893', '#E0E0E0'],
        data: [Soma(dados.dose_2), totalDF - Soma(dados.dose_2)],
        label: '2ª dose',
      },
      {
        backgroundColor: ['#2561D3', '#E0E0E0'],
        data: [Soma(dados.reforco_1), totalDF - Soma(dados.reforco_1)],
        label: '1° reforço',
      },
      {
        backgroundColor: ['#528BF4', '#E0E0E0'],
        data: [Soma(dados.reforco_2), totalDF - Soma(dados.reforco_1)],
        label: '2° reforço',
      }
    ],
  };

  let config = {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
  };

  //GRÁFICO DE DOSES SEPARADAS ====================================================
  let dosesBarLista = [dados.dose_1, dados.dose_2, dados.reforco_1, dados.reforco_2];

  const optionsBar = {
    plugins: {
      legend: {
        display: false
      }
    },
    devicePixelRatio: 4,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
    }
  };

  let BartCharts = [];
  for (let i = 0; i < dosesBarLista.length; i++) {
    let colors = ['#528BF4', '#2561D3', '#093893', '#001535'];
    const dataBar = {
      // labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      datasets: [
        {
          label: 'Vacinados',
          data: [...dosesBarLista[i]],
          backgroundColor: colors[i],
          borderColor: colors[i],
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    };
    BartCharts.push(<Bar data={dataBar} options={optionsBar} />);
  }

  return (
    <>
      <section className={styles.quantitativo}>
        <div className="container">
          <h2 className={`section__h2 ${styles.section__h2}`}>Quantitativo de doses e reforços total do Distrito Federal</h2>

          <section className={styles.quantitativo_graphs}>
            <article className={styles.total_doses}>
              <Doughnut data={configData} options={config} />

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

                  {BartCharts[0]}
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>2ª Dose</span>
                    <p>{Percentual(Soma(dados.dose_2), totalDoses) + '%'}</p>
                  </div>

                  {BartCharts[1]}
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>1ª Reforço</span>
                    <p>{Percentual(Soma(dados.reforco_1), totalDoses) + '%'}</p>
                  </div>

                  {BartCharts[2]}
                </li>

                <li className={styles.perc__item}>
                  <div className={styles.perc__info}>
                    <span>2ª Reforço</span>
                    <p>{
                      100 - Percentual(Soma(dados.dose_1), totalDoses)
                      - Percentual(Soma(dados.dose_2), totalDoses)
                      - Percentual(Soma(dados.reforco_1), totalDoses)
                      + '%'
                    }</p>
                  </div>

                  {BartCharts[3]}
                </li>
              </ul>

            </article>
          </section>
        </div>
      </section>
    </>
  );
};

export default Quantitativo;