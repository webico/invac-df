import styles from '@/css/Agendamento.module.css';

const Agendamento = () => {
  return (
    <>
      <main className='main'>
        <div className="container">
          <h1 className={`main__titulo_secundario ${styles.main__titulo_agenda}`}>Não deixe para depois e cuide da sua saúde. Agende suas vacinas e testes.</h1>
        </div>
      </main>

      <section>
        <div className="container">
          <ul>
            <li><button>Agendar Vacina</button></li>
            <li><button>Agendar Teste</button></li>
          </ul>

          <form action="">
            
          </form>
        </div>
      </section>
    </>
  );
};

export default Agendamento;