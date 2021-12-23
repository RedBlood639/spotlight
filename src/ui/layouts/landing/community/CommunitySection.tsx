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
          <CommunityTitle>The Spotlight DAO</CommunityTitle>
        </CommunityHeader>
        <CommunityContent>
          <div style={{ zIndex: 1 }}>
            <Title>The first community owned wallet</Title>
            <Content>
              Tally is the first Web3 wallet that’s owned by its users, not a
              corporation. Join the pack on Discord before the Tally DAO
              launches.
            </Content>
            <DiscordButton>Join the Spotlight Discord</DiscordButton>
          </div>
          <div>
            <CommunityImg src={communityImg} alt="community" />
          </div>
        </CommunityContent>
      </PageContainer>
      <CustomParticles id="communityParticles" />
    </CommunityDiv>
  );
};

export default CommunitySection;