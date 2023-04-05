import { matches } from "lodash";
import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .matches(
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      "이메일 형식이 아닙니다."
    )
    .required("이메일을 입력해주세요."),
  name: yup
    .string()
    .max(5, "5자 이내로 입력해주세요.")
    .required("이름을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(8, "비밀번호는 최대 8자리로 입력해 주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,8}$/,
      "비밀번호 형식이 맞지 않습니다."
    )
    .required("비밀번호를 입력해 주세요."),
});
