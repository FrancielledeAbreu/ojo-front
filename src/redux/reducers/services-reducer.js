import { FILMS } from "../actions/type";

const defaultState = {
  films: [],
};
const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILMS:
      return {
        ...state,
        films: [...action.data],
      };
    default:
      return state;
  }
};

export default serviceReducer;
