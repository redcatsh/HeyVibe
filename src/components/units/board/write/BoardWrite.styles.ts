import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// export const globalStyles = css`
//   * {
//     background-color: black;
//   }
// `;

// KEYFRAMES

export const SlideLeft = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const TrackingExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const RotateCenter = keyframes`
0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
///////////

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;

export const WriteBg = styled.div`
  background-image: url(/listen1.jpg);
  width: 40%;
  border: 50px solid #ddc5b9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ddc5b9;
    top: 30px;
  }
  & > h1 {
    background-color: #473c3700;
    font-size: 22px;
    font-weight: 200;
    margin: 0;
    color: #473c37;
    line-height: 1;
    width: 100%;
    padding: 15px 0px 15px 10px;
    z-index: 1;
    font-family: "Poppins", sans-serif;
    letter-spacing: 13px;
    text-transform: uppercase;
    border-top: 1px solid #473c37;
    position: relative;
    &:after {
      content: "";
      width: 45px;
      position: absolute;
      top: -23px;
      right: 0px;
      background-image: url(/sparkler2.png);
      height: 45px;
      background-size: cover;
      opacity: 0.9;
      animation: ${RotateCenter} 4s linear infinite both;
    }
  }
`;

// animation
export const Wrapper = styled.div`
  width: 60%;
  padding: 50px;
  animation: ${SlideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  overflow-y: scroll;
  background-color: #ddc5ba;
`;

export const FormWrap = styled.div`
  margin-top: 30px;
`;

// animation
export const Title = styled.h3`
  color: #604f47;
  font-size: 50px;
  margin-top: 0;
  text-align: center;
  animation: ${TrackingExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: 0.3s;
  font-weight: 100;
  font-family: "Poppins", sans-serif;
  display: inline-block;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    position: absolute;
    height: 20px;
    background-color: #edfc57a1;
    bottom: 7px;
    z-index: -1;
    transform: skewX(23deg);
  }
`;

export const HiBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
export const HalfBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;
export const InputTitle = styled.label`
  color: #604f47;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
  font-family: "Noto Sans KR", sans-serif;
`;

export const HalfInput = styled.input`
  font-size: 15px;
  outline: none;
  width: 100%;
  height: 52px;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #97837a;
  &::placeholder {
    color: #897166;
  }
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;
`;

export const AddBox = styled.div`
  display: flex;
`;

export const AddrInput = styled.input`
  font-size: 15px;
  outline: none;
  width: 11%;
  height: 52px;
  border: 0;
  border-bottom: 1px solid #97837a;
  margin-bottom: 10px;
  padding: 10px;
  background-color: transparent;
  &::placeholder {
    color: #897166;
  }
`;

export const AddWidInput = styled.input`
  font-size: 15px;
  outline: none;
  width: 100%;
  height: 52px;
  border: 0;
  border-bottom: 1px solid #97837a;
  margin-bottom: 10px;
  padding: 10px;
  background-color: transparent;
  &::placeholder {
    color: #897166;
  }
`;

export const AddButton = styled.button`
  background-color: #7e6960;
  height: 52px;
  color: #fff;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

export const PhotoBox = styled.div`
  display: flex;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  line-height: 20px;
`;

export const RadioBox = styled.div`
  margin-right: 15px;
`;

export const RadInput = styled.input`
  font-size: 15px;
  margin-top: 0;
  margin-right: 5px;
  padding: 10px;
  &::placeholder {
    color: #897166;
  }
`;

export const SubmitBtn = styled.button`
  width: 180px;
  height: 52px;
  font-weight: 500;
  border: none;
  font-size: 16px;
  color: #342a25;
  background-color: ${(props) => (props.isActive ? "#c5ab9f" : "#b59a8d")};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: #e7c203;
  }
`;

export const WidInput = styled.input`
  font-size: 15px;
  width: 100%;
  height: 52px;
  border: 0;
  border-bottom: 1px solid #97837a;
  padding: 10px;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: #897166;
  }
`;

export const ContentArea = styled.textarea`
  font-size: 15px;
  outline: none;
  height: 480px;
  border: 1px solid #97837a;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  &::placeholder {
    color: #897166;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const SubmitWrap = styled.div`
  text-align: center;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const GbButton = styled.button`
  color: #4f4f4f;
  font-size: 25px;
  line-height: normal;
  vertical-align: middle;
  background-color: #9d857a;
  cursor: pointer;
  color: #604f47;
  width: 200px;
  height: 100px;
  outline: none;
  border: none;
`;

export const UploadHidden = styled.input`
  display: none;
`;

export const UploadImage = styled.img`
  width: 200px;
  height: 100px;
  margin-right: 24px;
  cursor: pointer;
  object-fit: cover;
`;
