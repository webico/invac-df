/* eslint-disable indent */
import React, { Component } from 'react';
import FormUserDetailsConsulta from '@/components/formularios/components/FormUserDetailsConsulta';
import ConfirmConsulta from '@/components/formularios/components/ConfirmConsulta';
import ResultadoConsulta from '@/components/formularios/components/ResultadoConsulta';
import forms from '@/css/Forms.module.css';

export class UserForm extends Component {
  state = {
    step: 1,
    nomeCompleto: '',
    cpf: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
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
    const { step } = this.state;
    const { nomeCompleto, cpf, dataNascimento, cep, endereco, numero, bairro, cidade } = this.state;
    const values = { nomeCompleto, cpf, dataNascimento, cep, endereco, numero, bairro, cidade };
    const styles = forms;

    switch (step) {
      case 1:
        return (
          <FormUserDetailsConsulta
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            styles={styles}
          />
        );
      case 2:
        return (
          <ConfirmConsulta
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            styles={styles}
            teste={false}
          />
        );
      case 3:
        return <ResultadoConsulta
          styles={styles}
          values={values}
          teste={false}
        />;
      default:
        (console.log('This is a multi-step form built with NextJS.'));
    }
  }
}

export default UserForm;
