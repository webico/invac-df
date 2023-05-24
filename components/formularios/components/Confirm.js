/* eslint-disable react/prop-types */
import Link from 'next/link';
import React, { Component } from 'react';
import ProgressBtns from './ProgressBtns';

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
    const { values, styles, teste } = this.props;

    return (
      <>
        <div className={styles.form_caixa}>
          <p className={styles.aviso}>Caso não compareça no dia marcado, deverá ser feito um novo agendamento no Invac DF.</p>

          <section className={styles.form_section}>
            <h2 className={styles.section_confirm_h2}>Dados do agendamento</h2>

            <div className={styles.confirm_section}>
              <h3>Informações pessoais</h3>
              <div>
                <p><span>Nome:</span> {values.nomeCompleto ? values.nomeCompleto : 'Fulano da Silva'}</p>
                <p><span>CPF:</span> {values.cpf ? values.cpf : '123.456.789-10'}</p>
                <p><span>Telefone:</span> {values.dataNascimento ? values.dataNascimento : '01/02/1990'}</p>
              </div>
            </div>

            {/* checa se o componente é do formulário de teste ou vacina (o conteúdo muda) */}
            {
              teste ?
                <div className={styles.confirm_section}>
                  <h3>Informações vacinais</h3>
                  <div>
                    <p><span>Teste:</span> {values.teste ? values.teste : 'RT-PCR'}</p>
                    <p><span>Local de agendamento:</span> {values.ubs ? values.ubs : 'Drive-thru da USB 1 Asa Sul'}</p>
                    <p><span>Data:</span> {values.diaAgendamento ? values.diaAgendamento : '28/05/23'}</p>
                    <p><span>Horário:</span> {values.horario ? values.horario : '9h às 10h'}</p>
                  </div>
                </div>

                :

                <div className={styles.confirm_section}>
                  <h3>Informações vacinais</h3>
                  <div>
                    <p><span>Dose da Vacina:</span> {values.doseVacina ? values.doseVacina : '3ª dose (+12)'}</p>
                    {values.doseVacina == 'infantil' ? <p><span>Tipo da Vacina:</span> {values.tipoVacina}</p> : ''}
                    <p><span>Local de agendamento:</span> {values.ubs ? values.ubs : 'Drive-thru da USB 1 Asa Sul'}</p>
                    <p><span>Data:</span> {values.diaAgendamento ? values.diaAgendamento : '28/05/23'}</p>
                    <p><span>Horário:</span> {values.horario ? values.horario : '9h às 10h'}</p>
                  </div>
                </div>
            }
          </section>

          <div className={`${styles.check_ul} ${styles.confirm_lgpd}`}>
            <input type="checkbox" id='lgpd' className={styles.radio_input} />
            <label htmlFor="lgpd">Estou de acordo com o compartilhamento dos dados fornecidos para o agendamento, conforme estabelecido na <Link href='#'>Política de Privacidade</Link>.</label>
          </div>

          <ProgressBtns
            styles={styles}
            continue={this.props.nextStep}
            back={this.props.prevStep}
            final={true}
          />
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;