import styled from "@emotion/styled";

export const Page = styled.button`
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  color: #5f504a;
  border: none;
  &:disabled {
    color: #b39b90;
    background-color: transparent;
  }
  &:hover {
    background-color: #c0a89d;
  }
`;

export const PageNum = styled.button`
  color: #5f504a;
  background-color: ${(props) => (props.isActive ? "#c0a89d" : "transparent")};
  font-family: "Poppins", sans-serif;
  border: none;

  &:hover {
    background-color: #c0a89d;
  }
`;

export const PaginationBox = styled.div`
  text-align: center;
  margin-top: 15px;
`;
