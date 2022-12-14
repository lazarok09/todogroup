import { EagleIcon } from "components/EagleIcon";
import { TodosProvider } from "context/todo/Todo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-styles";
import { theme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <EagleIcon altText={"eagle"} height={384} width={416} />
        <GlobalStyle />
        <Component {...pageProps} />
      </TodosProvider>
    </ThemeProvider>
  );
}
