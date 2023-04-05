import * as S from "./Login.styles";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  Mutation,
  MutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { Modal } from "antd";
import { Router, useRouter } from "next/router";

export default function LoginUI() {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<Mutation, "loginUser">,
    MutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패했습니다." });
        router.push("/login");
        return;
      }

      setAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);
      void router.push("/login-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      <S.Left></S.Left>
      <S.Right>
        <h2>Login</h2>
        <S.Form>
          <S.Input type="text" placeholder="UserId" onChange={onChangeEmail} />
          <S.Input
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
          <S.CheckInput type="checkbox" id="autoLogin" />
          <S.CheckLabel for="autoLogin">자동로그인</S.CheckLabel>
          <S.Login onClick={onClickLogin}>로그인</S.Login>
          <S.Join>회원가입</S.Join>
          <S.Forgot>
            <li>비밀번호 찾기</li>
            <li>아이디 찾기</li>
          </S.Forgot>
        </S.Form>
      </S.Right>
    </S.Wrapper>
  );
}
