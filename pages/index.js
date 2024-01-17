import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";
import styled from "styled-components";
import StyledBox from "../components/BoxWithStyledComponents";

const HorizontaleAusrichtung = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <HorizontaleAusrichtung>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </HorizontaleAusrichtung>
  );
}
