import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
import { accessTokenState } from "../../../commons/stores/index";
export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // 로그인 체크
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     Modal.error({ content: "로그인 후 이용 가능합니다." });
  //     router.push("/login");
  //   }
  // }, []);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  if (accessToken) return;

  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용 가능합니다." });
        void router.push("/login");
        return;
      }
      setAccessToken(newAccessToken);
    });
  }, []);
  return <Component {...props} />;
};
