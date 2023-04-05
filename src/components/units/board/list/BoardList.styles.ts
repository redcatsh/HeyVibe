import styled from "@emotion/styled";
import { LikeOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";

export const TableWrapper = styled.div`
  display: block;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0px 50px 30px 50px;
`;

export const RegBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  max-width: 1600px;
  padding: 0 50px;
  margin: 0 auto;
`;

export const GoRegister = styled.button`
  display: block;
  border: 1px solid #97837a;
  padding: 10px 30px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s;
  &:hover {
    background-color: #97837a;
    color: #f2f2f2;
  }
`;

// LIST EDIT

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  min-height: 82vh;
`;
export const Card = styled.div`
  width: 18%;
  border: 1px solid #ab958a;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
`;
export const CardTitle = styled.h5`
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-family: "leferi-reg";
`;
export const CardTop = styled.div``;
export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  align-items: flex-end;
`;
export const CardWriter = styled.p`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 16px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const User = styled(UserOutlined)`
  color: #867269;
  margin-right: 8px;
  & > svg {
    font-size: 23px;
    border: 2px solid #867269;
    border-radius: 50%;
  }
`;

export const CardDate = styled.p`
  font-size: 13px;
  margin-bottom: 0;
`;
export const CardBottomLeft = styled.div``;
export const CardLeft = styled.div`
  width: 100%;
  height: 180px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
    transition: ease-in-out 0.3s;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(0.5);
    position: absolute;
    background-color: #68584f6e;
    left: 0;
    transition: all 0.3s;
  }
  &:hover:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(0);
    position: absolute;
    background-color: transparent;
    left: 0;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
export const CardRight = styled.div`
  width: 100%;
  padding: 20px;
  word-break: break-word;
`;

export const LikeIcon = styled(LikeOutlined)`
  color: #867269;
  & > svg {
    font-size: 15px;
  }
`;

export const BoardLikes = styled.div`
  display: flex;
  justify-content: center;
`;

export const BLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeCount = styled.p`
  font-size: 15px;
  color: #867269;
  font-family: "Leferi-reg";
  margin-bottom: 0;
  margin-top: 5px;
`;

export const CardContents = styled.div`
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

export const ListWrap = styled.div`
  padding-top: 100px;
`;
export const Title = styled.h1`
  font-size: 62px;
  position: relative;
  display: inline-block;
  z-index: 1;
  color: #4e433d;
  margin-bottom: 0;
  &:before {
    content: "";
    width: 100%;
    position: absolute;
    height: 23px;
    background-color: #edfc57a1;
    bottom: 17px;
    transform: skewX(23deg);
    z-index: -1;
  }
`;

export const TitleBox = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 50px;
`;

//PAGINATION

export const Prev = styled.button`
  background-color: transparent;
  border: 1px solid #ddd;
`;
export const Next = styled.button`
  background-color: transparent;
  border: 1px solid #ddd;
`;
export const Pagination = styled.button`
  color: #222;
  background-color: ${(props) => (props.isActive ? "pink" : "transparent")};
  border: 1px solid #ddd;
`;

// Search

export const Search = styled.input`
  font-size: 16px;
  outline: none;
  width: 20%;
  height: 52px;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #97837a;
  margin-right: 15px;
  &::placeholder {
    color: #897166;
    background-image: url("/search.png");
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    text-indent: 35px;
  }
`;
