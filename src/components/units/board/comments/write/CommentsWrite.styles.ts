import styled from "@emotion/styled";
import { MessageOutlined } from "@ant-design/icons";
import { Rate } from "antd";
/* COMMENTS WRITE */

export const CommentWrite = styled.div`
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const CommentWrapper = styled.div`
  display: block;
`;

export const CommentTitle = styled.h5`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  & > img {
    margin-right: 10px;
  }
  margin-bottom: 30px;
`;
export const WriterPass = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const Writer = styled.input`
  padding: 15px;
  margin-right: 10px;
  border: 1px solid #97837a;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #97837a;
  }
`;
export const Password = styled.input`
  padding: 15px;
  margin-right: 10px;
  border: 1px solid #97837a;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #97837a;
  }
`;

export const CommentWriteBox = styled.div`
  border: 0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #97837a;
  display: block;
  border-bottom-color: #97837a;
  padding: 15px;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #97837a;
  }
`;

export const TextareaWrap = styled.div`
  display: block;
`;
export const CommentboxBottom = styled.div`
  border: 1px solid #97837a;
  border-top-color: transparent;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
`;

export const CountCom = styled.div`
  display: block;
`;

export const Counts = styled.p`
  padding: 15px 0;
  margin: 0;
  color: #97837a;
`;

export const CommentBtn = styled.button`
  background-color: #867269;
  color: #f2f2f2;
  border: 0;
  margin: 0;
  padding: 0 15px;
  cursor: pointer;
`;
export const MyRating = styled(Rate)`
  color: #dee85c;
`;
export const CommentIcon = styled(MessageOutlined)`
  color: #867269;
  margin-right: 10px;
  & > svg {
    font-size: 25px;
  }
`;
