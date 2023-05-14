/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  constructor() {
    super();
    this.state = {
      infectado: false
    };

  }

  render() {
    const { values, handleChange, styles } = this.props;

    let { infectado } = this.state;

    const handleInfectado = (e) => {
      if (e.target.value == 'sim') {
        this.setState({ infectado: true });
      } else {
        this.setState({ infectado: false });
      }
    };

    return (
      <div className={styles.form_caixa}>

        <form>
          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do sintomas</h2>

            <div className={styles.label_input}>
              <label htmlFor="telefone">Por quanto tempo você tem sentido esses sintomas? *</label>

              <div className={styles.select}>
                <select name="" id="" required onChange={() => { handleChange('tempo'); }}>
                  <option value="Selecionar dose" disabled selected>Selecionar tempo</option>
                  <option value="0102">1 a 2 dias</option>
                  <option value="0305">3 a 5 dias</option>
                  <option value="0710">7 a 10 dias</option>
                </select>
              </div>
            </div>

            <div className={styles.label_input}>
              <label>Você teve contato com alguém infectado? *</label>
              <ul className={styles.check_ul}>
                <li className={styles.check_select}>
                  <input type="radio" name='contato' id='radio1' value='sim' onInput={handleChange('contato')} {...values.contato == 'Sim' ? { checked: true } : ''} onChange={e => handleInfectado(e)}/>
                  <label htmlFor="radio1" className={styles.ubs_info}>Sim</label>
                </li>

                <li className={styles.check_select}>
                  <input type="radio" name='contato' id='radio2' value='nao' onInput={handleChange('contato')} {...values.contato == 'Nao' ? { checked: true } : ''} onChange={e => handleInfectado(e)}/>

                  <label htmlFor="radio2" className={styles.ubs_info}>Não</label>
                </li>
              </ul>
            </div>

            {
              (infectado || values.infectado == 'sim') &&
              <div className={styles.label_input}>
                <label>Tipo por idade *</label>

                <div className={styles.select}>
                  <select name="" id="" required onClick={handleChange('infectado')}>
                    <option disabled {...values.tipoVacina == '' ? { selected: true } : ''}>Selecionar tipo</option>

                    <option value="0102" {...values.infectado == '0102' ? { selected: true } : ''}>1 a 2 dias</option>
                    <option value="0305" {...values.infectado == '0305' ? { selected: true } : ''}>3 a 5 dias</option>
                    <option value="0710" {...values.infectado == '0710' ? { selected: true } : ''}>7 a 10 dias</option>
                  </select>
                </div>
              </div>
            }
          </section>

          {/* <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do local</h2>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label>Dia de agendamento *</label>

                <input type="date" name='dia_agendamento' value={values.diaAgendamento} required onChange={handleChange('diaAgendamento')} />
              </div>

              <div className={styles.label_input}>
                <label htmlFor="horario">Horário *</label>

                <div className={styles.select}>
                  <select name="" id="horario" required onChange={handleChange('horario')}>
                    <option value="Selecionar dose" disabled {...values.horario == '' ? { selected: true } : ''}>Selecionar horário</option>
                    <option value="0910" {...values.horario == '0910' ? { selected: true } : ''}>9h às 10h</option>
                    <option value="1213" {...values.horario == '1213' ? { selected: true } : ''}>12h às 13h</option>
                    <option value="1517" {...values.horario == '1517' ? { selected: true } : ''}>15h às 17h</option>
                  </select>
                </div>
              </div>
            </div>
          </section> */}

          <section className={styles.form_progresso}>
            <button onClick={this.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button>

            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}>Próximo</button>
          </section>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
