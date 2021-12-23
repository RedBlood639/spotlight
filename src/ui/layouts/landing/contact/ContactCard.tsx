import React from "react";
import {
  ContactCardDiv,
  Content,
  ContentDiv,
  Date,
  ReadMore,
  Title,
  TitleDiv,
} from "./contact.styled";

const ContactCard = ({ title, date, text }: any) => {
  return (
    <ContactCardDiv>
      <TitleDiv>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </TitleDiv>
      <ContentDiv>
        <Content>{text}</Content>
        <ReadMore>Read More...</ReadMore>
      </ContentDiv>
    </ContactCardDiv>
  );
};

export default ContactCard;
