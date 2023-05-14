/* eslint-disable indent */
import React, { Component } from 'react';
import FormUserDetails from '@/components/formularios/AgendaTeste/FormUserDetails';
import FormSymptomDetails from '@/components/formularios/AgendaTeste/FormSymptomDetails';
import FormLocalDetails from '@/components/formularios/AgendaTeste/FormLocalDetails';
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
    tempoPopup: false,
    infectado: '',
    contato: '',
    regiao: '',
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

  showAviso = (e) => {
    if (e.target.value == '1 a 2 dias') {
      this.setState({ tempoPopup: true });
    } else {
      this.setState({ tempoPopup: false });
    }
  };

  render() {
    const { step } = this.state;
    const { nomeCompleto, cpf, email, telefone, teste, sintomas, tempo, tempoPopup, infectado, contato, regiao, ubs, diaAgendamento, horario } = this.state;
    const values = { nomeCompleto, cpf, email, telefone, teste, sintomas, tempo, tempoPopup, infectado, contato, regiao, ubs, diaAgendamento, horario };
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
            showAviso={this.showAviso}
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
            teste={true}
          />
        );
      case 5:
        return <Success
          styles={styles}
          teste={true}
        />;
      default:
        (console.log('This is a multi-step form built with NextJS.'));
    }
  }
}

export default UserForm;
