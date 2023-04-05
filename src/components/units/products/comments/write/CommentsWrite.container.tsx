import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Rate } from "antd";

import CommentsWriteUI from "./CommentsWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./CommentsWrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../list/CommentsList.queries";
import { UPDATE_USEDITEM_QUESTION } from "./CommentsWrite.queries";
import { Modal } from "antd";

export default function BoardCommentWrite(props: any) {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const [isOpen, setIsOpen] = useState(false);

  const onClickWrite = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      onClickSuccess();
    } catch (error) {
      alert(error.message);
    }
    setContents("");
  };

  // function onChangeUser(event) {
  //   setUser(event.target.value);
  // }
  function onChangeContents(event) {
    setContents(event.target.value);
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
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents: contents },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      onClickUpdateComment();
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  // const handleChange = (value: number) => {
  //   setStar(value);
  // };

  const onClickSuccess = () => {
    Modal.success({
      content: "댓글이 등록되었습니다!",
    });
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
      el={props.el}
      // handleChange={handleChange}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpen={isOpen}
    />
  );
}
