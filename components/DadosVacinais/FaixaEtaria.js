/* eslint-disable react/prop-types */
import { addComma, Soma, Percentual } from '@/public/js/globalFunctions';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState } from 'react';
Chart.register(...registerables);

const FaixaEtaria = ({ data, styles }) => {
  const [faixa, setFaixa] = useState(data.faixas[0]);
  const [dose, setDose] = useState(faixa.doses[0].dose[1]);

  // console.log(faixa.doses);
  // console.log(dose);

  function handleSetFaixa(e) {
    let valor = e.currentTarget.value,
      novaFaixa = data.faixas.filter(item => item.faixa == valor);

    setFaixa(novaFaixa[0]);
  }

  function handleSetDado(e) {
    let valor = e.currentTarget.value;

    setDose(faixa.doses.filter(item => item.dose[0].dose[0] == valor));
  }

  // let dataBar = {
  //   labels: ['dose', 'df'],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     // data: [0, dose[0].df],
  //     data: [faixa.doses[0].dose[1], faixa.doses[0].df],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  // console.log(dose[0]);

  return (
    <section className={styles.faixa_etaria}>
      <div className="container">
        {/* <Bar data={dataBar}></Bar> */}

        <div className='menu_filtro'>
          <div className='filtro_actions'>
            <div className='filtro_select'>
              <select name="" id="" onChange={(e) => handleSetFaixa(e)}>
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
                    <option key={item.dose[0]} value={item.dose[0]}>{item.dose[0]}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <ul className="filtro_info">
            <li>
              <span>Total de vacinados</span>
              {/* <p>{dose && dose[0].dose[1]}</p> */}
              <p>{dose}</p>
            </li>

            <li>
              <span>População (Faixa etária)</span>
              <p>{faixa.populacao_faixa}</p>
            </li>

            <li>
              <span>Vacinação por semana</span>
              <p>{faixa.populacao_faixa}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaixaEtaria;