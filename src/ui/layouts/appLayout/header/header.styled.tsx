import styled, { keyframes } from "styled-components";

export const HeaderDiv = styled.div`
  /* position: fixed; */
  width: 95%;
  z-index: 2;
  padding: 1rem 0 10px;
  margin: auto;
  max-width: 80rem;
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

export const MenuButton = styled.div`
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 1;
`;

export const LogoDiv = styled.div`
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 20px #ffffff;
  transition: all 0.2s;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;

export const LogoImg = styled.img`
  width: 110px;
  /* animation: ${LogoRotate} 6s infinite linear; */
  transition: all 0.2s;
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkGroup = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  z-index: 1;
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
  z-index: 1;
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
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Sidebar = styled.div<{ active: boolean }>`
  top: 0;
  width: 320px;
  position: fixed;
  min-height: 100%;
  background-color: #00000080;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease-in-out;
  ${({ active }) => (active ? "right: 0;" : "right: -340px;")}
  z-index: 3;
  box-shadow: 0 0 20px #000;
`;

export const CloseButton = styled.div`
  width: 100%;
  font-size: 30px;
  color: white;
  padding: 20px 40px;
  text-align: left;
  svg {
    cursor: pointer;
  }
`;

export const SidebarLink = styled.div`
  padding: 15px 50px;
  font-size: 20px;
  color: white;
  text-align: left;
  cursor: pointer;
`;
