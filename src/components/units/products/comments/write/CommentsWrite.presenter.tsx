import * as S from "./CommentsWrite.styles";
import { Modal } from "antd";
import CommentsListUIItem from "../list/CommentsList.presenterItem";
import { Rate } from "antd";

export default function CommentsWriteUI(props: any) {
  return (
    <S.CommentWrite>
      <S.CommentTitle>
        <S.CommentIcon />
        {props.isEdit ? "" : "Comments"}
      </S.CommentTitle>
      <S.CommentWriteBox>
        <S.TextareaWrap>
          <S.Textarea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.ocbContents}
            value={
              props.isEdit
                ? props.contents || props.el?.contents
                : props.contents
            }
          ></S.Textarea>
          <S.CommentboxBottom>
            <S.CountCom>
              <S.Counts>{props.contents.length}/100</S.Counts>
            </S.CountCom>
            <S.CommentBtn
              onClick={props.isEdit ? props.commentUpdate : props.checkComment}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.CommentBtn>
          </S.CommentboxBottom>
        </S.TextareaWrap>
      </S.CommentWriteBox>
    </S.CommentWrite>
  );
}
