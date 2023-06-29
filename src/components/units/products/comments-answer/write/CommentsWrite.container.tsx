import { MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Rate } from "antd";

import CommentsWriteUI from "./CommentsWrite.presenter";
import { CREATE_USEDITEM_QUESTION_ANSWER } from "./CommentsWrite.queries";
import { FETCH_USEDITEM_QUESTIONS_ANSWERS } from "../list/CommentsList.queries";
import { UPDATE_USEDITEM_QUESTION_ANSWER } from "./CommentsWrite.queries";
import { Modal } from "antd";

export default function ProductQuestionAnswer(props: any) {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const [isOpen, setIsOpen] = useState(false);

  const onClickWrite = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      onClickSuccess();
      props.setIsAnswer(false);
    } catch (error) {
      Modal.error({ content: "다시 확인해주세요." });
    }
    setContents("");
  };

  // function onChangeUser(event) {
  //   setUser(event.target.value);
  // }
  function onChangeContents(event: MouseEvent<HTMLTextAreaElement>) {
    setContents((event.target as HTMLTextAreaElement).value);
  }

  function checkComment() {
    if (String(contents).length === 0) {
      onClickError();
      return;
    }

    if (contents) {
      onClickWrite();
    }
  }

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const commentUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다");
      return;
    }
    try {
      if (!props.el?._id) return;
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionInput: { contents: contents },
          useditemQuestionAnswerId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: String(props.el._id) },
          },
        ],
      });
      onClickUpdateComment();
      props.setIsEdit?.(false);
    } catch (error) {
      Modal.error({ content: "다시 확인해주세요." });
    }
  };

  // const handleChange = (value: number) => {
  //   setStar(value);
  // };

  const onClickSuccess = () => {
    // Modal.success({
    //   content: "댓글이 등록되었습니다!",
    // });
  };

  const onClickUpdateComment = () => {
    Modal.success({
      content: "댓글 수정이 등록되었습니다!",
    });
  };

  const onClickError = () => {
    Modal.error({
      content: "항목을 입력해주세요!",
    });
  };

  return (
    <CommentsWriteUI
      // ocbUser={onChangeUser}
      ocbContents={onChangeContents}
      onClickWrite={onClickWrite}
      checkComment={checkComment}
      commentUpdate={commentUpdate}
      contents={contents}
      data={props.data}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      isAnswer={props.isAnswer}
      setIsAnswer={props.setIsAnswer}
      el={props.el}
      // handleChange={handleChange}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpen={isOpen}
    />
  );
}
