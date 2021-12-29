import React from "react";
import { SiDiscord, SiGithub } from "react-icons/si";
import { PageContainer } from "styledcomponents/global.styled";
import CustomParticles from "ui/templates/particle";
import { Overlay } from "../communityEdition/edition.styled";
import {
  CardContent,
  CardTitle,
  ContentGroup,
  FooterDiv,
  JoinButton,
  JoinCard,
  JoinCardGroup,
  Title,
} from "./join.styled";

const FooterSection = () => {
  return (
    <FooterDiv>
      <Overlay />
      <PageContainer>
        <ContentGroup>
          <Title>{"Let’s Build Spotlight Together"}</Title>
          <JoinCardGroup>
            <JoinCard>
              <CardTitle>
                <SiGithub />
                For Developers
              </CardTitle>
              <CardContent>
                {
                  "Want to contribute? Spotlight is 100% open source under GPL v3. Let’s build the next great wallet together."
                }
              </CardContent>
              <JoinButton>Go to Github</JoinButton>
            </JoinCard>
            <JoinCard>
              <CardTitle>
                <SiDiscord />
                Join the Pack
              </CardTitle>
              <CardContent>
                {
                  "Once you’ve tried the Community Edition, join Discord and let us know what we should add next!"
                }
              </CardContent>
              <JoinButton>Join Discord</JoinButton>
            </JoinCard>
          </JoinCardGroup>
        </ContentGroup>
      </PageContainer>
      <CustomParticles id="joinParticles" />
    </FooterDiv>
  );
};

export default FooterSection;
