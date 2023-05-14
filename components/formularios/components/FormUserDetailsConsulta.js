/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class FormUserDetailsConsulta extends Component {
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

              <div className={styles.label_input}>
                <label htmlFor="data_nascimento">Data de Nascimento *</label>

                <input type="date" name='data_nascimento' id="data_nascimento" value={values.dataNascimento} required onChange={handleChange('dataNascimento')} />
              </div>
            </div>
          </section>

          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Endereço</h2>

            <div className={styles.form_linha}>
              <div className={styles.form_linha}>
                <div className={styles.label_input}>
                  <label htmlFor="cep">CEP *</label>
                  <input
                    type="number"
                    placeholder="00000-000"
                    id='cep'
                    onChange={handleChange('cep')}
                    value={values.cep}
                    required
                  />
                </div>

                <div className={styles.label_input}>
                  <label htmlFor="endereco">Endereço *</label>
                  <input
                    type="text"
                    placeholder="Digite seu endereço"
                    id='endereco'
                    onChange={handleChange('endereco')}
                    value={values.endereco}
                    required
                  />
                </div>

                <div className={styles.label_input}>
                  <label htmlFor="numero">Número *</label>
                  <input
                    type="number"
                    placeholder="1000"
                    id='numero'
                    onChange={handleChange('numero')}
                    value={values.numero}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label htmlFor="bairro">Bairro *</label>
                <input
                  type="text"
                  placeholder="Digite seu bairro"
                  id='bairro'
                  onChange={handleChange('bairro')}
                  value={values.bairro}
                  required
                />
              </div>

              <div className={styles.label_input}>
                <label htmlFor="cidade">Cidade *</label>
                <input
                  type="text"
                  placeholder="Digite sua cidade"
                  id='cidade'
                  onChange={handleChange('cidade')}
                  value={values.cidade}
                  required
                />
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

export default FormUserDetailsConsulta;
