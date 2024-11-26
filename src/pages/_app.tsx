import Layout from "@/components/Layout";
import { HeaderProvider } from "@/contexts/HeaderContext";
import GlobalStyles from "@/ui/styles/GlobalStyles";
import theme from "@/ui/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeaderProvider>
    </ThemeProvider>
  );
}
