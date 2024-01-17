import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};

  &:hover {
    background-color: ${(props) => (props.$isBlack ? "black" : "red")};
  }
`;

const BoxWithStyledComponents = ({ $isBlack }) => {
  return <StyledBox $isBlack={$isBlack} />;
};

export default BoxWithStyledComponents;
