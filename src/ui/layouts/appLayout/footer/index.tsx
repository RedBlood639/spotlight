import React from "react";
import { SiDiscord, SiTwitter, SiGithub } from "react-icons/si";
import { PageContainer } from "styledcomponents/global.styled";
import { HoDivider, SocialItem } from "../header/header.styled";
import {
  CopyRight,
  FooterContainer,
  FooterDiv,
  FooterEmpty,
  FooterLinks,
  LinkGroup,
  MenuItem,
} from "./footer.styled";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterEmpty />
      <PageContainer>
        <FooterContainer>
          <FooterLinks>
            <LinkGroup>
              <MenuItem>Home</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Privacy Policy</MenuItem>
              <MenuItem>Blog</MenuItem>
            </LinkGroup>
            <HoDivider />
            <LinkGroup>
              <SocialItem>
                <SiDiscord />
              </SocialItem>
              <SocialItem>
                <SiTwitter />
              </SocialItem>
              <SocialItem>
                <SiGithub />
              </SocialItem>
            </LinkGroup>
          </FooterLinks>
          <CopyRight>{`©${new Date().getFullYear()} | *A Thesis Build`}</CopyRight>
        </FooterContainer>
      </PageContainer>
    </FooterDiv>
  );
};

export default Footer;
