/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class Card extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { styles, step_titulo, step_texto, step } = this.props;

    let progresso = [
      <li key={Math.random(1, 10)}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>,
      <li key={Math.random(1, 10)} className={styles.unfinished}></li>
    ];

    for (let i = 0; i < step-1; i++) {
      progresso.pop();
      progresso.unshift(<li key={Math.random(1, 10)}></li>);
    }

    return (
      <div className={styles.overlay}>

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
              <button className={`btn_principal ${styles.proximo}`} onClick={this.continue}>{step == 4 ? 'Começar' : 'Próximo'}</button>
            </div>

            <button className={styles.fechar}><div></div><span>Fechar</span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
