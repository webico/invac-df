import React, { Component } from 'react';
import FormUserDetails from '@/components/VacinaForms/FormUserDetails';
import FormPersonalDetails from '@/components/VacinaForms/FormPersonalDetails';
import Confirm from '@/components/VacinaForms/Confirm';
import Success from '@/components/VacinaForms/Success';

export class UserForm extends Component {
  state = {
    step: 1,
    nomeCompleto: '',
    cpf: '',
    telefone: '',
    doseVacina: '',
    tipoVacina: '',
    //
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
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
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
      );
    case 4:
      return <Success />;
    default:
      (console.log('This is a multi-step form built with NextJS.')
      );
    }
  }
}

export default UserForm;
