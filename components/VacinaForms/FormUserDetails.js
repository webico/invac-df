import React, { Component } from 'react';


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
    // eslint-disable-next-line react/prop-types
    const { values, handleChange } = this.props;

    let { vacina } = this.state;

    const handleVacinaBaby = (e) => {
      if (e.target.value == 'infantil') {
        this.setState({ vacina: true });
      } else {
        this.setState({ vacina: false });
      }
    };

    return (
      <>
        <form>
          <section className='form_section'>
            <h2 className='section__h2'>Informações pessoais</h2>

            <div className='form_linha'>
              <div className='label_input'>
                <label htmlFor="nomeCompleto">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  id='nomeCompleto'
                  onChange={handleChange('nomeCompleto')}
                  defaultValue={values.nomeCompleto}
                  required
                />
              </div>

              <div className='label_input'>
                <label htmlFor="cpf">CPF *</label>
                <input
                  type="number"
                  placeholder="000.000.000-00"
                  id='cpf'
                  onChange={handleChange('cpf')}
                  defaultValue={values.cpf}
                  required
                />
              </div>
            </div>

            <input type="text"
              placeholder="Enter Your Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />


            <input type="email"
              placeholder="Enter Your Your Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />

            <div className='form_linha'>
              <div className='label_input'>
                <label htmlFor="telefone">Telefone com DDD *</label>
                <input
                  type="number"
                  placeholder="(00) 00000-0000"
                  id='telefone'
                  onChange={handleChange('telefone')}
                  defaultValue={values.telefone}
                  required
                />
              </div>

              <div className='label_input'>
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  id='email'
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  required
                />
              </div>
            </div>
          </section>

          <section className="form_section">
            <h2 className="section__h2">Tipo de vacina</h2>

            <div className='form_linha'>
              <div className='label_input'>
                <label htmlFor="telefone">Dose da vacina *</label>

                <select name="" id="" required onChange={(e) => { handleChange('doseVacina'); handleVacinaBaby(e); }}>
                  <option value="Selecionar dose" disabled selected>Selecionar dose</option>
                  <option value="infantil">Vacina Infantil (-12)</option>
                  <option value="dose1">1ª dose (+12)</option>
                  <option value="dose2">2ª dose (+12)</option>
                  <option value="dose3">3ª dose (+12)</option>
                  <option value="reforco">Dose de reforço (+12)</option>
                  <option value="bivalente">Bivalente (grupos prioritários)</option>
                </select>
              </div>

              {
                vacina &&
                <div className='label_input'>
                  <label htmlFor="telefone">Tipo por idade *</label>

                  <select name="" id="" required onChange={handleChange('tipoVacina')}>
                    <option value="coronavac" selected>Coronavac (3 a 4 anos)</option>
                    <option value="pfizer_baby">Pfizer Baby (6 meses a 4 anos)</option>
                    <option value="pfizer_pediatria">Pfizer Pediatria (5 a 11 anos)</option>
                  </select>
                </div>
              }

            </div>
          </section>

          <button
            onClick={this.continue}
          >Próximo</button>
        </form>
      </>
    );
  }
}

export default FormUserDetails;
