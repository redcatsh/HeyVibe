import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
const controlsProps = {
  style: {
    left: "50%",
    paddingTop: "10px",
    position: "fixed",
    transform: "translateX(-50%)",
  },
};

const slideDuration = {
  duration: 1200,
};

const btnStyles = {
  position: "fixed",
  padding: "8px",
};

const SlideTop = keyframes`
  0% {
  transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  70% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const InnerBox = styled.div`
  z-index: 2;
  max-width: 1600px;
  padding: 0 80px;
`;
const Box1 = styled.div`
  background-image: url(/listen1.jpg);
  height: 100vh;
  background-position: 50% 45%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Box2 = styled.div`
  background-image: url(/listen2.jpg);
  height: 100vh;
  background-position: 50% 45%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
const Box3 = styled.div`
  background-image: url(/music1.jpg);
  height: 100vh;
  background-position: 50% 45%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
const H1 = styled.h1`
  font-size: 60px;
  font-family: "Poppins";
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  z-index: 2;
`;
const P = styled.p`
  font-family: "Poppins";
  color: #fff;
  font-weight: 100;
  margin-bottom: 50px;
`;

const Link = styled.button`
  background-color: transparent;
  border: 1px solid #f2f2f2;
  outline: none;
  font-weight: 200;
  padding: 10px 30px;
  transition: all 0.3s;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #fff;
    background-color: #dee85c;
    color: #4e433d;
  }
`;

const Scroll = styled.div`
  display: block;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  z-index: 2;
`;

const Mouse = styled.img`
  filter: invert(0.8);
  width: 8%;
  margin-bottom: 10px;
  animation: ${SlideTop} 1.5s linear infinite both;
`;

const Stxt = styled.p`
  font-size: 15px;
  font-family: "Poppins";
  color: #f2f2f2;
`;

export default function FullPageExample() {
  const router = useRouter();

  const onClickToPlaylist = (ev) => {
    router.push(`/playlist`);
  };

  const onClickToBoard = (ev) => {
    router.push(`/board`);
  };

  const onClickToMarket = (ev) => {
    router.push(`/products`);
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <FullPage controls controlsProps={controlsProps} {...slideDuration}>
        <Scroll>
          <Mouse src="/mouse.png"></Mouse>
          <Stxt>SCROLL</Stxt>
        </Scroll>
        <Slide>
          <Box1>
            <InnerBox>
              <H1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Share your Vibe!
              </H1>
              <P data-aos="fade-right" data-aos-delay="300">
                Share your music and get recommendations.
              </P>
              <Link
                data-aos="fade-right"
                data-aos-delay="300"
                onClick={onClickToPlaylist}
              >
                Go to Playlist
              </Link>
            </InnerBox>
          </Box1>
        </Slide>

        <Slide>
          <Box2>
            <InnerBox>
              <H1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Share your Playlist!
              </H1>
              <P data-aos="fade-right" data-aos-delay="300">
                Share your playlist and get recommendations.
              </P>
              <Link
                data-aos="fade-right"
                data-aos-delay="300"
                onClick={onClickToBoard}
              >
                Go to Recommend Board
              </Link>
            </InnerBox>
          </Box2>
        </Slide>
        <Slide>
          <Box3>
            <InnerBox>
              <H1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Share your Stuffs!
              </H1>
              <P data-aos="fade-right" data-aos-delay="300">
                Share your stuffs and get recommendations.
              </P>
              <Link
                data-aos="fade-right"
                data-aos-delay="300"
                onClick={onClickToMarket}
              >
                Go to Market
              </Link>
            </InnerBox>
          </Box3>
        </Slide>
      </FullPage>
    </>
  );
}
