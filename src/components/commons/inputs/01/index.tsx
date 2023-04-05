import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";
interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

const Input = styled.input`
  font-size: 15px;
  outline: none;
  width: 100%;
  height: 52px;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #97837a;
  margin-right: 15px;
  &::placeholder {
    color: #897166;
    font-weight: 300;
  }
`;

export default function Input01(props: IInputProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
