import Layout from '../components/Layout';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../styles/globals.css';

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
