import { FILMS, LOADING_START, LOADING_END, PEOPLE } from "../actions/type";

const defaultState = {
  films: [],
  characters: [],
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
    case PEOPLE:
      return {
        ...state,
        characters: [...action.data],
      };
    default:
      return state;
  }
};

export default serviceReducer;
