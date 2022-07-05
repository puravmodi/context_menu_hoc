import styled from "styled-components";

export const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "blue" : theme.hover ? theme.hover : "#f1f1f1"};
  }

  > :first-child:not(:only-child) {
    margin-right: 10px;
  }

  .copy {
    color: skyblue;
  }

  .delete {
    color: red;
  }
  .send {
    color: blue;
  }
  .share {
    color: green;
  }
  .watchlist {
    color: rebeccapurple;
  }
`;
