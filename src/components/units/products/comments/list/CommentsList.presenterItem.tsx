import * as S from "./CommentsList.styles";
import { useState } from "react";

import { getDate } from "../../../../../commons/library/utils";
import BoardCommentWrite from "../write/CommentsWrite.container";
import ProductQuestionAnswer from "../../comments-answer/write/CommentsWrite.container";

import { UserOutlined } from "@ant-design/icons";
import ProductQuestionList from "../../comments-answer/list/CommentsList.container";

export default function CommentsListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const moveToEdit = () => {
    setIsEdit(true);
  };

  const moveToAnswer = () => {
    setIsAnswer(true);
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
                    <S.UserName>{props.el?.user.name}</S.UserName>
                    {/* <Password
                      type="password"
                      placeholder="비밀번호"
                      onChange={props.onChangeDeletePassword}
                    /> */}
                  </S.CbrtLeft>
                  <S.CbrtRight>
                    <S.Edit onClick={moveToEdit} />
                    <S.Delete id={props.el._id} onClick={props.onClickDelete} />
                  </S.CbrtRight>
                </S.CbrTop>
                <S.CbrMid>{props.el?.contents}</S.CbrMid>
                <S.AnBox>
                  <S.Answer onClick={moveToAnswer}>답글 달기</S.Answer>
                  <S.CbrBot>{getDate(props.el?.createdAt)}</S.CbrBot>
                </S.AnBox>
              </S.CbRight>
            </S.CommentBox>
            {isAnswer === true && (
              <ProductQuestionAnswer
                isAnswer={isAnswer}
                setIsAnswer={setIsAnswer}
                el={props.el}
              />
            )}
            <ProductQuestionList el={props.el} />
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
