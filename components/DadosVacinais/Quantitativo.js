/* eslint-disable react/prop-types */

import { addComma, Soma, Percentual } from '@/public/js/globalFunctions';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Quantitativo = ({ data, styles }) => {
  const dados = data.dados_vacinais_df;

  let totalDoses = Soma(dados.dose_1) + Soma(dados.dose_2) + Soma(dados.reforco_1) + Soma(dados.reforco_2);

  //GRÁFICO DE DOSES TOTAIS ====================================================
  const options = {
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    }
  };

  let dosesEmOrdemNumerica = [Soma(dados.dose_1), Soma(dados.dose_2), Soma(dados.reforco_1), Soma(dados.reforco_2)].sort(function (a, b) {
    return b - a;
  });

  const dataPie = {
    datasets: [
      {
        label: '# Vacinas',
        data: [...dosesEmOrdemNumerica],
        backgroundColor: [
          '#001535',
          '#093893',
          '#2561D3',
          '#528BF4',
        ],
        borderColor: [
          '#001535',
          '#093893',
          '#2561D3',
          '#528BF4',
        ],
        borderWidth: 1,
      },
    ],
  };

  //GRÁFICO DE DOSES SEPARADAS ====================================================
  let dosesBarLista = [dados.dose_1, dados.dose_2, dados.reforco_1, dados.reforco_2];

  const optionsBar = {
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false
    },
    responsive: false,
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
      x: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    }

  };

  let BartCharts = [];
  for (let i = 0; i < dosesBarLista.length; i++) {
    const dataBar = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'First set',
          data: [...dosesBarLista[i]],
          backgroundColor: [
            '#001535',
            '#093893',
            '#2561D3',
            '#528BF4',
          ],
          borderColor: [
            '#001535',
            '#093893',
            '#2561D3',
            '#528BF4',
          ],
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
          <h2>Quantitativo de doses e reforços total do Distrito Federal</h2>

          <section className={styles.quantitativo_graphs}>
            <article className={styles.total_doses}>
              <Doughnut data={dataPie} options={options} />

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