import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Theo Grigor</title>
      </head>
      <body class="bg-white dark:bg-slate-800">
        <Component />
        <Footer />
      </body>
    </html>
  );
}
