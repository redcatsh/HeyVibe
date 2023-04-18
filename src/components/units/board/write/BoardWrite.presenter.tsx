import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log(props?.data);
  return (
    <S.AllWrapper>
      <S.WriteBg>
        <h1>Write Story</h1>
      </S.WriteBg>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "Edit" : "Posting"}</S.Title>
        <S.FormWrap>
          <S.HalfBox>
            <S.HiBox>
              <S.InputTitle>작성자</S.InputTitle>
              <S.HalfInput
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.ocName}
                defaultValue={props.data?.fetchBoard.writer}
              />
              <S.Error>{props.nameEr}</S.Error>
            </S.HiBox>
            <S.HiBox>
              <S.InputTitle>비밀번호</S.InputTitle>
              <S.HalfInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.ocPassword}
                defaultValue={props.data?.fetchBoard.password}
              />
              <S.Error>{props.pwCheckEr}</S.Error>
            </S.HiBox>
          </S.HalfBox>
          <S.InputWrap>
            <S.InputTitle>제목</S.InputTitle>
            <S.WidInput
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.ocTitle}
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.titleEr}</S.Error>
          </S.InputWrap>
          <S.ContentWrap>
            <S.InputTitle>내용</S.InputTitle>
            <S.ContentArea
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={props.ocContents}
              defaultValue={props.data?.fetchBoard.contents}
            ></S.ContentArea>
            <S.Error>{props.contentsEr}</S.Error>
          </S.ContentWrap>
          {/* <S.InputWrap>
            <S.InputTitle>주소</S.InputTitle>
            <S.AddBox>
              <S.AddrInput
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
                }
                onClick={props.onToggleModal}
              />
              <S.AddButton onClick={props.onToggleModal}>
                우편번호 검색
              </S.AddButton>
            </S.AddBox>
            <S.Error>{props.addressEr}</S.Error>
            <S.AddWidInput
              readOnly
              type="text"
              onChange={props.ocAddress}
              value={
                props.address ||
                (props.data?.fetchBoard.boardAddress?.address ?? "")
              }
            />
            <S.AddWidInput
              type="text"
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            />
            {props.isModalOpen && (
              <Modal
                open={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <DaumPostcodeEmbed onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.InputWrap> */}
          <S.InputWrap>
            <S.InputTitle>유튜브</S.InputTitle>
            <S.WidInput
              type="text"
              placeholder="링크를 입력하세요."
              onChange={props.ocYoutubeUrl}
              defaultValue={props.data?.fetchBoard.youtubeUrl}
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>썸네일</S.InputTitle>
            <S.PhotoBox>
              {props.imageUrl ? (
                <S.UploadImage
                  src={`https://storage.googleapis.com/${props.imageUrl}`}
                  onClick={props.onClickUpload}
                />
              ) : (
                <S.GbButton onClick={props.onClickUpload}>+</S.GbButton>
              )}

              <S.UploadHidden
                type="file"
                id="upload"
                onChange={props.ocFile}
                ref={props.fileRef}
              ></S.UploadHidden>
            </S.PhotoBox>
          </S.InputWrap>
          {/* <S.InputWrap>
            <S.InputTitle>메인 설정</S.InputTitle>
            <S.RadioWrap>
              <S.RadioBox>
                <S.RadInput type="radio" name="main" />
                유튜브
              </S.RadioBox>
              <S.RadioBox>
                <S.RadInput type="radio" name="main" />
                사진
              </S.RadioBox>
            </S.RadioWrap>
          </S.InputWrap> */}
          <S.SubmitWrap>
            <S.SubmitBtn
              onClick={props.isEdit ? props.onClickUpdate : props.ocCheck}
              isActive={props.isEdit ? true : props.isActive}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.SubmitBtn>
          </S.SubmitWrap>
        </S.FormWrap>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
