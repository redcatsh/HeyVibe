import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  background: url(/music10.jpg);
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #2c241fcc;
    top: 0;
    z-index: 0;
  }
`;

export default function MyBody(props: any) {
  const router = useRouter();

  return <Wrapper>{props.children}</Wrapper>;
}
