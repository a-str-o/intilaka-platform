// _app.tsx
import React, { FC, useEffect ,useState} from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@/utils';
import { MUIProvider } from '@/providers';
import 'slick-carousel/slick/slick.css';
import '@/styles/globals.css';
import '@/styles/react-slick.css';
import { NextPageWithLayout } from '@/interfaces/layout';
import i18n from './i18n'; // Import the initialized i18n instance
import LanguageSelectionPopup from './LanguageSelectionPopup'; // Import the LanguageSelectionPopup component

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache;
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    // Change the language on initial render
    i18n.changeLanguage('en'); // Replace 'en' with your desired initial language code
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (!storedLanguage) {
      setShowLanguagePopup(true);
    }
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>INTILAKA</title>
      </Head>
      <MUIProvider>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
        {showLanguagePopup && <LanguageSelectionPopup />}
      </MUIProvider>
    </CacheProvider>
  );
};

export default App;
