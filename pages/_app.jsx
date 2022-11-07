import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>ACME Reporta</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            globalStyles: (theme) => ({
              body: {
                background: "rgb(248, 249, 250)",
                ".c-container": {
                  width: "860px",
                  marginLeft: "auto",
                  marginRight: "auto",
                },
              },
            }),
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
