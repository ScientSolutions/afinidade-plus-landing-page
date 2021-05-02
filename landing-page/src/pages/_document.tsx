import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="AppCo app landing page template or product landing page template helps you easily create websites for your app or product,  landing page template form promotion and many more."
          />
          <meta name="author" content="ThemeTags" />
          <meta property="og:site_name" content="" />
          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="article" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>Afinidade Plus</title>
          <link
            rel="icon"
            href="/assets/img/favicon.png"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="/assets/css/themify-icons.css" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link
            rel="stylesheet"
            href="/assets/css/jquery.mb.YTPlayer.min.css"
          />
          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery-3.4.1.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script src="/assets/js/jquery.easing.min.js"></script>
          <script src="/assets/js/jquery.mb.YTPlayer.min.js"></script>
          <script src="/assets/js/wow.min.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/jquery.countdown.min.js"></script>
          <script src="/assets/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}
