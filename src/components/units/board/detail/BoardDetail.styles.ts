import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  EnvironmentOutlined,
  LinkOutlined,
} from "@ant-design/icons";
/* ROUTED PAGE */

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding: 130px 80px 80px 80px;
`;

export const WrapperBox = styled.div`
  display: block;
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #9a857b;
  padding-bottom: 20px;
`;
export const BiLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BiRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const UserImg = styled.div`
  display: block;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  color: #828282;
`;
export const UserName = styled.h5`
  font-size: 24px;
  color: #000;
  font-weight: 500;
  margin: 0;
  color: #3a322e;
`;
export const CreateDate = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 5px;
  color: #9a857b;
`;
export const BoardBody = styled.div`
  display: block;
`;
export const BoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  padding-top: 60px;
  margin-top: 0;
  color: #443934;
`;
export const BoardContents = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #443934;
`;
export const BoardLikes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const BLike = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
`;
export const BDislike = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
`;
export const LikeCount = styled.p`
  font-size: 18px;
  color: #867269;
  font-family: "Leferi-reg";
  margin-bottom: 0;
  margin-top: 5px;
`;
export const DislikeCount = styled.p`
  font-size: 18px;
  color: #867269;
  font-family: "Leferi-reg";
  margin-bottom: 0;
  margin-top: 5px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  border: 1px solid #867269;
  font-size: 16px;
  background-color: transparent;
  padding: 10px 30px;
  margin-right: 15px;
  color: #443934;
  cursor: pointer;
  transition: all 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #867269;
    color: #f2f2f2;
  }
`;

export const ReactPlayer = styled.div`
  margin-bottom: 15px;
`;

export const Youtube = styled.input``;

export const User = styled(UserOutlined)`
  color: #867269;
  & > svg {
    font-size: 50px;
    border: 3px solid #867269;
    border-radius: 50%;
    padding: 6px 6px 5px 6px;
  }
`;

export const LikeIcon = styled(LikeOutlined)`
  color: #867269;
  & > svg {
    font-size: 30px;
  }
`;

export const DislikeIcon = styled(DislikeOutlined)`
  color: #867269;
  & > svg {
    font-size: 30px;
  }
`;

export const LocationIcon = styled(EnvironmentOutlined)`
  color: #867269;
  cursor: pointer;
  & > svg {
    font-size: 30px;
  }
`;

export const LinkIcon = styled(LinkOutlined)`
  color: #867269;
  cursor: pointer;
  margin-right: 15px;
  & > svg {
    font-size: 30px;
  }
`;

export const BoardThumbnail = styled.div`
  & > img {
    width: 40%;
    margin-top: 30px;
    height: 300px;
    object-fit: cover;
  }
`;
