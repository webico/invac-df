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
          <section className={styles.form_section}>
            <h2 className={styles.section_confirm_h2}>Dados da consulta</h2>

            <div className={styles.confirm_section}>
              <h3>Informações pessoais</h3>
              <div>
                <p><span>Nome:</span> {values.nomeCompleto}</p>
                <p><span>CPF:</span> {values.cpf}</p>
                <p><span>Data de Nascimento:</span> {values.dataNascimento}</p>
              </div>
            </div>

            <div className={styles.confirm_section}>
              <h3>Endereço</h3>
              <div>
                <p><span>CEP:</span> {values.cep}</p>
                <p><span>Endereço e Número:</span> {values.endereco}, {values.numero}</p>
                <p><span>Bairro:</span> {values.bairro}</p>
                <p><span>Cidade:</span> {values.cidade}</p>
              </div>
            </div>

          </section>

          <div className={`${styles.check_ul} ${styles.confirm_lgpd}`}>
            <input type="radio" className={styles.radio_input} />
            <label htmlFor="">Estou de acordo com o compartilhamento dos dados fornecidos para o agendamento, conforme estabelecido na <Link href='#'>Política de Privacidade</Link>.</label>
          </div>

          <section className={styles.form_progresso}>
            <button onClick={this.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button>

            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}>{!teste ? 'Consultar vacinas' : 'Consultar testes'}</button>
          </section>
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;