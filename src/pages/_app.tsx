import type { AppProps } from "next/app";
import type { ThemeConfig } from "antd";
import { App as AppAntd, ConfigProvider } from "antd";

import "@/styles/globals.css";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider theme={theme}>
        <AppAntd>{<Component {...pageProps} />}</AppAntd>
      </ConfigProvider>
    </>
  );
}
