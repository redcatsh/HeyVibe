import * as S from "./LoginSuccess.styles";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LoginSuccess.queries";
import { useQuery } from "@apollo/client";

export default function LoginSuccessPageUI() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log({ data });
  return (
    <>
      <S.Wrapper>
        <S.Left></S.Left>
        <S.Right>
          <h2>Welcome, {data?.fetchUserLoggedIn.name}</h2>
        </S.Right>
      </S.Wrapper>
      ;
    </>
  );
}
