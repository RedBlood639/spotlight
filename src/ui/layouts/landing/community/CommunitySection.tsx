import React from "react";

import { PageContainer } from "styledcomponents/global.styled";
import {
  CommunityContent,
  CommunityDiv,
  CommunityHeader,
  CommunityImg,
  CommunityTitle,
  Content,
  DiscordButton,
  LaunchingBadge,
  Title,
} from "./community.styled";

import communityImg from "assets/community.png";
import CustomParticles from "ui/templates/particle";

const CommunitySection = () => {
  return (
    <CommunityDiv>
      <PageContainer style={{ zIndex: 1 }}>
        <CommunityHeader>
          <LaunchingBadge>Launching Soon</LaunchingBadge>
          <CommunityTitle>Who We Are</CommunityTitle>
        </CommunityHeader>
        <CommunityContent>
          <div style={{ zIndex: 1, display: "flex", flexDirection: "column" }}>
            <Title>Welcome to the modern review platform</Title>
            <Content>
              Spotlight is a modern review platform for restaurants and
              businesses. We ultimately want to release the platform to the
              community in the form of a DAO. Join the Discord and come help
              shape the future of review platforms.
            </Content>
            <DiscordButton href="https://discord.gg/rw4uXdn2Gb" target="_blank">
              Join the Spotlight Discord
            </DiscordButton>
          </div>
          <div style={{ textAlign: "center" }}>
            <CommunityImg src={communityImg} alt="community" />
          </div>
        </CommunityContent>
      </PageContainer>
      <CustomParticles id="communityParticles" />
    </CommunityDiv>
  );
};

export default CommunitySection;
