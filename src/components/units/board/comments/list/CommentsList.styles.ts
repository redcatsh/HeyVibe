import styled from "@emotion/styled";
import { Rate } from "antd";
import { UserOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
/* COMMENTS LIST */

export const CommentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const CommentBoxWrapper = styled.div``;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #b9a49a;
`;

export const CbLeft = styled.div`
  margin-right: 15px;
  & > img {
    width: 80%;
  }
  padding: 10px 0;
`;

export const CbRight = styled.div`
  width: 100%;
`;

export const CbrTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CbrtLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.h5`
  margin: 0;
  font-size: 16px;
  font-family: "Leferi-reg";
  margin-right: 20px;
`;

export const CbrtRight = styled.div`
  display: block;
`;

export const CbrMid = styled.p`
  display: block;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const CbrBot = styled.p`
  color: #605149;
  font-size: 13px;
  margin: 0;
  text-align: right;
`;

export const Delete = styled(CloseOutlined)`
  cursor: pointer;
  color: #867269;
  & > svg {
    font-size: 20px;
  }
`;

export const Edit = styled(EditOutlined)`
  cursor: pointer;
  color: #867269;
  margin-right: 15px;
  & > svg {
    font-size: 20px;
  }
`;

export const MyRating = styled(Rate)`
  color: #dee85c;
`;

export const PasswordModal = styled.div``;
export const PasswordInput = styled.input``;

export const UserIcon = styled(UserOutlined)`
  color: #867269;
  & > svg {
    font-size: 40px;
    border: 2px solid #867269;
    border-radius: 50%;
    padding: 5px 6px 5px 6px;
  }
`;
