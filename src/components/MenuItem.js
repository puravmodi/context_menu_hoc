import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { StyledMenuItem } from "./MenuItem.styles";

const MenuItem = ({ children, className = "", ...attrs }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <StyledMenuItem theme={theme} className={`${className}`} {...attrs}>
        {children}
      </StyledMenuItem>
    </>
  );
};

export default MenuItem;
