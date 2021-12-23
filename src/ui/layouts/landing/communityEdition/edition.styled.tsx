import styled from "styled-components";

import bg from "assets/bg-1.svg";

export const Overlay = styled.div`
  position: absolute;
  background-color: #1a213a94;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
`;

export const EditionDiv = styled.div`
  position: relative;
  padding: 6rem 2rem;
  /* background: radial-gradient(
      75.24% 75.24% at 50% 109.48%,
      rgba(153, 168, 167, 0.2) 0,
      rgba(25, 51, 48, 0.2) 100%
    ),
    #001413; */
  background: url(${bg});
  background-position: top center;
  /* border-top: 5px dotted #adadad;
  border-bottom: 5px dotted #adadad; */
`;

export const Title = styled.div`
  z-index: 1;
  margin: 2rem auto;
  font-family: QuincyCF-Regular;
  font-size: clamp(18px, 6vw, 36px);
  font-weight: 400;
  color: #faf8f1;
  text-align: center;
`;

export const EditionGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 80rem;
  margin: auto;
  z-index: 1;
  justify-content: space-evenly;
`;

export const EditionImg = styled.img`
  margin: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;
