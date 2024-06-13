import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ThemeConfig } from "antd";
import { App as AppAntd, ConfigProvider } from "antd";

import "@/styles/globals.css";
import "@/assets/scss/index.scss";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  title?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: "#52c41a",
    fontFamily: "Roboto",
  },
  components: {
    Layout: {
      siderBg: "#ffffff",
      headerHeight: 70,
    },
    Menu: {
      itemMarginInline: 0,
      itemHeight: 52,
      itemMarginBlock: 0,
      itemSelectedBg: "#4e73df",
      itemSelectedColor: "#ffffff",
      itemActiveBg: "none",
      itemHoverColor: "none",
    },
  },
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ConfigProvider theme={theme}>
        <AppAntd>{getLayout(<Component {...pageProps} />)}</AppAntd>
      </ConfigProvider>
    </>
  );
}
