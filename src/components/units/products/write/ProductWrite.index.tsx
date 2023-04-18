import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../commons/library/product-validation";
import * as S from "../../../../components/units/products/write/ProductWrite.styles";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "../../../../components/units/products/write/ProductWrite.queries";
import { FETCH_USED_ITEMS } from "../list/ProductList.queries";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Mutation,
  MutationUpdateUseditemArgs,
  MutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import Map from "../../../commons/map";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
  ["link", "image", "video"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

export default function ProductWrite(props) {
  // TAG
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem(e.target.value);
    }
  };

  const submitTagItem = (value) => {
    let updatedTagList = [...tagList];
    updatedTagList.push(value);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };
  ////////////////

  const router = useRouter();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutation<
    Pick<Mutation, "uploadFile">,
    MutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, setValue, trigger, getValues, formState } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  const onClickSubmit = async (data) => {
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );
    console.log(results);
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: tagList,
            images: resultUrls,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
            variables: {
              useditemId: router.query.productId,
            },
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "게시물이 등록되었습니다!" });
      void router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result == "string") {
          console.log(event.target?.result);
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  const [updateUseditem] = useMutation<
    Pick<Mutation, "updateUseditem">,
    MutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const onClickUpdate = async (data) => {
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );
    console.log(results);
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    const myvariables = {
      useditemId: router.query.productId,
      updateUseditemInput: {
        name: data.name,
        remarks: data.remarks,
        contents: data.contents,
        price: data.price,
        tags: tagList,
        images: resultUrls,
        useditemAddress: {
          address: data.address,
        },
      },
    };

    if (data.name) myvariables.updateUseditemInput.name = data.name;
    if (data.remarks) myvariables.updateUseditemInput.remarks = data.remarks;
    if (data.contents) myvariables.updateUseditemInput.contents = data.contents;
    if (data.price) myvariables.updateUseditemInput.price = data.price;
    if (data.address)
      myvariables.updateUseditemInput.useditemAddress.address = data.address;
    const result = await updateUseditem({
      variables: myvariables,
    });
    router.push(`/products/${result.data?.updateUseditem._id}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    setValue("address", data.address);
    setValue("addressDetail", data.addressDetail);
    onToggleModal();
  };
  const Address = getValues("address");
  const AddressDetail = getValues("addressDetail");

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <S.AllWrapper>
      <S.WriteBg>
        <h1>{props.isEdit ? "상품 수정" : "상품 등록"}</h1>
      </S.WriteBg>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.FormWrap
          onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
        >
          <S.HalfBox>
            <S.HiBox>
              <S.InputTitle>상품명</S.InputTitle>
              <S.HalfInput
                type="text"
                placeholder="상품명을 입력해주세요."
                {...register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.HiBox>
            <S.HiBox>
              <S.InputTitle>가격</S.InputTitle>
              <S.HalfInput
                type="text"
                placeholder="가격을 입력해주세요."
                {...register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <S.Error>{formState.errors.price?.message}</S.Error>
            </S.HiBox>
          </S.HalfBox>
          <S.InputWrap>
            <S.InputTitle>태그</S.InputTitle>

            {/* ====TAG START==== */}
            <S.WholeBox>
              <S.TagBox>
                {tagList.map((tagItem, index) => {
                  return (
                    <S.TagItem key={index}>
                      <S.Text>{tagItem}</S.Text>
                      <S.Button type="button" onClick={deleteTagItem}>
                        X
                      </S.Button>
                    </S.TagItem>
                  );
                })}
                <S.TagInput
                  type="text"
                  placeholder="태그를 입력하고 엔터키를 누르세요."
                  tabIndex={2}
                  value={tagItem}
                  onChange={(e) => setTagItem(e.target.value)}
                  onKeyPress={onKeyPress}
                />
              </S.TagBox>
            </S.WholeBox>
            {/*=====END TAG===== */}
          </S.InputWrap>
          <S.ContentWrap>
            <S.InputTitle>상품 설명</S.InputTitle>
            <ReactQuill
              onChange={onChangeContents}
              defaultValue={props.data?.fetchUseditem.contents}
              style={{
                fontSize: "15px",
                border: "1px solid #97837a",
                padding: "10px",
                height: "480px",
              }}
              modules={modules}
              formats={formats}
            />
            <S.Error>{formState.errors.contents?.message}</S.Error>
          </S.ContentWrap>
          <S.InputWrap>
            <S.InputTitle>거래위치</S.InputTitle>
            <S.MapWrap>
              <Map Address={Address} />

              <S.Address>
                <div id="clickLatlng"></div>

                <S.WidInput
                  type="text"
                  placeholder="주소를 입력해주세요."
                  {...register("address")}
                  onClick={onToggleModal}
                  value={
                    (Address ||
                      props.data?.fetchUseditem.useditemAddress?.address) ??
                    ""
                  }
                />
                {/* <S.WidInput
                  type="text"
                  placeholder="상세주소를 입력해주세요."
                  {...register("addressDetail")}
                  value={
                    (AddressDetail ||
                      props.data?.fetchUseditem.useditemAddress
                        ?.addressDetail) ??
                    ""
                  }
                /> */}
                {isModalOpen && (
                  <Modal
                    open={true}
                    onOk={onToggleModal}
                    onCancel={onToggleModal}
                  >
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                  </Modal>
                )}
              </S.Address>
            </S.MapWrap>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>비고</S.InputTitle>
            <S.WidInput
              type="text"
              placeholder="비고를 입력해주세요."
              {...register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>상품사진</S.InputTitle>
            <S.PhotoWrap>
              <S.PhotoBox>
                <S.Upload
                  type="file"
                  id="upload"
                  onChange={onChangeFile(0)}
                ></S.Upload>

                {imageUrls[0] ? (
                  <S.UploadImage src={imageUrls[0]} />
                ) : (
                  <S.GbButton>+</S.GbButton>
                )}
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload
                  type="file"
                  id="upload"
                  onChange={onChangeFile(1)}
                ></S.Upload>
                {imageUrls[1] ? (
                  <S.UploadImage src={imageUrls[1]} />
                ) : (
                  <S.GbButton>+</S.GbButton>
                )}
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload
                  type="file"
                  id="upload"
                  onChange={onChangeFile(2)}
                ></S.Upload>
                {imageUrls[2] ? (
                  <S.UploadImage src={imageUrls[2]} />
                ) : (
                  <S.GbButton>+</S.GbButton>
                )}
              </S.PhotoBox>
            </S.PhotoWrap>
          </S.InputWrap>
          <S.SubmitWrap>
            <S.SubmitBtn>{props.isEdit ? "수정하기" : "등록하기"}</S.SubmitBtn>
          </S.SubmitWrap>
        </S.FormWrap>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
