import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 300px;
`;
const Image = styled.img``;
const SlideBox = styled.div`
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
  }
`;
const H2 = styled.h2`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: "Poppins";
  font-size: 50px;
  font-weight: 100;
  color: #fff;
`;

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 30px;
  }
  .slick-prev {
    left: 30px;
    z-index: 9;
  }
  .slick-next {
    right: 30px;
    z-index: 9;
  }
  .slick-slide img {
    margin: 0 auto;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .slick-dots {
    bottom: 20px;
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Wrapper>
        <StyledSlider {...settings}>
          <SlideBox>
            <Image src="/music1.jpg" alt="" />
            <H2>Recommend Your Music</H2>
          </SlideBox>
          <SlideBox>
            <Image src="/music2.jpg" alt="" />
            <H2>Gallery</H2>
          </SlideBox>
          <SlideBox>
            <Image src="/music3.jpg" alt="" />
            <H2>Community</H2>
          </SlideBox>
        </StyledSlider>
      </Wrapper>
    );
  }
}
