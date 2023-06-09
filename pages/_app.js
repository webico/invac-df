import Layout from '@/components/Layout';
import '@/css/GlobalStyles.css';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
