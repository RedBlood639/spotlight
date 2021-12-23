import styled from "styled-components";

export const IntroDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  text-align: center;
  contain: content;
`;

export const IntroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  background-color: #002522;
  /* backdrop-filter: blur(5px); */
  width: 100%;
  height: 100%;
`;

export const IntroTitle = styled.div`
  font-size: clamp(32px, 10vw, 64px);
  text-align: center;
  width: 90%;
  color: #fff;
  text-shadow: 0 0 20px #0f0f0f80;
  max-width: 60rem;
  margin: auto;
`;

export const AppLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin: 50px 0;
  transition: all 0.2s ease-in-out;
  & > *:not(:first-child) {
    @media screen and (max-width: 450px) {
      margin-left: 0;
      margin-top: 20px;
    }
    margin-left: 20px;
  }
  z-index: 1;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const StoreLink = styled.div<{ color: string }>`
  z-index: 1;
  max-height: 100px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 15px 10px 10px;
  box-shadow: 0 0 10px #00000080;
  transition: 0.2s all;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    color: white;
  }
  :hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 450px) {
    max-width: 200px;
    width: 100%;
  }
`;

export const AppTextDiv = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  .title {
    font-size: 14px;
  }
  .subTitle {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const IntroImg = styled.img`
  width: 100%;
  max-width: 60rem;
  margin: auto;
`;
