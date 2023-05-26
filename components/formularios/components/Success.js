/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class Success extends Component {
  render() {
    const { styles, teste } = this.props;

    return (
      <div className={`${styles.form_caixa} ${styles.form_sucesso}`}>
        <section className={styles.sucesso_info_sec}>
          <h2>Agendamento realizado!!</h2>
          {
            teste ?
              <p>Compareça ao local agendado com documento de identidade oficial e CPF, ou a certidão de nascimento, no caso de crianças e adolescentes.</p>

              :

              <p>Compareça ao local agendado com documento de identidade com foto, CPF e cartão de vacina. Caso não tenha cartão de vacina, será produzido um novo na hora da vacinação.</p>
          }
        </section>

        <section className={styles.app_info_sec}>
          <h3>Baixe o aplicativo Invac DF para receber informações sobre vacinas e testes na sua região!</h3>

          <button className={`btn_principal ${styles.btn_app}`}>Instalar Aplicativo</button>
        </section>
      </div>
    );
  }
}

export default Success;
