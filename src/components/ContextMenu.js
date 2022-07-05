/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { StyledContextMenu } from "./ContextMenu.styles";

const ContextMenu = ({
  dataTrigger,
  children,
  className = "",
  onClick,
  theme,
  style = {},
  ...attrs
}) => {
  let { x, y, handleClose, triggerId, isMenuOpen, getTheme } =
    useContext(GlobalContext);

  const ref = useRef();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && triggerId === dataTrigger) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, [isMenuOpen, triggerId]);

  useEffect(() => {
    if (triggerId === dataTrigger) {
      getTheme(theme);
    }
  }, [triggerId, theme]);

  const posStyle = {
    ...(x + width > window.innerWidth ? { left: x - width } : { left: x }),
    ...(y + height > window.innerHeight ? { top: y - height } : { top: y }),
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClose();
    }
  };

  return (
    <>
      {isMenuOpen && triggerId === dataTrigger && (
        <StyledContextMenu
          className={`${className}`}
          ref={ref}
          theme={theme}
          onClick={handleClose}
          style={{ ...style, ...posStyle }}
          {...attrs}
        >
          {children}
        </StyledContextMenu>
      )}
    </>
  );
};

export default ContextMenu;
