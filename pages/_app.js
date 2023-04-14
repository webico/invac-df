import Layout from '@/components/Layout';
import '@/css/GlobalStyles.min.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
