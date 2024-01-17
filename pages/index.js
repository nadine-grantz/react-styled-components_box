import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";
import styled from "styled-components";

const HorizontalContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <HorizontalContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </HorizontalContainer>
  );
}
