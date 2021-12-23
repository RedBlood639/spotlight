import React from "react";
import {
  SubmitBtn,
  SubmitCardDiv,
  SubmitInput,
  SubmitTitle,
} from "./contact.styled";

const SubmitCard = () => {
  return (
    <SubmitCardDiv>
      <SubmitTitle>{"Get DAO News & Updates"}</SubmitTitle>
      <SubmitInput placeholder="your@gmail.com" />
      <SubmitBtn>Submit</SubmitBtn>
    </SubmitCardDiv>
  );
};

export default SubmitCard;
