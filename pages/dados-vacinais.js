import Head from 'next/head';
import styles from '@/css/DadosVacinais.module.css';
import Footer from '@/components/Footer';
import Quantitativo from '@/components/DadosVacinais/Quantitativo';
import useFetch from '@/public/js/useFetch';
import Estoque from '@/components/DadosVacinais/Estoque';
import FaixaEtaria from '@/components/DadosVacinais/FaixaEtaria';
import BannerInformativo from '@/components/BannerInformativo';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

const DadosVacinais = () => {
  const { data, isPending, error } = useFetch('https://api.npoint.io/602d6184ba6fe5909c09');

  return (
    <>
      <Head>
        <title>INVAC DF - Dados Vacinais do Distrito Federal</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SEÇÃO INICIAL */}
      <main className={`main gradiente_verde ${styles.main}`}>
        <div className="container">
          <div className='main_call'>
            <h1 className='main__titulo_secundario'>Acompanhe os dados parciais da Campanha Nacional de Vacinação contra a COVID-19 no Distrito Federal!</h1>
          </div>
        </div>
      </main>

      {error && <Error error={error} />}
      {isPending && <div style={{height:'2rem'}}><Loading /></div>}

      {data &&
        <>
          <Quantitativo styles={styles} data={data} />

          <Estoque styles={styles} data={data.dados_vacinais_df.estoque_vacinal} />

          <FaixaEtaria styles={styles} data={data.dados_vacinais_df.faixa_etaria} />
        </>
      }

      <BannerInformativo titulo='Dados Vacinais'>
        <li><a href="https://www.saude.df.gov.br/coronavirus" target="_blank" rel="noopener noreferrer">Boletins semanais de vacinação - SES/DF</a></li>

        <li><a href="https://www.saude.df.gov.br/vacinometro" target="_blank" rel="noopener noreferrer">Vacinômetro - SES/DF</a></li>
      </BannerInformativo>

      <Footer />
    </>
  );
};

export default DadosVacinais;