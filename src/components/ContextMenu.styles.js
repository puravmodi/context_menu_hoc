import styled from "styled-components";

export const StyledContextMenu = styled.div`
  position: fixed;
  width: 200px;
  border-radius: 4px;
  padding: 10px 0;
  z-index: 99;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) =>
    theme === "dark"
      ? "#262933"
      : theme.background
      ? theme.background
      : "white"};
  color: ${({ theme }) =>
    theme === "dark" ? "white" : theme.color ? theme.color : "black"};
`;
