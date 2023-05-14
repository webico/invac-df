/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {
      vacina: false
    };

  }

  render() {
    const { values, handleChange, styles } = this.props;

    return (
      <div className={styles.form_caixa}>
        <p className={styles.aviso}>Crianças e adolescentes que não possuem CPF, devem adicionar os dados do responsável legal.</p>

        <form>
          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações pessoais</h2>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label htmlFor="nomeCompleto">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  id='nomeCompleto'
                  onChange={handleChange('nomeCompleto')}
                  value={values.nomeCompleto}
                  required
                />
              </div>

              <div className={styles.label_input}>
                <label htmlFor="cpf">CPF *</label>
                <input
                  type="number"
                  placeholder="000.000.000-00"
                  id='cpf'
                  onChange={handleChange('cpf')}
                  value={values.cpf}
                  required
                />
              </div>
            </div>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label htmlFor="telefone">Telefone com DDD *</label>
                <input
                  type="number"
                  placeholder="(00) 00000-0000"
                  id='telefone'
                  onChange={handleChange('telefone')}
                  value={values.telefone}
                  required
                />
              </div>

              <div className={styles.label_input}>
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  id='email'
                  onChange={handleChange('email')}
                  value={values.email}
                  required
                />
              </div>
            </div>
          </section>

          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Tipo de vacina</h2>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label>Teste *</label>

                <div className={styles.select}>
                  <select name="" id="" required onChange={handleChange('teste')} >
                    <option disabled {...values.teste == '' ? { selected: true } : ''}>Selecionar teste</option>
                    <option value="rtpcr" {...values.teste == 'rtpcr' ? { selected: true } : ''}>RT-PCR</option>
                    <option value="teste_rapido" {...values.teste == 'teste_rapido' ? { selected: true } : ''}>Teste Rápido Antígeno</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.form_progresso}>
            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}
            >Próximo</button>
          </section>
        </form>
      </div>
    );
  }
}

export default FormUserDetails;
