/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ProgressBtns from '../components/ProgressBtns';

export class FormLocalDetails extends Component {
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
      vacina: false,
      data: null,
      isPending: true,
      error: null,
      unidades: []
    };
  }

  findUBS = (e, data) => {
    let regiaoSelecionada = data.find(item => item.nome == e),
      unidades = regiaoSelecionada.unidades;

    return unidades;
  };

  //useFetch em "javascript antigo"
  //>> useFetch usa useState, e esse Class Componente não permite, então tive que usar estado
  fetchData = async () => {
    try {
      const response = await fetch('https://api.npoint.io/602d6184ba6fe5909c09/regioes_administrativas'),
        json = await response.json();
      this.setState({ data: json });
      // this.setState({ unidades: json[0].unidades });
      this.setState({ unidades: this.props.values.regiao ? this.findUBS(this.props.values.regiao, json) : json[0].unidades });

      this.setState({ isPending: false });
    } catch (error) {
      this.setState({ error: error.message });
      this.setState({ isPending: false });
    }

  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { values, handleChange, styles } = this.props;

    let { data, isPending, error, unidades } = this.state;

    const handleUBS = (e) => {
      let regiaoSelecionada = data.find(item => item.nome == e.currentTarget.value),
        unidades = regiaoSelecionada.unidades;

      this.setState({ unidades: unidades });
    };

    return (
      <div className={styles.form_caixa}>

        <form>
          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do local</h2>

            <div className={styles.label_input}>
              <label htmlFor="regiao">Região *</label>

              {isPending && <p>Carregando...</p>}
              {error && <p>{error}</p>}

              {
                data &&
                <div className={styles.select}>
                  <select name="" id="regiao" required
                    onChange={handleChange('regiao')}
                    onInput={e => handleUBS(e)}
                  >
                    {data.map(regiao => (
                      <option key={regiao.nome} value={regiao.nome} {...values.regiao == regiao.nome ? { selected: true } : ''}>{regiao.nome}</option>
                    ))}
                  </select>
                </div>
              }
            </div>

            <label id="radio_select">Selecionar local *</label>
            <ul className={styles.radio_select} >

              {data && unidades && unidades.map(unidade => (
                <li key={unidade.nome} className={styles.ubs}>
                  <input type="radio" name='ubs' id='radio1' className={styles.radio_input} value={unidade.nome} onChange={handleChange('ubs')}
                    {...values.ubs == unidade.nome ? { checked: true } : ''}
                  />

                  <label htmlFor="radio1" className={styles.ubs_info}>
                    <p>{unidade.nome}</p>
                    <span>Horários: {unidade.horario}</span>
                    <span>Endereço: {unidade.endereco}</span>
                  </label>
                </li>
              ))
              }

            </ul>
          </section>

          <section className={styles.form_section}>
            <h2 className={styles.section__h2}>Informações do local</h2>

            <div className={styles.form_linha}>
              <div className={styles.label_input}>
                <label htmlFor="dia_agendamento">Dia de agendamento *</label>

                <input type="date" name='dia_agendamento' id="dia_agendamento" value={values.diaAgendamento} required onChange={handleChange('diaAgendamento')} />
              </div>

              <div className={styles.label_input}>
                <label htmlFor="horario">Horário *</label>

                <div className={styles.select}>
                  <select name="" id="horario" required onChange={handleChange('horario')}>
                    <option value="Selecionar dose" disabled {...values.horario == '' ? { selected: true } : ''}>Selecionar horário</option>
                    <option value="9h às 10h" {...values.horario == '9h às 10h' ? { selected: true } : ''}>9h às 10h</option>
                    <option value="12h às 13h" {...values.horario == '12h às 13h' ? { selected: true } : ''}>12h às 13h</option>
                    <option value="15h às 17h" {...values.horario == '15h às 17h' ? { selected: true } : ''}>15h às 17h</option>
                  </select>
                </div>
              </div>
            </div>
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

export default FormLocalDetails;
