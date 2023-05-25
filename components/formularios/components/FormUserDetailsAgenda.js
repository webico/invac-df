/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ProgressBtns from './ProgressBtns';

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
    const { values, handleChange, styles, teste } = this.props;

    let { vacina } = this.state;

    const handleVacinaBaby = (e) => {
      if (e.target.value == 'infantil') {
        this.setState({ vacina: true });
      } else {
        this.setState({ vacina: false });
      }
    };

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
            {/* o que for !teste só aparece no formulário de vacina. O contrário para o form de teste */}

            {!teste && <h2 className={styles.section__h2}>Tipo de vacina</h2>}

            <div className={styles.form_linha}>
              {
                !teste &&
                <div className={styles.label_input}>
                  <label htmlFor='dosevacina'>Dose da vacina *</label>

                  <div className={styles.select}>
                    <select name="" id="dosevacina" required
                      onChange={handleChange('doseVacina')}
                      onInput={e => handleVacinaBaby(e)}
                    >
                      <option disabled  {...values.doseVacina == '' ? { selected: true } : ''}>Selecionar dose</option>
                      <option value="Vacina Infantil (-12)" {...values.doseVacina == 'Vacina Infantil (-12)' ? { selected: true } : ''}>Vacina Infantil (-12)</option>
                      <option value="1ª dose (+12)" {...values.doseVacina == '1ª dose (+12)' ? { selected: true } : ''}>1ª dose (+12)</option>
                      <option value="2ª dose (+12)" {...values.doseVacina == '2ª dose (+12)' ? { selected: true } : ''}>2ª dose (+12)</option>
                      <option value="3ª dose (+12)" {...values.doseVacina == '3ª dose (+12)' ? { selected: true } : ''}>3ª dose (+12)</option>
                      <option value="Dose de reforço (+12)" {...values.doseVacina == 'Dose de reforço (+12)' ? { selected: true } : ''}>Dose de reforço (+12)</option>
                      <option value="Bivalente (grupos prioritários)" {...values.doseVacina == 'Bivalente (grupos prioritários)' ? { selected: true } : ''}>Bivalente (grupos prioritários)</option>
                    </select>
                  </div>
                </div>
              }

              {
                !teste && (vacina || values.doseVacina == 'Vacina Infantil (-12)') &&
                <div className={styles.label_input}>
                  <label htmlFor='tipovacina'>Tipo por idade *</label>

                  <div className={styles.select}>
                    <select name="" id="tipovacina" required onClick={handleChange('tipoVacina')}>
                      <option disabled {...values.tipoVacina == '' ? { selected: true } : ''}>Selecionar tipo</option>
                      <option value="Coronavac (3 a 4 anos)" {...values.tipoVacina == 'Coronavac (3 a 4 anos)' ? { selected: true } : ''}>Coronavac (3 a 4 anos)</option>
                      <option value="Pfizer Baby (6 meses a 4 anos)" {...values.tipoVacina == 'Pfizer Baby (6 meses a 4 anos)' ? { selected: true } : ''}>Pfizer Baby (6 meses a 4 anos)</option>
                      <option value="Pfizer Pediatria (5 a 11 anos)" {...values.tipoVacina == 'Pfizer Pediatria (5 a 11 anos)' ? { selected: true } : ''}>Pfizer Pediatria (5 a 11 anos)</option>
                    </select>
                  </div>
                </div>
              }

              {
                teste &&
                <section className={styles.form_section}>
                  <h2 className={styles.section__h2}>Tipo de teste</h2>

                  <div className={styles.form_linha}>
                    <div className={styles.label_input}>
                      <label>Teste *</label>

                      <div className={styles.select} style={{width: '16.25rem'}}>
                        <select name="" id="" required onChange={handleChange('teste')} style={{width: '16.25rem'}}>
                          <option disabled {...values.teste == '' ? { selected: true } : ''}>Selecionar teste</option>
                          <option value="RT-PCR" {...values.teste == 'RT-PCR' ? { selected: true } : ''}>RT-PCR</option>
                          <option value="Teste Rápido Antígeno" {...values.teste == 'Teste Rápido Antígeno' ? { selected: true } : ''}>Teste Rápido Antígeno</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              }
            </div>
          </section>

          <ProgressBtns
            styles={styles}
            continue={this.props.nextStep}
            final={false}
          />
        </form>
      </div>
    );
  }
}

export default FormUserDetails;
