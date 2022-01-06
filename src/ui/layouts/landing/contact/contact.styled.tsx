import styled from "styled-components";

export const ContactDiv = styled.div`
  #contactParticles {
    z-index: 0;
    canvas {
      position: absolute !important;
    }
  }
  position: relative;
  background: #060c1f linear-gradient(180deg, #060c1f, #11143b, #172937);
  padding-bottom: 10px;
`;

export const ContactCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0;
  grid-gap: 20px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 15rem;
  backdrop-filter: blur(5px);
  z-index: 1;
  background: #06052086;
  padding: 30px 30px;
  border-radius: 20px;
  border: 1px solid #193330;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    border: 1px solid #d08e39;
    background: linear-gradient(180deg, #110a9b20 13.79%, #07026386), #001615a0;
  }
`;

export const TitleDiv = styled.div``;

export const Title = styled.div`
  margin: 1rem;
  font-family: QuincyCF-Regular;
  font-size: clamp(18px, 6vw, 36px);
  font-weight: 400;
  color: #faf8f1;
`;

export const Date = styled.div`
  color: #99a8a7;
  font-size: 12px;
  line-height: 26px;
  margin: -10px 1rem;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  color: #ccd3d3;
  flex: 1 1;
  margin: 1rem;
`;

export const ReadMore = styled.div`
  margin: 1rem;
  font-size: 18px;
  transition: all 0.2s;
  color: #ccd3d3;
  :hover {
    color: #d08e39;
  }
`;

export const SubmitCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
  z-index: 1;
  background: #1a213a80;
  backdrop-filter: blur(5px);
  padding: 30px 30px;
  border-radius: 20px;
  border: 1px solid #879291;
  transition: all 0.2s;
`;

export const SubmitTitle = styled.div`
  margin: 0.5rem;
  font-family: Segment-Regular;
  font-size: 18px;
  color: #99a8a7;
`;

export const SubmitInput = styled.input`
  margin: 0.5rem;
  background: #33514e00;
  width: 90%;
  max-width: 32rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid #667c7a;
  border-radius: 0.5rem;
  outline: none;
  font-family: QuincyCF-Text;
  font-size: 24px;
  color: #faf8f1;
`;

export const SubmitBtn = styled.div`
  background-color: #b6792b;
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
