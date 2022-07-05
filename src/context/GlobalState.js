import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  isMenuOpen: false,
  x: 0,
  y: 0,
  triggerId: null,
  theme: null,
};

//create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function toggleMenu(position) {
    dispatch({
      type: "TOGGLE_MENU",
      payload: position,
    });
  }

  function getTheme(theme) {
    dispatch({
      type: "GET_THEME",
      payload: { theme },
    });
  }

  function handleClose() {
    dispatch({
      type: "CLOSE_MENU",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen: state.isMenuOpen,
        toggleMenu,
        handleClose,
        getTheme,
        theme: state.theme,
        triggerId: state.triggerId,
        x: state.x,
        y: state.y,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
