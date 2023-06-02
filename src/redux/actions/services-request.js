import api from "../../services";
import { FILMS, LOADING_START, LOADING_END, PEOPLE } from "./type";

const film = (data) => {
  return { type: FILMS, data };
};

const people = (data) => {
  return { type: PEOPLE, data };
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

export const peopleRequest = () => async (dispatch) => {
  try {
    dispatch(loadingStart());

    const characters = [];

    const fetchCharacters = async (page) => {
      const response = await api.get(`/people?page=${page}`);
      characters.push(...response.data.results);

      if (response.data.next) {
        const nextPage = response.data.next.split("=")[1];
        await fetchCharacters(nextPage);
      }
    };

    await fetchCharacters(1);

    dispatch(people(characters));
    dispatch(loadingEnd());
  } catch (error) {
    console.log(error);
    dispatch(loadingEnd());
  }
};
