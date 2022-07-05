/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: true,
        x: action.payload.x,
        y: action.payload.y,
        triggerId: action.payload.triggerId,
      };
    case "CLOSE_MENU":
      return {
        ...state,
        isMenuOpen: false,
      };

    case "GET_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };

    default:
      return state;
  }
};
