import { SectionsContainer, Section } from "react-fullpage";
import styled from "@emotion/styled";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

const Body = styled.div``;
const Column1 = styled.div`
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

const Column2 = styled.div`
  background-image: url(/listen2.jpg);
  height: 100vh;
  background-position: 50% 35%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
    left: 0;
  }
`;

const Column3 = styled.div`
  background-image: url(/music1.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(1);
    position: absolute;
    background-color: #68584f6e;
    top: 0;
    left: 0;
  }
`;

const Inner = styled.div`
  padding: 0 100px;
  z-index: 10;
  & > h1 {
    font-size: 60px;
    font-family: "Poppins";
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
  }
  & > p {
    font-family: "Poppins";
    color: #fff;
    font-weight: 100;
    margin-bottom: 50px;
  }
`;
const Link = styled.a`
  font-family: "Poppins";
  color: #fff;

  & > button {
    background-color: transparent;
    border: 1px solid #f2f2f2;
    outline: none;
    font-weight: 200;
    padding: 10px 30px;
    transition: all 0.3s;
    &:hover {
      color: #fff;
      background-color: #dee85c;
      color: #4e433d;
    }
  }
`;

export default function MainPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/playlist");
  };
  useEffect(() => {
    AOS.init();
  });

  let options = {
    // activeClass: "active",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    arrowNavigation: true, // use arrow keys
    // className: "SectionContainer", // the class name for the section container
    // delay: 1000, // the scroll animation speed
    // navigation: true, // use dots navigation
    // scrollBar: false, // use the browser default scrollbar
    // sectionClassName: "Section", // the section class name
    // sectionPaddingTop: "0", // the section top padding
    // sectionPaddingBottom: "0", // the section bottom padding
    // verticalAlign: false, // align the content of each section vertical
  };
  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <Inner>
              <h1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Share your Vibe!
              </h1>
              <p data-aos="fade-right" data-aos-delay="300">
                Share your music and get recommendations.
              </p>
              <Link to="/playlist">
                <button onClick={onClickMove}>Go to Playlist</button>
              </Link>
            </Inner>
          </Column1>
        </Section>
        <Section>
          <Column2>
            <Inner>
              <h1>Share your Vibe!</h1>
              <p>Share your music and get recommendations.</p>
              <Link to="/playlist">
                <button>Go to Playlist</button>
              </Link>
            </Inner>
          </Column2>
        </Section>
        <Section>
          <Column3>
            <Inner>
              <h1>Share your Vibe!</h1>
              <p>Share your music and get recommendations.</p>
              <Link to="/playlist">
                <button>Go to Playlist</button>
              </Link>
            </Inner>
          </Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}
