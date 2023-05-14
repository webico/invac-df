/* eslint-disable indent */
import React, { Component } from 'react';
import FormUserDetails from '@/components/formularios/TesteForms/FormUserDetails';
import FormSymptomDetails from '@/components/formularios/TesteForms/FormSymptomDetails';
import FormLocalDetails from '@/components/formularios/TesteForms/FormLocalDetails';
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
    teste: '',
    sintomas: [],
    tempo: '',
    infectado: '',
    contato: '',
    diaAgendamento: '',
    horario: '',
    ubs: ''
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

  handleCheck = (e) => {
    let input = e.target,
      item = input.value;

    if (input.checked) {
      return this.setState({ sintomas: this.state.sintomas.concat([item]) });
    }
    else {
      return this.setState({
        sintomas: this.state.sintomas.filter(lixo => {
          return lixo !== item;
        })
      });
    }
  };

  render() {
    const { step } = this.state;
    const { nomeCompleto, cpf, email, telefone, teste, sintomas, tempo, infectado, ubs, diaAgendamento, horario } = this.state;
    const values = { nomeCompleto, cpf, email, telefone, teste, sintomas, tempo, infectado, ubs, diaAgendamento, horario };
    const styles = forms;

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            styles={styles}
          />
        );
      case 2:
        return (
          <FormSymptomDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            values={values}
            styles={styles}
          />
        );

      case 3:
        return (
          <FormLocalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            values={values}
            styles={styles}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            styles={styles}
          />
        );
      case 5:
        return <Success styles={styles} />;
      default:
        (console.log('This is a multi-step form built with NextJS.'));
    }
  }
}

export default UserForm;
