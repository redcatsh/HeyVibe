import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useQuerytFetchBoards";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  Mutation,
  MutationCreateBoardArgs,
  MutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Modal } from "antd";
import { checkValidationFile } from "../../../../commons/library/validationFile";

export default function RegisterBoardPage(props: IBoardWriteProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [images, setImages] = useState("");
  const [nameError, setNameError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");

  const [createBoard] = useMutation<
    Pick<Mutation, "createBoard">,
    MutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<Mutation, "updateBoard">,
    MutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const myBoard = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: password,
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl,
            images: [imageUrl],
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      console.log(images);
      router.push(`/board/${myBoard.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: "다시 한번 확인해주세요." });
    }
  };

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (name && event.target.value && title && contents && address) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (name && password && event.target.value && contents && address) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
    if (name && password && title && event.target.value && address) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
    if (name && password && title && contents && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }
  function onChangeImages(event: ChangeEvent<HTMLInputElement>) {
    setImages(event.target.value);
  }

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물이 등록되었습니다!",
    });
  };

  function onClickCheck() {
    if (String(name).length === 0) {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
      // onClickSubmit();
    }

    if (String(password).length < 4 || String(password).length > 8) {
      setPwCheckError("4~8자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    } else {
      setPwCheckError("");
    }

    if (String(title).length === 0) {
      setTitleError("제목을 입력하세요.");
    } else {
      setTitleError("");
    }

    if (String(contents).length === 0) {
      setContentsError("내용을 입력하세요.");
    } else {
      setContentsError("");
    }

    if (name && password && title && contents) {
      onClickSuccess();
      onClickSubmit();
    }
  }

  // UPLOAD FILE
  const fileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUrl(props.data?.fetchBoard.images);
    }
  }, [props.data]);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickUpdate = async () => {
    const myvariables = {
      boardId: router.query.boardId,
      password: password,
      images: [imageUrl],
      updateBoardInput: {
        boardAddress: {
          zipcode,
          address,
          addressDetail,
        },
      },
    };
    const currentFile = JSON.stringify(imageUrl);
    const defaultFile = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFile = currentFile !== defaultFile;
    if (isChangedFile) myvariables.updateBoardInput.images = imageUrl;

    if (title) myvariables.updateBoardInput.title = title;
    if (contents) myvariables.updateBoardInput.contents = contents;
    if (youtubeUrl) myvariables.updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode) myvariables.updateBoardInput.boardAddress.zipcode = zipcode;
    if (address) myvariables.updateBoardInput.boardAddress.address = address;
    if (addressDetail)
      myvariables.updateBoardInput.boardAddress.addressDetail = addressDetail;
    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(`/board/${result.data?.updateBoard._id}`);
  };

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    onToggleModal();
  };

  return (
    <BoardWriteUI
      ocName={onChangeName}
      ocPassword={onChangePassword}
      ocTitle={onChangeTitle}
      ocContents={onChangeContents}
      ocAddress={onChangeAddress}
      ocYoutubeUrl={onChangeYoutubeUrl}
      ocFile={onChangeFile}
      ocCheck={onClickCheck}
      nameEr={nameError}
      titleEr={titleError}
      contentsEr={contentsError}
      pwCheckEr={pwCheckError}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      isActive={isActive}
      data={props.data}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      zipcode={zipcode}
      isModalOpen={isModalOpen}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      address={address}
      fileRef={fileRef}
      imageUrl={imageUrl}
      onClickUpload={onClickUpload}
    />
  );
}
