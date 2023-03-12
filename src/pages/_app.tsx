import React from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}
export default MyApp;
