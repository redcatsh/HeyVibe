import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import MyLayout from "../src/components/commons/layout";
import MyHomeLayout from "../src/components/commons/home-layout";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

const LAYOUT_PAGES = ["board"];
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMyPages = router.asPath.includes("/playlist");
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          {isMyPages && (
            <MyHomeLayout>
              <Component {...pageProps} />
            </MyHomeLayout>
          )}
          {!isMyPages && (
            <MyLayout>
              <Component {...pageProps} />
            </MyLayout>
          )}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
export default MyApp;
