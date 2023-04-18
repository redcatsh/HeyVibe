import React, { Dispatch, Fragment, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "@emotion/styled";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const SwiperWrapper = styled(Swiper)`
  height: 72vh;
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    color: white;
    transform: scale(0.5);
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
    color: white;
    transform: scale(0.5);
  }
  .swiper-slide,
  .swiper-slide.swiper-slide-thumb-active.swiper-slide-visible.swiper-slide-active {
    height: auto;
  }
`;

const ShowedSwiperWrapper = styled.div`
  width: 45%;
  .swiper-slide {
    margin-bottom: 15px;
    cursor: pointer;
  }
  & img {
    object-fit: cover;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SubImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

export default function SwiperImg() {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });
  const ProductImages = data?.fetchUseditem.images;
  return (
    <ShowedSwiperWrapper>
      <SwiperWrapper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {ProductImages?.filter((el: string) => el).map((el: string, idx) => (
          <SwiperSlide>
            <MainImg key={idx} src={`https://storage.googleapis.com/${el}`} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <Swiper
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={15}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {ProductImages?.filter((el: string) => el).map((el: string, idx) => (
          <SwiperSlide>
            <SubImg key={idx} src={`https://storage.googleapis.com/${el}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ShowedSwiperWrapper>
  );
}
