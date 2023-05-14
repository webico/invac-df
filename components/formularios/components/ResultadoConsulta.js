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
    const { values, styles, teste } = this.props;

    return (
      <>
        <div className={styles.form_caixa}>
          <section className={styles.form_section}>
            <div className={styles.resultado_section}>
              {
                !teste ?
                  <>
                    <h2>Vacinas tomadas por <span>{values.nomeCompleto ? values.nomeCompleto : 'Fulano da Silva'}</span></h2>
                    <p>Aqui estão as vacinas que você tomou!</p>
                  </>

                  :

                  <>
                    <h2>Testes realizados por <span>{values.nomeCompleto ? values.nomeCompleto : 'Fulano da Silva'}</span></h2>
                    <p>Aqui estão os testes que foram realizados por você!</p>
                  </>
              }
            </div>

            {
              !teste ?
                <>
                  <div className={styles.confirm_section}>
                    <div>
                      <p><span>Data do Teste:</span> 11/12/22</p>
                      <p><span>Teste:</span> RT-PCR</p>
                      <p><span>Resultado:</span> Positivo</p>
                    </div>
                  </div>

                  <div className={styles.confirm_section}>
                    <div>
                      <p><span>Data do Teste:</span> 08/01/23</p>
                      <p><span>Teste:</span> RT-PCR</p>
                      <p><span>Resultado:</span> Negativo</p>
                    </div>
                  </div>

                  <div className={styles.confirm_section}>
                    <div>
                      <p><span>Data do Teste:</span> 15/04/23</p>
                      <p><span>Teste:</span> RT-PCR</p>
                      <p><span>Resultado:</span> Negativo</p>
                    </div>
                  </div>
                </>

                :

                <>
                  <div className={styles.confirm_section}>
                    <div>
                      <p><span>Nome:</span> {values.nomeCompleto}</p>
                      <p><span>CPF:</span> {values.cpf}</p>
                      <p><span>Data de Nascimento:</span> {values.dataNascimento}</p>
                    </div>
                  </div>

                  <div className={styles.confirm_section}>
                    <div>
                      <p><span>CEP:</span> {values.cep}</p>
                      <p><span>Endereço e Número:</span> {values.endereco}, {values.numero}</p>
                      <p><span>Bairro:</span> {values.bairro}</p>
                      <p><span>Cidade:</span> {values.cidade}</p>
                    </div>
                  </div>
                </>
            }

          </section>

          {/* <section className={styles.form_progresso}>
            <button onClick={this.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button>

            <button onClick={this.continue} className={`btn_principal ${styles.progresso_btn}`}>{!teste ? 'Consultar vacinas' : 'Consultar Testes'}</button>
          </section> */}
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;