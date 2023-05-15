import Head from 'next/head';
import Link from 'next/link';
import styles from '@/css/Faq.module.css';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';

const Faq = () => {
  return (
    <>
      <Head>
        <title>INVAC DF - Dúvidas Frequentes</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SEÇÃO INICIAL */}
      <main className='main'>
        <div className="container">
          <div className='main__subtitulo'>
            <p className='subtitulo__bold'>Dúvidas Frequentes</p>
            <p>Vacinas e Testes de Covid-19</p>
          </div>

          <div className='main_call'>
            <h1 className='main__titulo_secundario'>Tire suas dúvidas em relação as vacinas e aos testes de Covid-19.</h1>

            <div className='cta'>
              <span className='cta__span'>Mais Informações</span>
              <Link href='#' className="btn_secundario main__btn">Sobre a Covid-19</Link>
            </div>
          </div>
        </div>
      </main>

      <FAQs styles={styles} />

      <Footer />
    </>
  );
};

export default Faq;