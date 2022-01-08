import React, { useEffect, useRef, useState } from "react";

import { SiDiscord, SiTwitter, SiGithub } from "react-icons/si";

import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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
  MenuButton,
  Sidebar,
  CloseButton,
  SidebarLink,
} from "./header.styled";

import Logo from "assets/logo.png";
import { isMobileWidth } from "utils/getScreenWidth";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menushow, setMenushow] = useState(false);
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isMobileWidth(1024));
    });
    window.addEventListener("mousedown", handleClickOutside);
    setIsMobile(isMobileWidth(1024));

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(isMobileWidth(1024));
      });
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
      return;
    }
    setMenushow(false);
  };

  const handleShowClick = () => {
    setMenushow((prev) => !prev);
  };

  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoDiv>
          <LogoImg src={Logo} />
          Spotlight
        </LogoDiv>
        {isMobile ? (
          <MenuButton onClick={handleShowClick}>
            <BiMenu />
          </MenuButton>
        ) : (
          <Links>
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
          </Links>
        )}

        {isMobile && (
          <Sidebar active={menushow} ref={sidebarRef}>
            <CloseButton>
              <IoClose
                onClick={() => {
                  setMenushow(false);
                }}
              />
            </CloseButton>
            <SidebarLink>Home</SidebarLink>
            <SidebarLink>FAQ</SidebarLink>
            <SidebarLink>Privacy Policy</SidebarLink>
            <SidebarLink>Blog</SidebarLink>
            <SidebarLink>Discord</SidebarLink>
            <SidebarLink>Twitter</SidebarLink>
            <SidebarLink>Github</SidebarLink>
          </Sidebar>
        )}
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
