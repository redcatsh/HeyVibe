import MyHeader from "./header";
import MyBanner from "./banner";
import MyNavigation from "./navigation";
import MySidebar from "./sidebar";
import MyFooter from "./footer";
import MyBody from "./body";
import { useRouter } from "next/router";
import TodayViewedProduct from "./floating";

interface IMyLayoutProps {
  children: JSX.Element;
}

const HIDDEN_BANNERS = ["/", "/board"];
const HIDDEN_FLOATING = ["/", "/board", "/login", "/logout", "/join"];

export default function MyLayout(props: IMyLayoutProps) {
  const router = useRouter();
  router.asPath;

  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenFloating = HIDDEN_FLOATING.includes(router.asPath);

  return (
    <>
      <MyHeader />
      {!isHiddenFloating && <TodayViewedProduct />}
      <div style={{ display: "flex" }}>
        <MyBody>{props.children}</MyBody>
      </div>
      <MyFooter />
    </>
  );
}
