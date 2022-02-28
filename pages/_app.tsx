import { NextComponentType } from 'next';
import { AppContext } from 'next/app';
import { AppInitialProps, AppPropsType } from 'next/dist/shared/lib/utils';
import React from 'react';

import { MediaContextProvider } from '../components/Media';

export type CustomAppProps = AppPropsType & {
  Component: NextComponentType
}

const App: NextComponentType<AppContext, AppInitialProps, CustomAppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  )
}

export default App
