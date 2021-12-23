import styled, { keyframes } from "styled-components";

export const HeaderDiv = styled.div`
  /* position: fixed; */
  width: 100%;
  z-index: 2;
  padding: 40px 0 10px;
  margin: auto;
  max-width: 80%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoRotate = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(360deg);
    }
    100% {
        transform: rotateY(0deg);
    }
`;

export const LogoDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 20px #ffffff;
`;

export const LogoImg = styled.img`
  width: 110px;
  animation: ${LogoRotate} 6s infinite linear;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkGroup = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 0 15px;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 3px;
    background-color: #5d50f0;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #5d50f0;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const SocialItem = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin: 0 15px;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    color: #5d50f0;
  }
`;

export const HoDivider = styled.div`
  width: 2px;
  background-color: #fff;
  margin: 0 5px;
  height: 20px;
`;
