import NextDocument, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React, { Children } from 'react';

import { mediaStyles } from '../components/Media';

class Document extends NextDocument {
  render() {
    const { defaultLocale } = this.props.__NEXT_DATA__

    return (
      <Html lang={defaultLocale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await NextDocument.getInitialProps(ctx)

  const mediaQueryStyles = (
    <style
      key={'mediaStyles'}
      dangerouslySetInnerHTML={{ __html: mediaStyles }}
    />
  )

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [mediaQueryStyles, ...Children.toArray(initialProps.styles)]
  }
}

export default Document
