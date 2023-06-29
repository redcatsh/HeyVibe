import * as S from "./BoardDetail.styles";
import ReactPlayer from "react-player";

import { getDate } from "../../../../commons/library/utils";
import { Tooltip } from "antd";
import Dompurify from "dompurify";
import { AnyObject } from "yup/lib/types";
export default function BoardDetailUI(props: any) {
  return (
    <S.WrapperBox>
      <S.Wrapper>
        <S.BoardInfo>
          <S.BiLeft>
            <S.UserImg>
              <S.User />
            </S.UserImg>
            <S.UserInfo>
              <S.UserName>{props.data?.fetchBoard.writer}</S.UserName>
              <S.CreateDate>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreateDate>
            </S.UserInfo>
          </S.BiLeft>
          {/* <S.BiRight>
            <S.LinkIcon />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} 
              ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
            >
              <S.LocationIcon />
            </Tooltip>
          </S.BiRight> */}
        </S.BoardInfo>
        <S.BoardBody>
          <S.BoardThumbnail>
            <img
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.style.display = "none";
              }}
            />
          </S.BoardThumbnail>
          <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>

          {typeof window !== "undefined" && (
            <S.BoardContents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
              }}
            ></S.BoardContents>
          )}
          {props.data?.fetchBoard.youtubeUrl && (
            <ReactPlayer
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
        </S.BoardBody>
        <S.BoardLikes>
          <S.BLike>
            <S.LikeIcon
              id={props.data?.fetchBoard._id}
              onClick={props.onClickCountUp}
            />
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.BLike>
          <S.BDislike>
            <S.DislikeIcon
              id={props.data?.fetchBoard._id}
              onClick={props.onClickCountDown}
            />
            <S.DislikeCount>
              {props.data?.fetchBoard.dislikeCount}
            </S.DislikeCount>
          </S.BDislike>
        </S.BoardLikes>
      </S.Wrapper>
      <S.ButtonBox>
        <S.Button onClick={props.onClickToList}>Go to List</S.Button>
        <S.Button onClick={props.onClickToEdit}>Edit</S.Button>
        <S.Button id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>
          Delete
        </S.Button>
      </S.ButtonBox>
    </S.WrapperBox>
  );
}
