import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 80px;
  background-color: #ddc5b9;
  line-height: 80px;
  font-family: "Poppins", sans-serif;
  border-top: 1px solid #635751;
`;
const Copyright = styled.p`
  color: #635751;
  font-size: 13px;
  text-align: center;
`;
export default function MyFooter() {
  return (
    <Wrapper>
      <Copyright>© 2022 Songhee All Rights Reserved.</Copyright>
    </Wrapper>
  );
}
