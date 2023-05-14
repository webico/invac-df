/* eslint-disable react/prop-types */
import Link from 'next/link';
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
                <p><span>Nome:</span> {values.nomeCompleto}</p>
                <p><span>CPF:</span> {values.cpf}</p>
                <p><span>Telefone:</span> {values.telefone}</p>
              </div>
            </div>

            {/* checa se o componente é do formulário de teste ou vacina (o conteúdo muda) */}
            {
              teste ?
                <div className={styles.confirm_section}>
                  <h3>Informações vacinais</h3>
                  <div>
                    <p><span>Teste:</span> {values.doseVacina}</p>
                    {values.doseVacina == 'infantil' ? <p><span>Tipo da Vacina:</span> {values.tipoVacina}</p> : ''}
                    <p><span>Local de agendamento:</span> {values.ubs}</p>
                    <p><span>Data:</span> {values.diaAgendamento}</p>
                    <p><span>Horário:</span> {values.horario}</p>
                  </div>
                </div>

                :

                <div className={styles.confirm_section}>
                  <h3>Informações vacinais</h3>
                  <div>
                    <p><span>Dose da Vacina:</span> {values.doseVacina}</p>
                    {values.doseVacina == 'infantil' ? <p><span>Tipo da Vacina:</span> {values.tipoVacina}</p> : ''}
                    <p><span>Local de agendamento:</span> {values.ubs}</p>
                    <p><span>Data:</span> {values.diaAgendamento}</p>
                    <p><span>Horário:</span> {values.horario}</p>
                  </div>
                </div>
            }
          </section>

          <div className={`${styles.check_ul} ${styles.confirm_lgpd}`}>
            <input type="radio" className={styles.radio_input} />
            <label htmlFor="">Estou de acordo com o compartilhamento dos dados fornecidos para o agendamento, conforme estabelecido na <Link href='#'>Política de Privacidade</Link>.</label>
          </div>

          <section className={styles.form_progresso}>
            <button onClick={this.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button>

            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}>Agendar</button>
          </section>
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;