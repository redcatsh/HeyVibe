import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../../commons/stores";

export const useAuth = () => {
  const router = useRouter();

  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (accessToken === undefined) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      void router.push("/login");
    }
  }, []);
};
