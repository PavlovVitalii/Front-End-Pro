const initialState = {
  items: [],
  inputValue: "",
};

export const ADD_VALUE = "value";
export const ADD_ITEM = "item";
export const TO_DO_IS_DONE = "done";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, inputValue: action.payload };
    case ADD_ITEM:
      return { ...state, items: action.payload };
    case TO_DO_IS_DONE:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
