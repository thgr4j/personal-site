import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="app.css" />
        <title>Theo Grigor</title>
      </head>
      <body class="bg-gradient-to-r from-[#001f3f] via-[#176c84] via-[#15715a] to-[#48346a]">
        <Component />
        <Footer />
      </body>
    </html>
  );
}
