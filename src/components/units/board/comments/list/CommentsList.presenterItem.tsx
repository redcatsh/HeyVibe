import * as S from "./CommentsList.styles";
import { useState } from "react";

import { getDate } from "../../../../../commons/library/utils";
import { Password } from "../write/CommentsWrite.styles";
import BoardCommentWrite from "../write/CommentsWrite.container";
import { UserOutlined } from "@ant-design/icons";

export default function CommentsListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const moveToEdit = () => {
    setIsEdit(true);
  };
  console.log(props);
  return (
    <>
      {isEdit === false && (
        <S.CommentWrapper>
          <S.CommentBoxWrapper>
            <S.CommentBox>
              <S.CbLeft>
                <S.UserIcon />
              </S.CbLeft>
              <S.CbRight>
                <S.CbrTop>
                  <S.CbrtLeft>
                    <S.UserName>{props.el?.writer}</S.UserName>
                    <S.MyRating disabled value={props.el?.rating} />
                    {/* <Password
                      type="password"
                      placeholder="비밀번호"
                      onChange={props.onChangeDeletePassword}
                    /> */}
                  </S.CbrtLeft>
                  <S.CbrtRight>
                    <S.Edit onClick={moveToEdit} />
                    <S.Delete
                      id={props.el._id}
                      onClick={props.onClickOpenDeleteModal}
                    />
                  </S.CbrtRight>
                </S.CbrTop>
                <S.CbrMid>{props.el?.contents}</S.CbrMid>
                <S.CbrBot>{getDate(props.el?.createdAt)}</S.CbrBot>
              </S.CbRight>
            </S.CommentBox>
          </S.CommentBoxWrapper>
        </S.CommentWrapper>
      )}
      {isEdit === true && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
