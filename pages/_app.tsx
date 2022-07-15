import "../styles/globals.css";
import "../styles/components/components.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

// 抓出graphql回傳錯誤
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

// 設定要索取資料的api網址
const link = from([
  errorLink,
  new HttpLink({ uri: "https://uupanel.xinmedia.com/graphql/" }),
]);

// 創造一個apollo client
export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: link,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
