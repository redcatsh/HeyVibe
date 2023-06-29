import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: auto;
  background-color: #ddc5b9;
  width: 100%;
`;

export default function MyBody(props: any) {
  return <Wrapper>{props.children}</Wrapper>;
}
