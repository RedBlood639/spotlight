import React from "react";
import { SiDiscord, SiTwitter, SiGithub } from "react-icons/si";
import { PageContainer } from "styledcomponents/global.styled";
import CustomParticles from "ui/templates/particle";
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
              {/* <MenuItem>FAQ</MenuItem>
              <MenuItem>Privacy Policy</MenuItem> */}
              <MenuItem
                href="https://medium.com/@FoundSpotlight/why-spotlight-70d533917635"
                target="_blank"
              >
                Blog
              </MenuItem>
            </LinkGroup>
            <HoDivider />
            <LinkGroup>
              <SocialItem href="https://discord.gg/rw4uXdn2Gb" target="_blank">
                <SiDiscord />
              </SocialItem>
              <SocialItem
                href="https://twitter.com/FoundSpotlight"
                target="_blank"
              >
                <SiTwitter />
              </SocialItem>
              <SocialItem
                href="https://github.com/redblood639/spotlight"
                target="_blank"
              >
                <SiGithub />
              </SocialItem>
            </LinkGroup>
          </FooterLinks>
          <CopyRight>{`©${new Date().getFullYear()} | Web4, Inc`}</CopyRight>
        </FooterContainer>
      </PageContainer>
      <CustomParticles id="footerParticles" />
    </FooterDiv>
  );
};

export default Footer;
