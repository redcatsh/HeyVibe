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
  height: 100%;
`;

export const Left = styled.div`
  background-image: url(/music3.jpg);
  width: 45%;
  height: 100%;
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
  height: calc(100vh - 110px);
  & > h2 {
    font-family: "Poppins", "Leferi";
    position: relative;
    font-size: 30px;
    &:after {
      content: "";
      width: 35px;
      position: absolute;
      top: -23px;
      left: 100%;
      background-image: url(/sparkler2.png);
      height: 35px;
      background-size: cover;
      opacity: 0.9;
      animation: ${RotateCenter} 4s linear infinite both;
    }
  }
`;
