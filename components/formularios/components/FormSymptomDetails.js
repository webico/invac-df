/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ProgressBtns from '../components/ProgressBtns';

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
    const { values, handleChange, handleCheck, showAviso, styles } = this.props;

    let { infectado, tempoPopup } = this.state;

    const handleInfectado = (e) => {
      if (e.target.value == 'Sim') {
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

              <ul className={styles.checkboxlist}>
                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Tosse seca e persistente" id='tosse'
                    onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Tosse seca e persistente') ? { checked: true } : ''}
                  />
                  <label htmlFor="tosse">Tosse seca e persistente</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Cansaço excessivo" id='cansaco' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Cansaço excessivo') ? { checked: true } : ''} />
                  <label htmlFor="cansaco">Cansaço excessivo</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Dor de cabeça" id='dor' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Dor de cabeça') ? { checked: true } : ''} />
                  <label htmlFor="dor">Dor de cabeça</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Febre acima de 38°C" id='febre' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Febre acima de 38°C') ? { checked: true } : ''} />
                  <label htmlFor="febre">Febre acima de 38°C</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Dor muscular generalizada" id='muscular' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Dor muscular generalizada') ? { checked: true } : ''} />
                  <label htmlFor="muscular">Dor muscular generalizada</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Garganta inflamada" id='garganta' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Garganta inflamada') ? { checked: true } : ''} />
                  <label htmlFor="garganta">Garganta inflamada</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Coriza ou nariz entupido" id='coriza' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Coriza ou nariz entupido') ? { checked: true } : ''} />
                  <label htmlFor="coriza">Coriza ou nariz entupido</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Diarreia" id='diarreia' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Diarreia') ? { checked: true } : ''} />
                  <label htmlFor="diarreia">Diarreia</label>
                </li>

                <li className={styles.checkbox}>
                  <input type="checkbox" className={styles.radio_input} name="sintomas[]" multiple value="Perda de olfato e paladar" id='perda' onChange={(e) => handleCheck(e)} {...values.sintomas.includes('Perda de olfato e paladar') ? { checked: true } : ''} />
                  <label htmlFor="perda">Perda de olfato e paladar</label>
                </li>
              </ul>
            </div>

            <div className={styles.label_input}>
              <label htmlFor='sintomatempo'>Por quanto tempo você tem sentido esses sintomas? *</label>

              <div className={styles.select} >
                <select name="" id="sintomatempo" required
                  onInput={handleChange('tempo')}
                  onChange={(e) => showAviso(e)}>
                  <option value="Selecionar dose" disabled {...values.tempo == '' ? { selected: true } : ''}>Selecionar tempo</option>
                  <option value="1 a 2 dias">1 a 2 dias</option>
                  <option value="3 a 5 dias">3 a 5 dias</option>
                  <option value="7 a 10 dias">7 a 10 dias</option>
                </select>
              </div>
            </div>

            {
              tempoPopup || values.tempoPopup &&
              <div className={styles.overlay_popup}>
                <div className={styles.container}>
                  <div className={styles.overlay_div}>
                    <span>Você selecionou</span>
                    <h2> 1 a 2 dias de sintomas.</h2>
                    <p>Para o exame detectar o vírus com mais certeza, é melhor fazê-lo entre o 3º e 4º dia de sintomas.</p>
                    <p>Por isso, escolha uma data para o agendamento do exame a partir do 3º dia de sintomas.</p>

                    <button className='btn_principal' onClick={this.props.nextStep}>Seguir</button>
                  </div>
                </div>
              </div>
            }

            <div className={styles.label_input}>
              <label>Você teve contato com alguém infectado? *</label>
              <ul className={styles.check_ul}>
                <li className={styles.check_select}>
                  <input type="radio" name='contato' id='radio1' value='Sim' className={styles.radio_input} onChange={handleChange('contato')} {...values.contato == 'Sim' ? { checked: true } : ''} onClick={e => handleInfectado(e)} />
                  <label htmlFor="radio1" className={styles.ubs_info}>Sim</label>
                </li>

                <li className={styles.check_select}>
                  <input type="radio" name='contato' id='radio2' value='Nao' className={styles.radio_input} onChange={handleChange('contato')} {...values.contato == 'Nao' ? { checked: true } : ''} onClick={e => handleInfectado(e)} />

                  <label htmlFor="radio2" className={styles.ubs_info}>Não</label>
                </li>
              </ul>
            </div>

            {
              (infectado || values.contato == 'Sim') &&
              <div className={styles.label_input}>
                <label htmlFor='infectadotempo'>Quantos dias desde que teve contato com alguém infectado? *</label>

                <div className={styles.select} style={{ width: '16.25rem' }}>
                  <select name="" id="infectadotempo" required onClick={handleChange('infectado')} style={{ width: '16.25rem' }}>
                    <option disabled {...values.tipoVacina == '' ? { selected: true } : ''}>Selecionar tempo</option>

                    <option value="0102" {...values.infectado == '0102' ? { selected: true } : ''}>1 a 2 dias</option>
                    <option value="0305" {...values.infectado == '0305' ? { selected: true } : ''}>3 a 5 dias</option>
                    <option value="0710" {...values.infectado == '0710' ? { selected: true } : ''}>7 a 10 dias</option>
                  </select>
                </div>
              </div>
            }
          </section>

          <ProgressBtns
            styles={styles}
            continue={this.props.nextStep}
            back={this.props.prevStep}
            final={false}
          />
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
