import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "../themeContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
