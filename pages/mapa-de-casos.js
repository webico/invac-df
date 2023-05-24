import MapaCasos from '@/components/MapaCasos/MapaCasos';
import Head from 'next/head';
import useFetch from '@/public/js/useFetch';
import Footer from '@/components/Footer';
import styles from '@/css/MapaCasos.module.css';
import BannerInformativo from '@/components/BannerInformativo';

const MapaDeCasos = () => {
  const { data, isPending, error } = useFetch('https://api.npoint.io/602d6184ba6fe5909c09/regioes_administrativas');

  return (
    <>
      <Head>
        <title>INVAC DF - Mapa de Casos</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <div className="container">
          <div className='main_call'>
            <h1 className='main__titulo_secundario'>Veja o número de casos confirmados de Covid-19 e mortes causadas pelo vírus no Distrito Federal.</h1>
          </div>
        </div>
      </main>

      <section>
        <div className="container">
          <img src="/img/mapa_casos2_img.png" alt="" />


          {error && <div className='container'>{error}</div>}
          {isPending && <div className='container'>Loading...</div>}

          { data && <MapaCasos data={data} styles={styles}/>}

        </div>
      </section >

      <BannerInformativo titulo='Mapa de Casos'>
        <li><a href="https://www.saude.df.gov.br/boletinsinformativos-divep-cieves" target="_blank" rel="noopener noreferrer">Voletins Covid-19 - Divep/SVS/SES-DF</a></li>
      </BannerInformativo>

      <Footer />
    </>
  );
};

export default MapaDeCasos;