/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class Card extends Component {
  continue = (e, step, handlePopup) => {
    e.preventDefault();

    if (step !== 4) {
      this.props.nextStep();
    } else {
      handlePopup();
    }
  };

  constructor() {
    super();
    this.state = {
      fechado: false
    };
  }

  render() {
    const { styles, step_titulo, step_texto, step } = this.props;

    let progresso = [
      <li key={Math.random(1, 10)}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>
    ];

    for (let i = 0; i < step - 1; i++) {
      progresso.pop();
      progresso.unshift(<li key={Math.random(1, 10)}></li>);
    }

    let { fechado } = this.state;

    const handlePopup = () => {
      localStorage.setItem('visita_popup', 'true');
      this.setState({ fechado: true });
    };

    return (
      <div className={`${styles.overlay} ${fechado ? styles.fechado : ''}`}>

        <div className={styles.visita_popup}>
          <img src="" alt="" />
          <div className={styles.visita_info}>
            <div>
              <p className={styles.step_titulo}>{step_titulo}</p>
              <p className={styles.step_texto}>{step_texto}</p>
            </div>

            <div className={styles.progresso}>
              <ul>
                {progresso}
              </ul>
              <button className={`btn_principal ${styles.proximo}`}
                onClick={e => this.continue(e, step, handlePopup)}>
                {step == 4 ? 'Começar' : 'Próximo'}
              </button>
            </div>

            <button className={styles.fechar} onClick={handlePopup}><div></div><span>Fechar</span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
