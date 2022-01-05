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
      <SubmitTitle>{"Get News and Updates"}</SubmitTitle>
      <SubmitInput placeholder="your@gmail.com" />
      <SubmitBtn>Submit</SubmitBtn>
    </SubmitCardDiv>
  );
};

export default SubmitCard;
