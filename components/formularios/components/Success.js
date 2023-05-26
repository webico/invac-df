/* eslint-disable react/prop-types */

import PWAButton from '@/components/PWAButton';

// import React, { Component } from 'react';
const Success = ({styles, teste}) => {
  return (
    <div className={`${styles.form_caixa} ${styles.form_sucesso}`}>
      <section className={styles.sucesso_info_sec}>
        <h2>Agendamento realizado!!</h2>
        {
          teste ?
            <p>Compareça ao local agendado com documento de identidade oficial e CPF, ou a certidão de nascimento, no caso de crianças e adolescentes.</p>

            :

            <p>Compareça ao local agendado com documento de identidade com foto, CPF e cartão de vacina. Caso não tenha cartão de vacina, será produzido um novo na hora da vacinação.</p>
        }
      </section>

      <section className={styles.app_info_sec}>
        <h3>Baixe o aplicativo Invac DF para receber informações sobre vacinas e testes na sua região!</h3>

        {/* <button className={`btn_principal ${styles.btn_app}`}>Instalar Aplicativo</button> */}

        <PWAButton />
      </section>
    </div>
  );
};


// export class Success extends Component {
//   constructor() {
//     super();
//     this.state = {
//       supportsPWA: false,
//       promptInstall: null,
//     };
//   }

//   handler = () => {
//     //   e.preventDefault();
//     //   console.log('we are being triggered :D');
//     //   this.setState({ supportsPWA: true });
//     //   this.setState({ promptInstall: e });

//     //   // console.log(e);

//   };

//   componentDidMount() {
//     // this.handler();
//     const handler = e => {
//       e.preventDefault();
//       console.log('we are being triggered :D');
//       this.setState({ supportsPWA: true });
//       this.setState({ promptInstall: e });
//     };

//     window.addEventListener('beforeinstallprompt', handler);

//     return () => window.removeEventListener('transitionend', handler);

//   }

//   render() {
//     const { styles, teste } = this.props;

//     let { supportsPWA, promptInstall } = this.state;

//     const onClick = evt => {
//       evt.preventDefault();

//       console.log(promptInstall);

//       if (!promptInstall) {
//         return;
//       }

//       if (!supportsPWA) {
//         return null;
//       }
//       promptInstall.prompt();
//     };

//     // if (!supportsPWA) {
//     //   return null;
//     // }

//     return (
//       <div className={`${styles.form_caixa} ${styles.form_sucesso}`}>
//         <section className={styles.sucesso_info_sec}>
//           <h2>Agendamento realizado!!</h2>
//           {
//             teste ?
//               <p>Compareça ao local agendado com documento de identidade oficial e CPF, ou a certidão de nascimento, no caso de crianças e adolescentes.</p>

//               :

//               <p>Compareça ao local agendado com documento de identidade com foto, CPF e cartão de vacina. Caso não tenha cartão de vacina, será produzido um novo na hora da vacinação.</p>
//           }
//         </section>

//         <section className={styles.app_info_sec}>
//           <h3>Baixe o aplicativo Invac DF para receber informações sobre vacinas e testes na sua região!</h3>

//           <button className={`btn_principal ${styles.btn_app}`}
//             onClick={onClick}
//           >Instalar Aplicativo</button>
//         </section>
//       </div>
//     );
//   }
// }

export default Success;
