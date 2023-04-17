import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import fsPromises from 'fs/promises';
import path from 'path';
import { useState } from 'react';
import DisponiveisLista from '@/components/DisponiveisLista';
import { addComma } from '@/public/js/globalFunctions';
import UserHelpLinks from '@/components/UserHelpLinks';

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
      PropTypes.array]),
    casos: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array]),
    dados_vacinais_df: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array])
  };

  const dataCasosInicial = props.casos[1][0];
  const [casos, setCasos] = useState(dataCasosInicial);

  function handleCasos(e) {
    setCasos(props.casos[1][e.target.value]);
  }

  const dadosVacinais = props.dados_vacinais_df;

  return (
    <>
      <Head>
        <title>INVAC - DF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SEÇÃO INICIAL */}
      <main className='main'>
        <div className="container">
          <h1 className='main__titulo'>Marque suas vacinas e testes de COVID.</h1>

          <Link href='#' className='btn-principal main__btn'>Fazer agendamento</Link>
        </div>
      </main>

      {/* DISPONIBILIDADE DE VACINAS E TESTES */}
      <DisponiveisLista props={props} />

      <section className='consulta'>
        <div className="container">
          <h2>Consulte os resultados dos seus testes e a sua carteira de vacinação contra a COVID-19.</h2>
          <Link href='#' className='btn-principal'>Consultar!</Link>
        </div>
      </section>

      {/* CASOS DE COVID NO ULTIMO MES */}
      <section className='casos-covid'>
        <div className="container">
          <h2>Veja casos da COVID do último mês na sua região!</h2>

          <div className='casos__div'>
            <select name="" id="" onChange={handleCasos} className='casos__filtro'>
              {
                props.casos[1] && props.casos[1].map(regiao => (
                  <option key={regiao.id} value={regiao.id}>{regiao.nome_regiao}</option>
                ))
              }
            </select>

            <ul>
              <li className='dado__card'>
                <p>Casos Ativos</p>
                <span>{addComma(casos.casos_ativos)}</span>
              </li>

              <li className='dado__card'>
                <p>Casos confirmados</p>
                <span>{addComma(casos.casos_confirmados)}</span>
              </li>

              <li className='dado__card'>
                <p>Óbitos Confirmados</p>
                <span>{addComma(casos.obitos_confirmados)}</span>
              </li>
            </ul>

            <p className='atualizado-em'>Atualizado em: {props.casos[0].atualizado_em}</p>
          </div>
        </div>
      </section>

      {/* DADOS VACINAIS DF */}

      <section className='dados-vacinais'>
        <div className="container">
          <h2>Dados vacinais do Distrito Federal</h2>

          <ul className='dados__list'>
            <li className='dado__card big-card'>
              <p>Total de Doses Aplicadas</p>
              <span>{addComma(dadosVacinais.total_doses)}</span>
            </li>

            <li className='dado__card'>
              <p>1ª Dose</p>
              <span>{addComma(dadosVacinais.dose_1)}</span>
            </li>

            <li className='dado__card'>
              <p>2ª Dose</p>
              <span>{addComma(dadosVacinais.dose_2)}</span>
            </li>

            <li className='dado__card'>
              <p>3ª Dose</p>
              <span>{addComma(dadosVacinais.reforco_1)}</span>
            </li>
          </ul>

          <Link href='#' className='btn-principal ver-todas-doses'>Ver todas as doses aplicadas</Link>
        </div>
      </section>

      <section className='secao-duvidas'>
        <div className="container">
          <h2>Dúvidas sobre a vacina?</h2>
          <p>Separamos todas as frequentes dúvidas  que as pessoas possuem sobre a vacina e respondemos para que você se manter informado!</p>
          <Link href='#' className='btn-principal'>Dúvidas frequentes</Link>
        </div>
      </section>

      <footer>
        <div className="container">
          <UserHelpLinks />
        </div>
      </footer>
    </>
  );
}

