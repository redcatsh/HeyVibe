import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  UserOutlined,
  HeartFilled,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
/* ROUTED PAGE */

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const PrdLikes = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const BLike = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
`;

export const LikeCount = styled.p`
  font-size: 18px;
  color: #e9517a;
  font-family: "Leferi-reg";
  margin-bottom: 0;
  margin-top: 5px;
`;

export const User = styled(UserOutlined)`
  color: #867269;
  & > svg {
    font-size: 50px;
    border: 3px solid #867269;
    border-radius: 50%;
    padding: 6px 6px 5px 6px;
  }
`;

export const LikeIcon = styled(HeartFilled)`
  color: #e9517a;
  & > svg {
    font-size: 30px;
  }
`;

export const Inner = styled.div``;

export const PrdBox = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PrdImage = styled.div`
  width: 40%;
  display: flex;
  overflow-x: scroll;
`;
export const PrdInfo = styled.div`
  width: 60%;
  padding: 80px 50px 50px 50px;
  overflow-y: scroll;
`;

export const PrdTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PrdName = styled.h3`
  font-size: 34px;
  font-weight: bold;
  font-family: "leferi-reg";
`;
export const PrdInfoBox = styled.div``;
export const InfoList = styled.div``;

export const InfoListBox = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
`;
export const Label = styled.li`
  list-style: none;
  width: 20%;
`;
export const Price = styled.li`
  list-style: none;
  width: 80%;
  font-family: "Leferi-bl";
  font-size: 30px;
  & > span {
    font-size: 18px;
    font-family: "leferi-reg";
  }
`;

export const Remarks = styled.li`
  list-style: none;
  width: 80%;
  font-weight: bold;
  font-family: "leferi-reg";
`;

export const Date = styled.li`
  list-style: none;
  width: 80%;
  font-weight: bold;
  font-family: "leferi-reg";
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Contents = styled.li`
  list-style: none;
  font-weight: bold;
  font-family: "leferi-reg";
  border: 1px solid #ab958a;
  padding: 15px;
  min-height: 400px;
`;

export const InfoContentsBox = styled.ul`
  padding-left: 0;
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;
export const GoBuy = styled.button`
  width: 100%;
  border: none;
  background-color: #6d5041;
  color: #fff;
  padding: 10px 0;
  cursor: pointer;
`;
export const GoList = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  border: 1px solid #6d5041;
  padding: 10px 0;
  cursor: pointer;
`;

export const MasterButton = styled.div``;
export const Delete = styled(DeleteOutlined)`
  margin-left: 20px;
`;
export const GoEdit = styled(EditOutlined)``;
export const Map = styled.div``;
export const Tags = styled.div``;
export const TagItem = styled.span`
  margin-right: 10px;
  border: 2px solid #6d5041;
  border-radius: 50px;
  padding: 3px 10px;
  color: #6d5041;
  font-family: "Leferi-reg";
`;
