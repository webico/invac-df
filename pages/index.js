import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import fsPromises from 'fs/promises';
import path from 'path';
import { useState } from 'react';

export async function getStaticProps() {
  // eslint-disable-next-line no-undef
  const filePath = path.join(process.cwd(), '/public/tempData.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  };
}

export default function Home(props) {
  Home.propTypes = {
    props: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    disponibilidade: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array])
  };

  const vacinas = props.disponibilidade.vacinas,
    testes = props.disponibilidade.testes;

  const [data, setData] = useState(vacinas),
    [nome, setNome] = useState('vacinas'),
    [itemsShow, setItemsShow] = useState(4);

  function handleChange(e) {
    //dá pra melhorar isso aqui, tá feio demais
    if (e.target.value == 'testes') {
      setData(testes);
      setNome('testes');
    } else {
      setData(vacinas);
      setNome('vacinas');
    }
  }

  function handleShowMore() {
    setItemsShow(data.length);
  }

  return (
    <>
      <Head>
        <title>INVAC - DF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <div className="container">
          <h1 className='main__titulo'>Marque suas vacinas e testes de COVID.</h1>

          <Link href='#' className='btn-principal main__btn'>Fazer agendamento</Link>
        </div>
      </main>

      <section className='disponivel'>
        <div className="container">
          <div className="disponivel__filtro">
            <p>Disponibilidade de:</p>

            <select name="" id="" onClick={handleChange}>
              <option value="vacinas">Vacinas</option>
              <option value="testes">Testes</option>
            </select>
          </div>

          <ul className='disponivel__lista'>
            {data && data.slice(0, itemsShow).map(regiao =>
              <li key={regiao.id} className='disponivel__card'>
                <div className='card__info'>
                  <span className='regiao'>Região</span>
                  <h2 className='regiao__nome'>{regiao.nome_regiao}</h2>
                  <p className='regiao__disponiveis'>{regiao.quantidade} {nome} disponíveis</p>
                </div>

                <button className='card__btn'></button>
              </li>
            )}
          </ul>

          {itemsShow == 4 ? <button className='ver-todas' onClick={handleShowMore}>Ver todas as regiões</button> : ''}
        </div>
      </section>
    </>
  );
}

