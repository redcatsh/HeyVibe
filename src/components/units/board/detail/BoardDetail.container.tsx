import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { Modal } from "antd";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { DELETE_BOARD } from "./BoardDetail.queries";
import { LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

import { FETCH_BOARDS } from "../list/BoardList.queries";
import { MouseEvent, useState } from "react";
export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onClickToList = () => {
    void router.push("/board");
  };

  const onClickToEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`);
  };

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (ev: MouseEvent<HTMLElement>) => {
    await deleteBoard({
      variables: {
        boardId: (ev.target as HTMLElement).id,
      },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
    onClickSuccess();
    router.push("/board");
  };

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물이 삭제되었습니다!",
    });
  };

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

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

  return (
    <BoardDetailUI
      data={data}
      onClickToList={onClickToList}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
      onClickCountUp={onClickCountUp}
      onClickCountDown={onClickCountDown}
    />
  );
}
