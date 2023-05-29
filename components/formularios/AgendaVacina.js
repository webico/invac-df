/* eslint-disable indent */
import React, { Component } from 'react';
import FormUserDetails from '@/components/formularios/components/FormUserDetailsAgenda';
import FormLocalDetails from '@/components/formularios/components/FormLocalDetails';
import Confirm from '@/components/formularios/components/Confirm';
import Success from '@/components/formularios/components/Success';
import forms from '@/css/Forms.module.css';

export class UserForm extends Component {
  state = {
    step: 1,
    nomeCompleto: '',
    cpf: '',
    telefone: '',
    email: '',
    regiao: '',
    doseVacina: '',
    tipoVacina: '',
    ubs: '',
    diaAgendamento: '',
    horario: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state; // Obtém os erros do estado
    const {
      nomeCompleto,
      cpf,
      email,
      telefone,
      doseVacina,
      tipoVacina,
      regiao,
      ubs,
      diaAgendamento,
      horario
    } = this.state;
    const values = {
      nomeCompleto,
      cpf,
      email,
      telefone,
      doseVacina,
      tipoVacina,
      regiao,
      ubs,
      diaAgendamento,
      horario
    };
    const styles = forms;

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            styles={styles}
            teste={false}
          />
        );
      case 2:
        return (
          <FormLocalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            styles={styles}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            styles={styles}
            teste={false}
          />
        );
      case 4:
        return <Success
          styles={styles}
          teste={false}
        />;
      default:
        (console.log('This is a multi-step form built with NextJS.'));
    }
  }
}

export default UserForm;
