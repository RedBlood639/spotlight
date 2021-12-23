import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import {
  AppLinks,
  AppTextDiv,
  IntroDiv,
  IntroImg,
  IntroTitle,
  IntroVideo,
  StoreLink,
} from "./intro.styled";

import introAppImg from "assets/introapp.png";
import { Header } from "ui/layouts/appLayout";

const IntroSection = () => {
  return (
    <IntroDiv>
      <Header />
      <IntroTitle>
        <strong>Talk about the places </strong>
        <br />
        <strong>
          you love{" "}
          <img
            loading="lazy"
            width="150px"
            src="https://149646107.v2.pressablecdn.com/wp-content/uploads/2021/10/image-10-300x100.png"
            alt=""
          />
        </strong>
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
        // poster="https://res.cloudinary.com/adidas-app/image/upload/q_auto:good/v1/feed-assets/qc8e4yx2n9uoqcatcfyv.jpeg"
      >
        <source src="introvideo.mp4" type="video/mp4" />
      </IntroVideo>
      {/* <Overlay /> */}
    </IntroDiv>
  );
};

export default IntroSection;
