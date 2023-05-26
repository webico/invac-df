import Head from 'next/head';
import forms from '@/css/Forms.module.css';
import { useState } from 'react';
import VacinaForms from '@/components/formularios/AgendaVacina';
import TesteForms from '@/components/formularios/AgendaTeste';

const Agendamento = () => {
  const [tab, setTab] = useState('vacina');

  return (
    <>
      <Head>
        <title>INVAC DF - Agendamento</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${forms.main} gradiente_verde`}>
        <div className={`container ${forms.container}`}>
          <h1 className='main__titulo'>Não deixe para depois!</h1>
          <h2 className='main__titulo_secundario'>Cuide da sua saúde agendando suas vacinas e testes de COVID.</h2>
        </div>
      </main>

      <section>
        <div className="container">
          <ul className='tab_menu agendamento'>
            <li><button className={`tab_menu__btn ${tab == 'vacina' ? 'ativo' : ''}`} onClick={() => setTab('vacina')}>Agendar Vacina</button></li>
            <li><button className={`tab_menu__btn ${tab == 'teste' ? 'ativo' : ''}`} onClick={() => setTab('teste')}>Agendar Teste</button></li>
          </ul>

          {
            tab == 'vacina' ? <VacinaForms styles={forms}/> : <TesteForms styles={forms}/>
          }
        </div>
      </section>
    </>
  );
};

export default Agendamento;