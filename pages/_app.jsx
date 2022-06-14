import Layout from '../components/Layout';
import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';

function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <ThemePicker variant='light'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemePicker>
    </StyleProvider>
  );
}

export default MyApp;
