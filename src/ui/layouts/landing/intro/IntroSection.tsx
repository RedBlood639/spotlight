import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import {
  AppLinks,
  AppTextDiv,
  IntroDiv,
  IntroImg,
  IntroTitle,
  IntroVideo,
  Overlay,
  StoreLink,
} from "./intro.styled";

import introAppImg from "assets/introapp.png";
import { Header } from "ui/layouts/appLayout";
import CustomParticles from "ui/templates/particle";

const IntroSection = () => {
  return (
    <IntroDiv>
      <div style={{ zIndex: 1 }}>
        <Header />
        <IntroTitle>
          ❤️{" "}
          <strong>
            Talk About the Places
            <br /> You Love
          </strong>{" "}
          ❤️
        </IntroTitle>
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
        <IntroImg src={introAppImg} alt="introapp" />
        <IntroVideo
          playsInline
          autoPlay
          muted
          loop
          poster="https://res.cloudinary.com/adidas-app/image/upload/q_auto:good/v1/feed-assets/qc8e4yx2n9uoqcatcfyv.jpeg"
        >
          <source
            src="https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/feed-assets/s2hbfykdr9woeyarvzik.mp4"
            type="video/mp4"
          />
        </IntroVideo>
      </div>
      <CustomParticles id="introParticles" />
      <Overlay />
    </IntroDiv>
  );
};

export default IntroSection;
