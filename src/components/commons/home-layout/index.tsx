import MyHeader from "./header";
import MyBanner from "./banner";
import MyNavigation from "./navigation";
import MySidebar from "./sidebar";
import MyFooter from "./footer";
import MyBody from "./body";
import { useRouter } from "next/router";

interface IMyHomeLayoutProps {
  children: JSX.Element;
}

export default function MyHomeLayout(props: IMyHomeLayoutProps) {
  const router = useRouter();
  router.asPath;

  return (
    <>
      <MyHeader />
      <div>
        <MyBody>{props.children}</MyBody>
      </div>
      <MyFooter />
    </>
  );
}
