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
      infectado: false,
      sintomas: []
    };

  }

  render() {
    const { values, handleChange, handleCheck, styles } = this.props;

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
              <label>Selecione todos os seus sintomas *</label>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Tosse seca e persistente" id='tosse'
                  onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Tosse seca e persistente') ? { checked: true } : ''}
                />
                <label htmlFor="tosse">Tosse seca e persistente</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Cansaço excessivo" id='cansaco' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Cansaço excessivo') ? { checked: true } : ''} />
                <label htmlFor="cansaco">Cansaço excessivo</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Dor de cabeça" id='dor' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Dor de cabeça') ? { checked: true } : ''} />
                <label htmlFor="dor">Dor de cabeça</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Febre acima de 38°C" id='febre' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Febre acima de 38°C') ? { checked: true } : ''} />
                <label htmlFor="febre">Febre acima de 38°C</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Dor muscular generalizada" id='muscular' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Dor muscular generalizada') ? { checked: true } : ''} />
                <label htmlFor="muscular">Dor muscular generalizada</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Garganta inflamada" id='garganta' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Garganta inflamada') ? { checked: true } : ''} />
                <label htmlFor="garganta">Garganta inflamada</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Coriza ou nariz entupido" id='coriza' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Coriza ou nariz entupido') ? { checked: true } : ''} />
                <label htmlFor="coriza">Coriza ou nariz entupido</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Diarreia" id='diarreia' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Diarreia') ? { checked: true } : ''} />
                <label htmlFor="diarreia">Diarreia</label>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Perda de olfato e paladar" id='perda' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Perda de olfato e paladar') ? { checked: true } : ''} />
                <label htmlFor="perda">Perda de olfato e paladar</label>
              </div>
            </div>

            <div className={styles.label_input}>
              <label>Por quanto tempo você tem sentido esses sintomas? *</label>

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
                  <input type="radio" name='contato' id='radio1' value='sim' className={styles.radio_input} onInput={handleChange('contato')} {...values.contato == 'Sim' ? { checked: true } : ''} onChange={e => handleInfectado(e)} />
                  <label htmlFor="radio1" className={styles.ubs_info}>Sim</label>
                </li>

                <li className={styles.check_select}>
                  <input type="radio" name='contato' id='radio2' value='nao' className={styles.radio_input} onInput={handleChange('contato')} {...values.contato == 'Nao' ? { checked: true } : ''} onChange={e => handleInfectado(e)} />

                  <label htmlFor="radio2" className={styles.ubs_info}>Não</label>
                </li>
              </ul>
            </div>

            {
              (infectado || values.infectado == 'sim') &&
              <div className={styles.label_input}>
                <label>Quantos dias faz, que teve contato com alguém infectado? *</label>

                <div className={styles.select}>
                  <select name="" id="" required onClick={handleChange('infectado')}>
                    <option disabled {...values.tipoVacina == '' ? { selected: true } : ''}>Selecionar tempo</option>

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
