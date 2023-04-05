import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import { writer } from "repl";
import CommentsListUI from "./CommentsList.presenter";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentsList.queries";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [BoardCommentId, setBoardCommentId] = useState("");

  // const { data } = useQuery(FETCH_COMMENTS, {
  //   variables: {
  //     boardId: String(router.query.boardId),
  //   },
  // });

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const onClickDelete = async (ev) => {
    await deleteBoardComment({
      variables: {
        boardCommentId: BoardCommentId,
        password: password,
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: {
            boardId: router.query.boardId,
            page: Number(router.query.page),
          },
        },
      ],
    });
    setIsOpen(false);
    onClickSuccess();

    // router.push(`/board/${router.query.boardId}`);
  };

  function onChangeDeletePassword(ev) {
    setPassword(ev.target.value);
  }

  const onClickSuccess = () => {
    Modal.success({
      content: "댓글이 삭제되었습니다!",
    });
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpen(true);
  };

  return (
    <CommentsListUI
      data={data}
      onClickDelete={onClickDelete}
      onChangeDeletePassword={onChangeDeletePassword}
      isOpen={isOpen}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      handleCancel={handleCancel}
      fetchMore={fetchMore}
    />
  );
}
