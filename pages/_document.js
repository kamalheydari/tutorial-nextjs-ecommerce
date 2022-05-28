import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Dev AT E-commerce website with Next.js'
          />
          <link rel='stylesheet' href='fa/css/font-awesome.min.css' />
          <link rel='stylesheet' href='css/bootstrap.min.css' />
          <script src='js/jquery-3.4.1.slim.min.js'></script>
          <script src='js/popper.min.js'></script>
          <script src='js/bootstrap.min.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
