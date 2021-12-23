import React from "react";
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { PageContainer } from "styledcomponents/global.styled";
import CustomParticles from "ui/templates/particle";
import { AppLinks, AppTextDiv, StoreLink } from "../intro/intro.styled";
import { ContactCol, ContactDiv, Title } from "./contact.styled";
import ContactCard from "./ContactCard";
import SubmitCard from "./SubmitCard";

const ContactSection = () => {
  return (
    <ContactDiv>
      <PageContainer style={{ zIndex: 1 }}>
        <div style={{ zIndex: 1, display: "grid" }}>
          <ContactCard
            title="Call for Delegates for the Spotlight DAO"
            date="December 1, 2021"
            text="Tally is open source under GNU General Public License v3."
          />
        </div>
        <ContactCol>
          <ContactCard
            title="Open Source Announcement"
            date="November 17, 2021"
            text="Tally is open source under GNU General Public License v3."
          />
          <ContactCard
            title="How to Try Tally"
            date="December 15, 2021"
            text="The Community Edition includes everything you need for DeFi."
          />
        </ContactCol>
        <div style={{ zIndex: 1, display: "grid" }}>
          <SubmitCard />
        </div>
        <Title
          style={{ textAlign: "center", fontSize: "50px", marginTop: "50px" }}
        >
          Talk about the places you love
        </Title>
        <AppLinks>
          <StoreLink color="#000">
            <FaApple />
            <AppTextDiv color="#fff">
              <div className="title">Download on the</div>
              <div className="subTitle">App Store</div>
            </AppTextDiv>
          </StoreLink>
          <StoreLink color="rgb(216, 226, 237)">
            <FcAndroidOs />
            <AppTextDiv color="#000">
              <div className="title">Join the Android beta</div>
              <div className="subTitle">Play Store</div>
            </AppTextDiv>
          </StoreLink>
        </AppLinks>
      </PageContainer>
      <CustomParticles id="contactParticles" />
    </ContactDiv>
  );
};

export default ContactSection;
