import React from "react";
import {
  EditionDiv,
  EditionGroup,
  EditionImg,
  Title,
  Overlay,
} from "./edition.styled";

import yearn from "assets/yearn.svg";
import keep from "assets/keep.svg";
import saddle from "assets/saddle.svg";

const EditionSection = () => {
  return (
    <EditionDiv>
      <Overlay />
      <div style={{ zIndex: 1, display: "grid" }}>
        <Title>Try the Community Edition with</Title>
        <EditionGroup>
          <EditionImg src={yearn} alt="yearn" />
          <EditionImg src={keep} alt="keep" />
          <EditionImg src={saddle} alt="saddle" />
        </EditionGroup>
      </div>
    </EditionDiv>
  );
};

export default EditionSection;
