const stylesReducer = function(state = null, action) {
  switch (action.type) {
    case "CHANGE_BACKGROUND": {
      return action.payload.color;
    }
    default:
      return state;
  }
};

export default stylesReducer;