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

  render() {
    const { values, handleChange, styles } = this.props;

    console.log(values);

    return (
      <div className={styles.form_caixa}>

        <form>
          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do local</h2>

            <div className={styles.label_input}>
              <label htmlFor="telefone">Dose da vacina *</label>

              <div className={styles.select}>
                <select name="" id="" required onChange={() => { handleChange('regiao'); }}>
                  <option value="Selecionar dose" disabled selected>Selecionar região</option>
                  <option value="norte">Região Norte</option>
                  <option value="oeste">Região Oeste</option>
                  <option value="central">Região Central</option>
                  <option value="leste">Região Leste</option>
                  <option value="sul">Região Sul</option>
                  <option value="centrol_sul">Região Centro-Sul</option>
                  <option value="sudoeste">Região Sudoeste</option>
                </select>
              </div>
            </div>

            <label id="radio_select">Selecionar local *</label>
            <ul className={styles.radio_select} >
              <li className={styles.ubs}>
                <input type="radio" name='ubs' id='radio1' value='Drive-thru da USB 1 Asa Norte' onInput={handleChange('ubs')} {...values.ubs == 'Drive-thru da USB 1 Asa Norte' ? {checked: true} : ''}/>

                <label htmlFor="radio1" className={styles.ubs_info}>
                  <p>Drive-thru da USB 1 Asa Sul</p>
                  <span>Horários: de 12h às 18h - de segunda a sexta</span>
                  <span>Endereço: SGAS 612</span>
                </label>
              </li>

              <li className={styles.ubs}>
                <input type="radio" name='ubs' id='radio2'  value='Drive-thru da USB 1 Asa Sul' onInput={handleChange('ubs')} {...values.ubs == 'Drive-thru da USB 1 Asa Sul' ? {checked: true} : ''}/>

                <label htmlFor="radio2" className={styles.ubs_info}>
                  <p>Drive-thru da USB 1 Asa Sul</p>
                  <span>Horários: de 12h às 18h - de segunda a sexta</span>
                  <span>Endereço: SGAS 612</span>
                </label>
              </li>

              <li className={styles.ubs}>
                <input type="radio" name='ubs' id='radio3'  value='Hospital Universitário de Brasília' onInput={handleChange('ubs')} {...values.ubs == 'Hospital Universitário de Brasília' ? {checked: true} : ''}/>

                <label htmlFor="radio3" className={styles.ubs_info}>
                  <p>Hospital Universitário de Brasília</p>
                  <span>Horários: de 12h às 18h - de segunda a sexta</span>
                  <span>Endereço 605 - L2 Norte</span>
                </label>
              </li>

              <li className={styles.ubs}>
                <input type="radio" name='ubs' id='radio4' value='USB 1 Lago Norte' onInput={handleChange('ubs')} {...values.ubs == 'USB 1 Lago Norte' ? {checked: true} : ''}/>
                <label htmlFor="radio3" className={styles.ubs_info}>
                  <p>USB 1 Lago Norte</p>
                  <span>Horários: de 12h às 18h - de segunda a sexta</span>
                  <span>Endereço: QI 3</span>
                </label>
              </li>

              <li className={styles.ubs}>
                <input type="radio" name='ubs' id='radio5' value='USB 1 Lago Sul' onInput={handleChange('ubs')}  {...values.ubs == 'USB 1 Lago Sul' ? {checked: true} : ''}/>

                <label htmlFor="radio3" className={styles.ubs_info}>
                  <p>USB 1 Lago Norte</p>
                  <span>Horários: de 12h às 18h - de segunda a sexta</span>
                  <span>Endereço: QI 3</span>
                </label>
              </li>
            </ul>
          </section>

          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do local</h2>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label>Dia de agendamento *</label>

                <input type="date" name='dia_agendamento' value={values.diaAgendamento} required onChange={handleChange('diaAgendamento')}/>
              </div>

              <div className={styles.label_input}>
                <label htmlFor="horario">Horário *</label>

                <div className={styles.select}>
                  <select name="" id="horario" required onChange={handleChange('horario')}>
                    <option value="Selecionar dose" disabled {...values.horario == '' ? {selected: true} : ''}>Selecionar horário</option>
                    <option value="0910" {...values.horario == '0910' ? {selected: true} : ''}>9h às 10h</option>
                    <option value="1213" {...values.horario == '1213' ? {selected: true} : ''}>12h às 13h</option>
                    <option value="1517" {...values.horario == '1517' ? {selected: true} : ''}>15h às 17h</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.form_progresso}>
            <button onClick={this.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button>

            <ul aria-hidden="true">
              <li className={styles.progresso_completo}></li>
              <li className={styles.progresso_ativo}></li>
              <li></li>
            </ul>

            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}>Próximo</button>
          </section>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
