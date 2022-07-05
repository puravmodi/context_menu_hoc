import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { StyledWrapperTrigger } from "./ContextMenuWrapperTrigger.styles";

const ContextMenuWrapperTrigger = ({
  triggerId,
  children,
  onContextMenu,
  className = "",
  style = {},
  ...attrs
}) => {
  const { toggleMenu } = useContext(GlobalContext);
  const toggleMenuHandler = (e) => {
    e.preventDefault();
    const clickPosition = {
      x: e.pageX,
      y: e.pageY,
      triggerId: triggerId,
    };
    toggleMenu(clickPosition);
  };
  return (
    <StyledWrapperTrigger
      className={`${className}`}
      style={{ ...style }}
      onContextMenu={toggleMenuHandler}
      {...attrs}
    >
      {children}
    </StyledWrapperTrigger>
  );
};

export default ContextMenuWrapperTrigger;
