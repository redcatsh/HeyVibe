import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: auto;
  background-color: #ddc5b9;
  width: 100%;
`;

export default function MyBody(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
