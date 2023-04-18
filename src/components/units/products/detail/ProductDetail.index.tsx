import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./ProductDetail.styles";
import { Modal } from "antd";
import { getDate } from "../../../../commons/library/utils";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANS_BUY_SELL,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";
import Dompurify from "dompurify";
import SwiperImg from "./ProductSlider";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  Mutation,
  MutationDeleteUseditemArgs,
  MutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";
import Map from "../../../commons/map-detail";
import { useRouterPush } from "../../../commons/hooks/customs/useRouterPush";
import { useEffect } from "react";

export default function ProductDetail() {
  const router = useRouter();
  console.log(router.query.productId);

  const { data, error, loading } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const onClickToList = () => {
    router.push("/products");
  };

  const onClickToEdit = () => {
    router.push(`/products/${router.query.productId}/edit`);
  };

  const [deleteUseditem] = useMutation<
    Pick<Mutation, "deleteUseditem">,
    MutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANS_BUY_SELL
  );
  const onClickDelete = async () => {
    await deleteUseditem({
      variables: {
        useditemId: String(router.query.productId),
      },
      refetchQueries: [{ query: FETCH_USED_ITEM }],
    });
    onClickSuccess();
    router.push("/products");
  };

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물이 삭제되었습니다!",
    });
  };

  const onClickBuySuccess = () => {
    Modal.success({
      content: "구매가 완료되었습니다!",
    });
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.productId,
        },
      });
      onClickBuySuccess();
    } catch (error) {
      Modal.error({ content: "구매가 불가합니다." });
    }
  };

  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, "toggleUseditemPick">,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);
  const onClickPickToggle = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.productId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
  };

  // 최근 본 상품

  const { routerPush } = useRouterPush();

  useEffect(() => {
    if (loading) return;
    if (error?.message === "상품이 존재하지 않습니다.") {
      alert(error?.message);
      routerPush(`/`);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    if (error !== undefined) return;
    const todayList = data?.fetchUseditem;
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    const temp = baskets.filter((el: any) => el?._id === todayList?._id);
    if (temp.length === 1) return;
    if (baskets.length >= 3) {
      baskets.pop();
    }
    baskets.unshift(todayList);
    sessionStorage.setItem("baskets", JSON.stringify(baskets));
  }, [loading]);

  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.PrdBox>
            {/* <S.PrdImage>
              {data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.PrdImage> */}
            <SwiperImg />
            <S.PrdInfo>
              <S.PrdTop>
                <S.PrdName>{data?.fetchUseditem.name}</S.PrdName>
                <S.PrdLikes>
                  <S.MasterButton>
                    <S.GoEdit onClick={onClickToEdit}>상품수정</S.GoEdit>
                    <S.Delete
                      id={data?.fetchUseditem._id}
                      onClick={onClickDelete}
                    >
                      상품삭제
                    </S.Delete>
                  </S.MasterButton>
                  <S.BLike>
                    <S.LikeIcon onClick={onClickPickToggle} />
                    <S.LikeCount>{data?.fetchUseditem.pickedCount}</S.LikeCount>
                  </S.BLike>
                </S.PrdLikes>
              </S.PrdTop>

              <S.PrdInfoBox>
                <S.InfoList>
                  <S.InfoListBox>
                    <S.Label>상품 가격</S.Label>
                    <S.Price>
                      {data?.fetchUseditem.price}

                      <span>원</span>
                    </S.Price>
                  </S.InfoListBox>
                  <S.InfoListBox>
                    <S.Label>상품 요약</S.Label>
                    <S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
                  </S.InfoListBox>
                  <S.InfoListBox>
                    <S.Label>관련 태그</S.Label>
                    <S.Tags>
                      {data?.fetchUseditem.tags !== ""
                        ? data?.fetchUseditem.tags?.map(
                            (el: string, index: number) => (
                              <S.TagItem key={index}>#{el}</S.TagItem>
                            )
                          )
                        : ""}
                    </S.Tags>
                  </S.InfoListBox>
                  <S.InfoListBox>
                    <S.Label>상품등록일</S.Label>
                    <S.Date>{getDate(data?.fetchUseditem.createdAt)}</S.Date>
                  </S.InfoListBox>
                  <S.ButtonBox>
                    <S.GoBuy id={data?.fetchUseditem._id} onClick={onClickBuy}>
                      구매하기
                    </S.GoBuy>
                    <S.GoList onClick={onClickToList}>상품목록</S.GoList>
                  </S.ButtonBox>
                  <S.InfoContentsBox>
                    <S.Label>상품상세</S.Label>
                    {typeof window !== "undefined" && (
                      <S.Contents
                        dangerouslySetInnerHTML={{
                          __html: Dompurify.sanitize(
                            data?.fetchUseditem.contents
                          ),
                        }}
                      ></S.Contents>
                    )}
                  </S.InfoContentsBox>
                  <Map Address={data?.fetchUseditem.useditemAddress?.address} />
                  {/* <S.Map id="map" style={{ width: 500, height: 400 }}></S.Map> */}
                </S.InfoList>
              </S.PrdInfoBox>
            </S.PrdInfo>
          </S.PrdBox>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
