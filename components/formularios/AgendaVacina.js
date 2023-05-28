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
    errors: {} // Armazena os erros do formulário
  };

  // Função para validar os campos do formulário
  validateForm = () => {
    const {
      nomeCompleto,
      cpf,
      telefone,
      doseVacina,
    } = this.state;

    const errors = {};

    if (nomeCompleto.trim() === '') {
      errors.nomeCompleto = 'O nome completo é obrigatório.';
      window.alert('Digite um nome.')
    }

    //Erros CPF
    if (cpf.trim() === '') {
      errors.cpf = 'O CPF é obrigatório.';
      window.alert('Digite um CPF.')
    }

    if (telefone.trim() === '') {
      errors.telefone = 'O Telefone é obrigatório.';
      window.alert('Digite um Telefone.')
    }

    if (doseVacina.trim() === '') {
      errors.doseVacina = 'O Telefone é obrigatório.';

      window.alert('Selecione uma vacina.')
    }

    return errors;
  };

  nextStep = () => {
    const errors = this.validateForm(); // Verifica os erros do formulário

    if (Object.keys(errors).length === 0) {
      const { step } = this.state;
      this.setState({
        step: step + 1,
        errors: {}
      });
    } else {
      this.setState({
        errors
      });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
      errors: {}
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, errors } = this.state; // Obtém os erros do estado
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
