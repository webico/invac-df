/* eslint-disable react/prop-types */
import { Soma, addComma } from '@/public/js/globalFunctions';
import Link from 'next/link';

const Estoque = ({ data, styles }) => {

  let totalEstoque = [];

  for (let i in data) {
    totalEstoque.push(data[i].quantidade);
  }

  return (
    <section className={styles.estoque}>
      <div className="container">
        <h2 className={`section__h2 ${styles.section__h2}`}>Vacinas disponíveis</h2>

        <Link href='/agendamento' className={`btn_principal ${styles.estoque_btn}`}>Agendar Vacina</Link>

        <ul className={styles.estoque_lista}>
          {
            data && data.map(item => (
              <li key={item.nome} className={styles.estoque_item}>
                <h3>{item.nome}</h3>
                <p>{addComma(item.quantidade)}</p>
              </li>
            ))
          }

          <li className={styles.estoque_item}>
            <h3>Total</h3>
            <p>{addComma(Soma(totalEstoque))}</p>
          </li>
        </ul>
      </div>
    </section >
  );
};

export default Estoque;