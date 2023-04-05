import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Rate } from "antd";

import CommentsWriteUI from "./CommentsWrite.presenter";
import { CREATE_COMMENT } from "./CommentsWrite.queries";
import { FETCH_COMMENTS } from "../list/CommentsList.queries";
import { UPDATE_COMMENT } from "./CommentsWrite.queries";
import { Modal } from "antd";

export default function BoardCommentWrite(props: any) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);

  const [isOpen, setIsOpen] = useState(false);
  const [star, setStar] = useState(0);

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: star,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      // router.push(`/board/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
    setWriter("");
    setPassword("");
    setContents("");
    setStar(0);
  };

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function checkComment() {
    if (
      String(writer).length === 0 ||
      String(password).length === 0 ||
      String(contents).length === 0
    ) {
      onClickError();
    }

    if (writer && password && contents) {
      onClickSuccess();
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
    console.log("작동중");
    if (!contents) {
      alert("내용이 수정되지 않았습니다");
      return;
    }
    if (!password) {
      showModal();
      return;
    }
    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: contents },
          password: password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      onClickUpdateComment();
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (value: number) => {
    setStar(value);
  };

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
      ocbWriter={onChangeWriter}
      ocbPassword={onChangePassword}
      ocbContents={onChangeContents}
      onClickWrite={onClickWrite}
      checkComment={checkComment}
      commentUpdate={commentUpdate}
      contents={contents}
      data={props.data}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      el={props.el}
      handleChange={handleChange}
      star={star}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpen={isOpen}
      writer={writer}
      password={password}
    />
  );
}
