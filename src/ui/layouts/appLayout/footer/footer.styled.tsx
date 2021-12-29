import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: #0f2330;
  position: relative;
  #footerParticles {
    top: 0;
    left: 0;
    canvas {
      position: absolute !important;
    }
  }
`;

export const FooterEmpty = styled.div`
  /* background-color: #002522; */
  margin-top: -60px;
  height: 48px;
`;

export const FooterContainer = styled.div`
  padding: 50px 0 50px 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export const LinkGroup = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin: 0 15px;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: #fff;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #fff;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const CopyRight = styled.div`
  margin: 2rem 0;
  font-family: QuincyCF-Regular;
  font-size: 12px;
  color: #fff;
  text-align: center;
`;
