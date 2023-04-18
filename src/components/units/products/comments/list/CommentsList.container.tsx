import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import { writer } from "repl";
import CommentsListUI from "./CommentsList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./CommentsList.queries";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../../detail/ProductDetail.queries";

export default function BoardCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const onClickDelete = async (ev) => {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: ev.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: {
            useditemId: String(router.query.productId),
            page: Number(router.query.page),
          },
        },
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: String(router.query.productId),
          },
        },
      ],
    });
    onClickSuccess();
  };

  const onClickSuccess = () => {
    Modal.success({
      content: "댓글이 삭제되었습니다!",
    });
  };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };

  // const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
  //   setUseditemQuestionId(event.currentTarget.id);

  // };

  return (
    <CommentsListUI
      data={data}
      onClickDelete={onClickDelete}
      // isOpen={isOpen}
      // onClickOpenDeleteModal={onClickOpenDeleteModal}
      // handleCancel={handleCancel}
      fetchMore={fetchMore}
    />
  );
}
