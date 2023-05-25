/* eslint-disable react/prop-types */
import { addComma } from '@/public/js/globalFunctions';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState } from 'react';
Chart.register(...registerables);

const FaixaEtaria = ({ data, styles }) => {
  const [faixa, setFaixa] = useState(data.faixas[0]);
  const [dose, setDose] = useState(faixa.doses[0]);

  function handleSetFaixa(e) {
    let valor = e.currentTarget.value,
      novaFaixa = data.faixas.filter(item => item.faixa == valor);

    setFaixa(novaFaixa[0]);
  }

  function handleSetDado(e) {
    let valor = e.currentTarget.value,
      doseObj = faixa.doses.filter(item => item.dose == valor);

    setDose(doseObj[0]);
  }

  let dataBar = {
    labels: [faixa.faixa, 'Distrito Federal'],
    datasets: [{
      label: dose.dose,
      data: [dose.quantidade, dose.df],
      backgroundColor: [
        '#528BF4',
        '#191B20',
      ],
      borderColor: [
        '#528BF4',
        '#191B20',
      ],
      borderWidth: 1
    }]
  };

  let options = {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
  };

  return (
    <section className={styles.faixa_etaria}>
      <div className="container">
        <h2 className='section__h2'>Cobertura vacinal por faixa etária </h2>
        <h3>{faixa.faixa}</h3>

        <div className={styles.faixa_etaria__section}>
          <Bar data={dataBar} options={options}></Bar>

          <div className={`menu_filtro ${styles.menu_filtro}`}>
            <div className='filtro_actions'>
              <div className='filtro_select'>
                <select name="" id="" defaultValue='6 meses a 2 anos' onChange={(e) => handleSetFaixa(e)}>
                  {
                    data.faixas.map(item => (
                      <option key={item.faixa} value={item.faixa}>{item.faixa}</option>
                    ))
                  }
                </select>
              </div>

              <div className='filtro_select'>
                <select name="" id="" defaultValue='1ª Dose' onChange={(e) => handleSetDado(e)}>
                  {
                    faixa.doses.map(item => (
                      <option key={item.dose} value={item.dose}>{item.dose}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <ul className="filtro_info">
              <li>
                <p>{addComma(dose.quantidade)}</p>
                <span>Total de vacinados</span>
              </li>

              <li>
                <p>{addComma(faixa.populacao_faixa)}</p>
                <span>População (Faixa etária)</span>
              </li>

              <li>
                <p>{addComma(faixa.vacinacao_semanal)}</p>
                <span>Vacinação por semana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaixaEtaria;