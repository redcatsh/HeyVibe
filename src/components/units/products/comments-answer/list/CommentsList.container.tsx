import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import { writer } from "repl";
import CommentsListUI from "./CommentsList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./CommentsList.queries";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

export default function ProductQuestionList(props) {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.el._id),
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const onClickDelete = async (ev) => {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: ev.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
          variables: {
            useditemQuestionId: String(props.el._id),
            page: Number(router.query.page),
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
