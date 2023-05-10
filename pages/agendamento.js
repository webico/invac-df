import Head from 'next/head';
import styles from '@/css/Agendamento.module.css';
import { useState } from 'react';

const Agendamento = () => {
  const [tab, setTab] = useState(true);

  const switchTab = () => {
    setTab(!tab);
  };

  return (
    <>
      <Head>
        <title>INVAC DF - Agendamento</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <div className="container">
          <h1 className={`main__titulo_secundario ${styles.main__titulo_agenda}`}>Não deixe para depois e cuide da sua saúde. Agende suas vacinas e testes.</h1>
        </div>
      </main>

      <section>
        <div className="container">
          <ul className={styles.tab_menu}>
            <li><button className={`${styles.tab_menu__btn} ${tab ? styles.ativo : ''}`} onClick={switchTab}>Agendar Vacina</button></li>
            <li><button className={`${styles.tab_menu__btn} ${!tab ? styles.ativo : ''}`} onClick={switchTab}>Agendar Teste</button></li>
          </ul>

          <form action="">

          </form>
        </div>
      </section>
    </>
  );
};

export default Agendamento;