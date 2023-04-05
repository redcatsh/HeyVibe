import * as S from "../../../../components/units/products/list/ProductList.styles";
import Pagination01 from "../../../../components/commons/pagination/01/Pagination01.container";
import { getDate } from "../../../../commons/library/utils";
import { useMutation, useQuery } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import InfiniteScrollPage from "../../../../components/commons/infinite-scroll-product/InfiniteScroll.container";
import {
  Board,
  IQuery,
  IQueryFetchUseditemsArgs,
  Mutation,
  MutationToggleUseditemPickArgs,
  Useditem,
} from "../../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
} from "../../../../components/units/products/list/ProductList.queries";
import Dompurify from "dompurify";
import defaultImg from "../../../../../public/music1.jpg";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";

export default function ProductList() {
  const router = useRouter();

  const onClickToWrite = (ev) => {
    router.push(`/products/new/${ev.target.id}`);
  };
  const onClickToDetail = (ev) => {
    router.push(`/products/${ev.target.id}`);
  };
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, "toggleUseditemPick">,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);
  const onClickPickToggle = async (ev) => {
    await toggleUseditemPick({
      variables: {
        useditemId: ev.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
          variables: {
            useditemId: ev.currentTarget.id,
          },
        },
      ],
    });
  };

  // 검색창
  const [keyword, setKeyword] = useState("");
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };
  const mySecretCode = uuidv4();

  const onDefaultImg = (event) => {
    event.target.src = defaultImg;
  };

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data);
  return (
    <>
      <S.ListWrap>
        <S.TitleBox>
          <S.Title>Products List</S.Title>
          <p>Share your music and video clips.</p>
        </S.TitleBox>
      </S.ListWrap>
      <S.RegBtnWrap>
        <S.Search type="text" placeholder="Search" onChange={onChangeSearch} />
        <S.GoRegister onClick={onClickToWrite}>Go to Post</S.GoRegister>
      </S.RegBtnWrap>
      <S.TableWrapper>
        <InfiniteScrollPage fetchMore={fetchMore} data={data}>
          <S.CardWrap>
            {data?.fetchUseditems.map((el, index) => (
              <S.Card key={el._id}>
                <S.CardLeft id={el._id} onClick={onClickToDetail}>
                  <img
                    id={el._id}
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/music5.jpg";
                    }}
                  />
                </S.CardLeft>
                <S.CardRight>
                  <S.CardTop>
                    <S.TopRight>
                      <S.CardTitle id={el._id} onClick={onClickToDetail}>
                        {el.name
                          .replaceAll(
                            keyword,
                            `${mySecretCode}${keyword}${mySecretCode}`
                          )
                          .split(mySecretCode)}
                      </S.CardTitle>
                      <S.BoardLikes>
                        <S.BLike>
                          <S.LikeIcon id={el._id} onClick={onClickPickToggle} />

                          <S.LikeCount>{el.pickedCount}</S.LikeCount>
                        </S.BLike>
                      </S.BoardLikes>
                    </S.TopRight>

                    {typeof window !== "undefined" && (
                      <S.CardContents
                        id={el._id}
                        onClick={onClickToDetail}
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
                        <S.CardWriter>{el.remarks}</S.CardWriter>
                      </S.UserBox>

                      <S.CardDate>{getDate(el.createdAt)}</S.CardDate>
                    </S.CardBottomLeft>
                    <S.Price>{el.price}원</S.Price>
                  </S.CardBottom>
                </S.CardRight>
              </S.Card>
            ))}
          </S.CardWrap>
        </InfiniteScrollPage>
      </S.TableWrapper>
    </>
  );
}
