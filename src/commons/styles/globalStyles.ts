import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700");
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Leferi", "Poppins";
  }

  @font-face {
    font-family: "Leferi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Leferi-bl";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Leferi-reg";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-RegularA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  // fullpage

  /* .controlBtn {
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    width: 5px;
    height: 15px;
    margin: 0 5px;
    font-size: 0px;
    cursor: pointer;
  }

  .controlBtn:disabled {
    background-color: black;
    border: 1px solid white;
  } */
`;
