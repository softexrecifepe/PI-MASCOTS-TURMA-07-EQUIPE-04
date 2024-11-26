import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/ui/styles/GlobalStyles";
import theme from "@/ui/styles/theme";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
