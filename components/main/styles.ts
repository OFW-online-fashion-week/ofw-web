import styled from "@emotion/styled";
import { BaseWrapper } from "../../styles";

export const Wrapper = styled(BaseWrapper)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainSlider = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;

export const SliderToIntroWrap = styled.div`
  width: 100%;
  height: 920px;
  background-image: url("/slider-intro-image.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroContainer = styled.div`
  width: 1300px;
  height: 350px;
  position: relative;
  .top {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & hr {
      border: none;
      width: 470px;
      height: 2px;
      background-color: white;
      margin: 0;
      padding: 0;
    }
    .welcome {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      position: absolute;
      & h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
        color: white;
      }
    }
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .intro-ment {
    text-align: center;
    margin-top: 60px;
    & p {
      color: white;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;

export const SideLine = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  background: linear-gradient(white, rgb(255, 255, 255, 0));
  right: 0;
`;
