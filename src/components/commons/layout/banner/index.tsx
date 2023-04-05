import styled from "@emotion/styled";
import Carousel from "./slider/index";

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function MyBanner() {
  return (
    <Wrapper>
      <Carousel />
    </Wrapper>
  );
}
