import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/utils/ScrollToTop";
import "../styles/globals.css";
import { store, persistor } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emerge || Computer || Destop || Keybord</title>
        <meta
          name="description"
          content="Emerge Computer Best Computer Best rice"
        />
        <link rel="icon" href="icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="laaB60tYF4VtRZ_hoyLHsCD8N1XS-1Oh4KjNrp5pmHY"
        />
        <meta
          name="facebook-domain-verification"
          content="c6hoqn261sw7e3it0q63k2jipmzfcg"
        />
        {/* Meta Pixel Code */}
        <script>
          {`!function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '298164726007432');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:"none"}}
            src="https://www.facebook.com/tr?id=298164726007432&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
