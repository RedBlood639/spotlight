import React from "react";

import { SiDiscord, SiTwitter, SiGithub } from "react-icons/si";

import {
  HeaderContainer,
  HeaderDiv,
  HoDivider,
  LogoDiv,
  LogoImg,
  LinkGroup,
  MenuItem,
  Links,
  SocialItem,
} from "./header.styled";

import Logo from "assets/logo.png";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoDiv>
          <LogoImg src={Logo} />
          Spotlight
        </LogoDiv>
        <Links>
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
        </Links>
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
