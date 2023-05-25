/* eslint-disable indent */
import { Component } from 'react';
import styles from '@/css/VisitaPopup.module.css';
import Card from '@/components/VisitaPopup/Card';

export class VisitaPopup extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <Card 
            styles={styles}
            step_image={'/img/visita_step1.png'}
            step_titulo = 'Bem-vindo ao Invac DF!'
            step_texto = 'Sua ferramenta para cuidar da sua saúde e daqueles ao seu redor.'
            nextStep={this.nextStep}
            step = {step}
          />
        );
      case 2:
        return (
          <Card 
            styles={styles}
            step_image={'/img/visita_step2.png'}
            step_titulo = 'Marque suas Vacinas'
            step_texto = 'Agende vacinas de forma rápida e fácil, garantindo sua proteção.'
            nextStep={this.nextStep}
            step = {step}
          />
        );
      case 3:
        return (
          <Card 
            styles={styles}
            step_image={'/img/visita_step3.png'}
            step_titulo = 'Agende testes de COVID'
            step_texto = 'Programe seu teste para ajudar a conter a apropagação do vírus.'
            nextStep={this.nextStep}
            step = {step}
          />
        );
      case 4:
        return (
          <Card 
            styles={styles}
            step_image={'/img/visita_step4.png'}
            step_titulo = 'Informações do COVID'
            step_texto = 'Mantenha-se informado e proteja-se com informações sobre casos na sua cidade.'
            nextStep={this.nextStep}
            step = {step}
          />
        );
      default:
        (console.log('This is a multi-step form built with NextJS.'));
    }
  }
}

export default VisitaPopup;
