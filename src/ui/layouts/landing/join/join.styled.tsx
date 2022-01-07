import styled from "styled-components";

import footerImg from "assets/footer.svg";

export const FooterDiv = styled.div`
  #joinParticles {
    z-index: 0;
    top: 0;
    canvas {
      position: absolute !important;
    }
  }
  padding: 4rem 0;
  position: relative;
  width: 100%;
  min-height: 500px;
  background: url(${footerImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentGroup = styled.div`
  z-index: 1;
  display: grid;
`;

export const Title = styled.div`
  font-family: QuincyCF-Regular;
  font-size: clamp(25px, 6vw, 36px);
  font-weight: 400;
  color: #faf8f1;
  text-align: center;
  margin: 36px 0;
  z-index: 1;
`;

export const JoinCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const JoinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 15rem;
  backdrop-filter: blur(5px);
  z-index: 1;
  background: #06052066;
  padding: 30px 30px;
  border-radius: 20px;
  border: 1px solid #4f5c5a;
  transition: all 0.2s;
  cursor: pointer;
  align-items: center;
  :hover {
    border: 1px solid #d08e39;
    background: linear-gradient(180deg, #110a9b20 13.79%, #07026386), #001615a0;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;

  flex-flow: row;
  margin: 1rem;
  font-family: QuincyCF-Regular;
  font-size: clamp(25px, 4vw, 36px);
  font-weight: 400;
  color: #faf8f1;
  svg {
    margin-right: 1rem;
  }
`;

export const CardContent = styled.div`
  max-width: 20rem;
  margin: 1rem;
  font-family: Segment-Regular;
  font-size: 18px;
  color: #ccd3d3;
`;

export const JoinButton = styled.a`
  background-color: #b6792b;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 2rem;
  color: #002522;
  font-size: 100%;
  line-height: 1.15;
  padding: 12px 24px;
  margin: 10px;
  transition: all 0.2s;
  :hover {
    background-color: #946527;
  }
`;
