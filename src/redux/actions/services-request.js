import api from "../../services";
import { FILMS, LOADING_START, LOADING_END } from "./type";

const film = (data) => {
  return { type: FILMS, data };
};

const loadingStart = () => {
  return { type: LOADING_START };
};

const loadingEnd = () => {
  return { type: LOADING_END };
};

export const filmRequest = () => async (dispatch) => {
  try {
    dispatch(loadingStart());

    const response = await api.get("/films");
    const movies = response.data.results;

    dispatch(film(movies));
    dispatch(loadingEnd());
  } catch (error) {
    console.log(error);
    dispatch(loadingEnd());
  }
};
