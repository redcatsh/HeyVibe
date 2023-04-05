import styled from "@emotion/styled";

interface IButtonProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IButtonProps) {
  const Button = styled.button`
    display: block;
    margin: 0 auto;
    background-color: ${props.isActive ? "#584841" : "#a1867c"};
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
    cursor: pointer;
  `;

  return <Button>{props.title}</Button>;
}
