import { useQuery, useMutation } from "@apollo/client";
import { useRef, useState, ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import {
  LIKE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
} from "../detail/BoardDetail.queries";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import defaultImg from "../../../../../public/music1.jpg";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export default function BoardList() {
  const router = useRouter();

  const onClickToWrite = (ev: MouseEvent<HTMLButtonElement>) => {
    router.push(`/board/new/${(ev.target as HTMLButtonElement).id}`);
  };
  const onClickToDetail = (ev: MouseEvent<HTMLElement>) => {
    router.push(`/board/${(ev.target as HTMLElement).id}`);
  };

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

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

  const onClickCountUp = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  const onClickCountDown = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  const onDefaultImg = (event: any) => {
    event.target.src = defaultImg;
  };

  //PAGINATION

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음
  console.log(data?.fetchBoards);
  console.log("======="); // 데이터가 두 번 실행되는 것을 보여주기 위해 콘솔을 넣음

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      onClickToDetail={onClickToDetail}
      onClickToWrite={onClickToWrite}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickCountUp={onClickCountUp}
      onClickCountDown={onClickCountDown}
      onDefaultImg={onDefaultImg}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      mySecretCode={mySecretCode}
    />
  );
}
