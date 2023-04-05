import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const RotateCenter = keyframes`
0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  background-image: url(/music3.jpg);
  width: 45%;
  height: calc(100vh - 80px);
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f8a;
    border-right: 4px solid #edf66a;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  align-items: center;
  & > h2 {
    font-family: "Poppins";
    font-size: 30px;
    position: relative;
    color: #584841;
    &:after {
      content: "";
      width: 35px;
      position: absolute;
      top: -23px;
      left: 90%;
      background-image: url(/sparkler2.png);
      height: 35px;
      background-size: cover;
      opacity: 0.9;
      animation: ${RotateCenter} 4s linear infinite both;
    }
  }
`;

export const Form = styled.form`
  font-family: "Poppins";
  width: 60%;
`;

export const Input = styled.input`
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

export const Forgot = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  margin: 15px 0 30px 0;
`;

export const Login = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #584841;
  outline: none;
  border: none;
  width: 100%;
  border-radius: 8px;
  height: 52px;
  font-weight: 400;
  border: none;
  font-size: 18px;
  color: #342a25;
  font-family: "Leferi-reg";
  margin-top: 30px;
  color: #f2f2f2;
`;

export const Member = styled.p`
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 300;
  margin-top: 15px;
`;

export const GoJoin = styled.a`
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  font-style: italic;
  color: #eef76a;
  font-weight: 800 !important;
  text-decoration: underline !important;
  margin-left: 10px;
`;

export const InputBox = styled.div`
  display: flex;
`;
