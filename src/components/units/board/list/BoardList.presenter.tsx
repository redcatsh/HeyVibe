import * as S from "./BoardList.styles";
import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import { getDate } from "../../../../commons/library/utils";
import Dompurify from "dompurify";
import { MouseEvent } from "react";

interface IList {
  _id: string;
  images: string;
  title: string;
  contents: string;
  writer: string;
  createdAt: string;
  likeCount: string;
}

export default function BoardListUI(props: any) {
  return (
    <>
      <S.ListWrap>
        <S.TitleBox>
          <S.Title>Share Your Vibe</S.Title>
          <p>Share your music and video clips.</p>
        </S.TitleBox>
      </S.ListWrap>
      <S.RegBtnWrap>
        <S.Search
          type="text"
          placeholder="Search"
          onChange={props.onChangeSearch}
        />
        <S.GoRegister onClick={props.onClickToWrite}>Go to Post</S.GoRegister>
      </S.RegBtnWrap>
      <S.TableWrapper>
        <S.CardWrap>
          {props.data?.fetchBoards.map((el: IList, index: number) => (
            <S.Card key={el._id}>
              <S.CardLeft id={el._id} onClick={props.onClickToDetail}>
                <img
                  id={el._id}
                  src={`https://storage.googleapis.com/${el.images}`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/music5.jpg";
                  }}
                />
              </S.CardLeft>
              <S.CardRight>
                <S.CardTop>
                  <S.CardTitle id={el._id} onClick={props.onClickToDetail}>
                    {el.title
                      .replaceAll(
                        props.keyword,
                        `${props.mySecretCode}${props.keyword}${props.mySecretCode}`
                      )
                      .split(props.mySecretCode)}
                  </S.CardTitle>
                  {typeof window !== "undefined" && (
                    <S.CardContents
                      id={el._id}
                      onClick={props.onClickToDetail}
                      dangerouslySetInnerHTML={{
                        __html: el.contents.replace(/(<([^>]+)>)/gi, ""),
                      }}
                    ></S.CardContents>
                  )}
                </S.CardTop>
                <S.CardBottom>
                  <S.CardBottomLeft>
                    <S.UserBox>
                      <S.User />
                      <S.CardWriter>{el.writer}</S.CardWriter>
                    </S.UserBox>

                    <S.CardDate>{getDate(el.createdAt)}</S.CardDate>
                  </S.CardBottomLeft>
                  <S.BoardLikes>
                    <S.BLike>
                      <S.LikeIcon id={el._id} />
                      <S.LikeCount>{el.likeCount}</S.LikeCount>
                    </S.BLike>
                  </S.BoardLikes>
                </S.CardBottom>
              </S.CardRight>
            </S.Card>
          ))}
        </S.CardWrap>

        <Pagination01 refetch={props.refetch} count={props.count} />
      </S.TableWrapper>
    </>
  );
}
