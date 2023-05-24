import Head from 'next/head';
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
          <div className='main_call'>
            <h1 className='main__titulo_secundario'>Tire suas dúvidas em relação às vacinas e aos testes de Covid-19.</h1>
          </div>
        </div>
      </main>

      <FAQs styles={styles} />

      <Footer />
    </>
  );
};

export default Faq;