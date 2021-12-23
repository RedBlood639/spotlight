import styled from "styled-components";
import star from "assets/star.svg";

export const CommunityDiv = styled.div`
  #communityParticles {
    z-index: 0;
    top: 0;
    canvas {
      position: absolute !important;
    }
  }
  position: relative;
  background: no-repeat top -8rem center/40rem auto url(${star}),
    no-repeat linear-gradient(180deg, #0c093e86 0, #1a213a 35rem), #363748;
  padding-bottom: 70px;
`;

export const LaunchingBadge = styled.div`
  margin: 2rem auto;
  padding: 0.375rem 1.5rem;
  border: 1px solid #d08e39;
  border-radius: 2rem;
  color: #d08e39;
  font-size: 14px;
  width: fit-content;
`;

export const CommunityHeader = styled.div`
  padding: 60px 0;
  text-align: center;
`;

export const CommunityTitle = styled.div`
  margin: 0;
  font-family: QuincyCF-Regular;
  font-weight: 400;
  font-size: clamp(32px, 10vw, 64px);
  color: #faf8f1;
  text-align: center;
`;

export const CommunityContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  color: #d08e39;
  font-weight: 400;
  font-size: clamp(20px, 8vw, 40px);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  font-size: clamp(20px, 4vw, 20px);
  color: #99a8a7;
  margin: 18px 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DiscordButton = styled.div`
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: 1rem;
  }
  font-size: clamp(14px, 2vw, 12px);
  margin-top: 2rem;
  background-color: #d08e39;
  padding: 0.75rem 1.5rem;
  text-align: center;
  max-width: calc(250px - 3rem);
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;
  color: #002522;
  transition: 0.2s all;
  :hover {
    background-color: #a17335;
  }
`;

export const CommunityImg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
