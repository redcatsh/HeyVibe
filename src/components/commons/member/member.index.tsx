import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./member.styles";
import {
  CREATE_POINT_TRANS_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./member.queries";
import { Modal } from "antd";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import { useMutation, useQuery } from "@apollo/client";

declare global {
  interface Window {
    IMP: any;
  }
}

export default function MemberInfo() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log({ data });
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  //   const router = useRouter();
  //   const handleCancel = () => {
  //     setIsOpen(false);
  //   };

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANS_LOADING
  );
  const onClickPayment = (data: any) => {
    // setIsOpen(true);
    console.log(data);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "노르웨이 회전 의자",
        amount: data.pay,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28/complete", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // router.push("/28/payment/complete");

          //   const paymentDate = new Date(); // 프론트엔드에서 시간을 만드는 것은 안됨!
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading
          try {
            createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            console.log(data);
            Modal.success({ content: "포인트가 충전되었습니다!" });
          } catch (error) {
            Modal.error({
              content: "결제에 실패했습니다! 다시 시도해 주세요!",
            });
          }
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {/* {isOpen && (
        <Modal visible={true} onOk={onClickPayment} onCancel={handleCancel}>
          <S.ChargePoint
            type="text"
            placeholder="충전할 금액"
            {...register("pay")}
          />
        </Modal>
      )} */}
      <S.Wrapper>
        <S.H1>My Page</S.H1>
        <S.Inner>
          <S.Left>
            <S.UserImage>
              <S.User />
            </S.UserImage>
            <S.UserInfo>
              <S.UserName>{data?.fetchUserLoggedIn.name}</S.UserName>
              <S.UserJoinDate>
                {data?.fetchUserLoggedIn.createdAt}
              </S.UserJoinDate>
            </S.UserInfo>
          </S.Left>
          <S.Right>
            <S.UserPoint>
              <S.H5>포인트</S.H5>
              <S.H3>{data?.fetchUserLoggedIn.userPoint?.amount}</S.H3>
            </S.UserPoint>
            <S.ChargePoint
              type="text"
              placeholder="충전할 금액"
              {...register("pay")}
            />
            <S.Button onClick={handleSubmit(onClickPayment)}>
              포인트 충전하기
            </S.Button>
          </S.Right>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
