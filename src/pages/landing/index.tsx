import React from "react";

import {
  CommunitySection,
  ContactSection,
  JoinSection,
  IntroSection,
} from "ui/layouts/landing";
import { PageDiv } from "styledcomponents/global.styled";
import { Footer } from "ui/layouts/appLayout";

const Landing = () => {
  return (
    <PageDiv>
      <IntroSection />
      <CommunitySection />
      <ContactSection />
      <JoinSection />
      <Footer />
    </PageDiv>
  );
};

export default Landing;
