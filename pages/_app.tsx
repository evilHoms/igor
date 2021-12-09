import Layout from 'common/Layout';

import '../styles/global.scss';
import '../styles/palette.scss';
import '../styles/vars.scss';

export default function App({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
}
