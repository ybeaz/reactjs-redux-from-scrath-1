export const rootReducer = (state = { val: "" }, action) => {
  switch (action.type) {
    case "BUTTON_CLICK": {
      return { val: action.val };
    }

    default: {
      return state;
    }
  }
};
