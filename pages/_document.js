import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512.png"></link>
        <meta name="theme-color" content="#2561D3" />
      </Head>
      <body className='tema'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
