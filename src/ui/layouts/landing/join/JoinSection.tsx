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
                  "Please take a look at our GitHub. We plan to be open source. come help us build."
                }
              </CardContent>
              <JoinButton
                href="https://github.com/redblood639/spotlight"
                target="_blank"
              >
                Go to Github
              </JoinButton>
            </JoinCard>
            <JoinCard>
              <CardTitle>
                <SiDiscord />
                Join the Pack
              </CardTitle>
              <CardContent>
                {"Come join the discord and hangout while you're hungry!"}
              </CardContent>
              <JoinButton href="https://discord.gg/rw4uXdn2Gb" target="_blank">
                Join Discord
              </JoinButton>
            </JoinCard>
          </JoinCardGroup>
        </ContentGroup>
      </PageContainer>
      <CustomParticles id="joinParticles" />
    </FooterDiv>
  );
};

export default FooterSection;
