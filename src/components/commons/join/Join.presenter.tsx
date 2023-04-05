import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER } from "./Join.queries";
import { schema } from "../../../commons/library/join-validation";
import Input01 from "../inputs/01";
import Button01 from "../buttons/01";
import * as S from "./Join.styles";
import styled from "@emotion/styled";
import { Modal } from "antd";

interface IFormData {
  email: string;
  name: string;
  password: string;
}

export default function JoinUI() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      console.log(data);
      Modal.success({ content: "회원가입이 완료되었습니다!" });
      router.push(`/login`);
    } catch (error) {
      Modal.error({ content: "회원가입에 실패했습니다!" });
    }
  };

  const Error = styled.p`
    color: red;
    font-size: 14px;
  `;

  return (
    <S.Wrapper>
      <S.Left></S.Left>
      <S.Right>
        <h2>Join</h2>
        <S.Form onSubmit={handleSubmit(onClickSubmit)}>
          <Input01
            type="text"
            placeholder="Email"
            register={register("email")}
          />
          <Error>{formState.errors.email?.message}</Error>
          <Input01 type="text" placeholder="Name" register={register("name")} />
          <Error>{formState.errors.name?.message}</Error>
          <Input01
            type="password"
            placeholder="Password"
            register={register("password")}
          />
          <Error>{formState.errors.password?.message}</Error>
          <Button01 title="회원가입" isActive={formState.isValid}></Button01>
        </S.Form>
      </S.Right>
    </S.Wrapper>
  );
}
