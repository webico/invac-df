/* eslint-disable indent */
import React, { Component } from 'react';
import FormUserDetails from '@/components/VacinaForms/FormUserDetails';
import FormLocalDetails from '@/components/VacinaForms/FormLocalDetails';
import Confirm from '@/components/VacinaForms/Confirm';
import Success from '@/components/VacinaForms/Success';
import forms from '@/css/Forms.module.css';

export class UserForm extends Component {
  state = {
    step: 1,
    nomeCompleto: '',
    cpf: '',
    telefone: '',
    email: '',
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
    if (input == 'doseVacina' && this.state.vacina) {
      this.setState({ [input]: e.target.value });
      // const {tipo} = this.state;
      // tipo.tipoVacina = '';
      this.setState({ tipoVacina: '' });


    } else {
      this.setState({ [input]: e.target.value });

    }
    // this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { nomeCompleto, cpf, email, telefone, doseVacina, tipoVacina, ubs, diaAgendamento, horario } = this.state;
    const values = { nomeCompleto, cpf, email, telefone, doseVacina, tipoVacina, ubs, diaAgendamento, horario };
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
          />
        );
      case 4:
        return <Success styles={styles} />;
      default:
        (console.log('This is a multi-step form built with NextJS.')
        );
    }
  }
}

export default UserForm;
