import { FILMS, LOADING_START, LOADING_END } from "../actions/type";

const defaultState = {
  films: [],
  isLoading: false,
};
const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
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
