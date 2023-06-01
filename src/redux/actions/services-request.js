import api from "../../services";
import { FILMS } from "./type";

const film = (data) => {
  return { type: FILMS, data };
};

export const filmRequest = () => async (dispatch) => {
  try {
    const response = await api.get("/films");
    const movies = response.data.results;
    dispatch(film(movies));
  } catch (error) {
    console.log(error);
  }
};
