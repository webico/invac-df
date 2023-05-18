import Head from 'next/head';
import Link from 'next/link';
import styles from '@/css/Index.module.css';
import DisponiveisLista from '@/components/Index/DisponiveisLista';
// import { addComma, Soma } from '@/public/js/globalFunctions';
import useFetch from '@/public/js/useFetch';
import Footer from '@/components/Footer';
// import CasosLista from '@/components/Index/CasosLista';

export default function Home() {
  const { data, isPending, error } = useFetch('https://api.npoint.io/602d6184ba6fe5909c09');

  return (
    <>
      <Head>
        <title>INVAC DF - Página Inicial</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SEÇÃO INICIAL */}
      <main className='main'>
        <div className="container">
          <h1 className='main__titulo'>Marque suas vacinas e testes de COVID.</h1>

          <Link href='/agendamento' className="btn_principal index_main__btn">Fazer agendamento</Link>
        </div>
      </main>

      {/* DISPONIBILIDADE DE VACINAS E TESTES */}
      {error && <div className='container'>{error}</div>}
      {isPending && <div className='container'>Loading...</div>}
      {data && <DisponiveisLista props={data} styles={styles} />}


      {/* SEÇÃO DE CONSULTA */}
      <section className={`${styles.consulta} ${styles.secao_index}`}>
        <div className={`container ${styles.container}`}>
          <img src="/img/consulta_img.png" alt="" />

          <div className={styles.section__info}>
            <h2 className='section__h2'>Não sabe qual dose precisa?</h2>
            <p>Você pode consultar sua carteira de vacinação online no ConectaSUS.</p>
            <a href="https://conectesus-paciente.saude.gov.br/login" target="_blank" rel="noopener noreferrer" className={`btn_principal ${styles.consulta_btn}`}>Consultar</a>
          </div>
        </div>
      </section>


      {/* MAPA DE CASOS */}
      <section className={`${styles.mapa_casos} ${styles.secao_index}`}>
        <div className={`container ${styles.container}`}>
          <img src="/img/mapa_casos_img.png" alt="" />

          <div className={styles.section__info}>
            <h2 className='section__h2'>Veja casos da COVID do último mês na sua região!</h2>
            <p>Saiba quando o número de pessoas infectadas próximas a vocês aumentar para se prevenir</p>
            <Link href='/mapa-de-casos' className={`btn_principal ${styles.mapa_casos_btn}`}>Mapa de casos</Link>
          </div>
        </div>
      </section>

      {/* DADOS VACINAIS DF */}
      <section className={`${styles.dados_vacinais} ${styles.secao_index}`}>
        <div className='container'>
          <div className={styles.dados_container}>
            <h2 className={styles.dados_vacinais__h2}>Outras pessoas já se preveniram contra a COVID</h2>

            <p>Veja quantas de pessoas já tomaram a vacina.</p>

            <Link href='/dados-vacinais' className={`btn_principal ${styles.dados_vacinais__btn}`}>Dados vacinais</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.secao_duvidas} ${styles.secao_index}`}>
        <div className={`container ${styles.container}`}>
          <h2>Dúvidas sobre a <span>vacina</span>?</h2>
          <p className={styles.secao_duvidas__p}>Respondemos frequentes dúvidas que as pessoas possuem para que você se manter informado!</p>
          <Link href='/faq' className={`btn_principal ${styles.secao_duvidas__btn}`}>Dúvidas frequentes</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

